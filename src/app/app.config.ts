import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { TitleStrategy, provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { SiteTitleStrategy } from './core/site-title.strategy';
import { TranslationService } from './core/i18n/translation.service';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { TRANSLATION_LOADER, createBrowserTranslationLoader } from './core/i18n/translation-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAppInitializer(() => inject(TranslationService).initialize()),
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'top', anchorScrolling: 'enabled' }),
    ),
    { provide: TitleStrategy, useClass: SiteTitleStrategy },
    provideClientHydration(withEventReplay()),
    { provide: TRANSLATION_LOADER, useFactory: createBrowserTranslationLoader },
  ],
};
