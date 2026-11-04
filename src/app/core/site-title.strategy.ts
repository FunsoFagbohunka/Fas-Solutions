import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { COMPANY } from './company.config';
import { SEO_PAGES, pageUrl } from './seo-pages';

@Injectable()
export class SiteTitleStrategy extends TitleStrategy {
  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const path = snapshot.root.firstChild?.routeConfig?.path;
    const page =
      path !== undefined && Object.hasOwn(SEO_PAGES, path)
        ? SEO_PAGES[path as keyof typeof SEO_PAGES]
        : undefined;

    this.document.head
      .querySelectorAll('[data-fas-seo]')
      .forEach((element) => element.parentNode?.removeChild(element));
    this.meta.removeTag('name="robots"');
    this.meta.removeTag('name="keywords"');
    for (const property of [
      'og:title',
      'og:description',
      'og:type',
      'og:url',
      'og:site_name',
      'og:image',
    ]) {
      this.meta.removeTag(`property="${property}"`);
    }

    if (!page || path === undefined) {
      this.title.setTitle('Page not found | ' + COMPANY.name);
      this.meta.removeTag('name="description"');
      this.meta.addTag({ name: 'robots', content: 'noindex' });
      return;
    }

    const url = pageUrl(path);
    this.title.setTitle(page.title);
    this.meta.updateTag({ name: 'description', content: page.description });
    if ('indexable' in page && !page.indexable) {
      this.meta.addTag({ name: 'robots', content: 'noindex' });
    }
    if ('keywords' in page) this.meta.addTag({ name: 'keywords', content: page.keywords });
    this.meta.addTags([
      { property: 'og:title', content: page.title },
      { property: 'og:description', content: page.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: url },
      { property: 'og:site_name', content: COMPANY.name },
      { property: 'og:image', content: pageUrl('assets/images/product/platform.webp') },
    ]);
    const canonical = this.document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = url;
    canonical.setAttribute('data-fas-seo', '');
    this.document.head.appendChild(canonical);

    if (path === '') {
      const schema = this.document.createElement('script');
      schema.type = 'application/ld+json';
      schema.setAttribute('data-fas-seo', '');
      schema.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          { '@type': 'WebSite', name: COMPANY.name, url },
          { '@type': 'Organization', name: COMPANY.legalName, url, email: COMPANY.email },
        ],
      });
      this.document.head.appendChild(schema);
    }
  }
}
