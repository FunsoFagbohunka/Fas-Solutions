import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { TRANSLATION_LOADER, TranslationLoader } from './core/i18n/translation-loader';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

function createServerTranslationLoader(): TranslationLoader {
  return {
    async load(langCode: string): Promise<Record<string, string>> {
      const filePath = join(process.cwd(), 'public', 'assets', 'i18n', `${langCode}.json`);
      const fileContents = readFileSync(filePath, 'utf-8');
      return JSON.parse(fileContents) as Record<string, string>;
    },
  };
}

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes)),
    { provide: TRANSLATION_LOADER, useFactory: createServerTranslationLoader },
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
