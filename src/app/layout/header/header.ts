import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit, OnDestroy {
  isScrolled = false;
  isMobileMenuOpen = false;
  isHomePage = true;

  private routerSub!: Subscription;

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkRoute(this.router.url);
    this.routerSub = this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e) => {
        this.checkRoute((e as NavigationEnd).urlAfterRedirects);
      });
  }

  ngOnDestroy() {
    this.routerSub?.unsubscribe();
  }

  private checkRoute(url: string) {
    this.isHomePage = url === '/' || url === '';
  }

  get shouldShowSolid(): boolean {
    return !this.isHomePage || this.isScrolled;
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = '';
  }

  onLogoClick(event: Event) {
    if (this.isHomePage) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
