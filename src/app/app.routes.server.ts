import { RenderMode, ServerRoute } from '@angular/ssr';
import { SEO_PAGES } from './core/seo-pages';

export const serverRoutes: ServerRoute[] = [
  ...Object.keys(SEO_PAGES).map((path) => ({ path, renderMode: RenderMode.Prerender as const })),
  { path: '**', renderMode: RenderMode.Server, status: 404 },
];
