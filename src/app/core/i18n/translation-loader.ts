import { InjectionToken } from '@angular/core';

export type TranslationDict = Record<string, string>;

export interface TranslationLoader {
  load(langCode: string): Promise<TranslationDict>;
}

export const TRANSLATION_LOADER = new InjectionToken<TranslationLoader>('TRANSLATION_LOADER');

export function createBrowserTranslationLoader(): TranslationLoader {
  return {
    async load(langCode: string): Promise<TranslationDict> {
      const response = await fetch(`/assets/i18n/${langCode}.json`);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    },
  };
}
