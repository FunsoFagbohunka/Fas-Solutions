import { Injectable, PLATFORM_ID, inject, signal, computed } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

export const SUPPORTED_LANGUAGES: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', flag: '🇵🇱' },
  { code: 'sv', name: 'Swedish', nativeName: 'Svenska', flag: '🇸🇪' },
  { code: 'da', name: 'Danish', nativeName: 'Dansk', flag: '🇩🇰' },
  { code: 'no', name: 'Norwegian', nativeName: 'Norsk', flag: '🇳🇴' },
  { code: 'fi', name: 'Finnish', nativeName: 'Suomi', flag: '🇫🇮' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
  { code: 'uk', name: 'Ukrainian', nativeName: 'Українська', flag: '🇺🇦' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷' },
  { code: 'cs', name: 'Czech', nativeName: 'Čeština', flag: '🇨🇿' },
  { code: 'ro', name: 'Romanian', nativeName: 'Română', flag: '🇷🇴' },
  { code: 'el', name: 'Greek', nativeName: 'Ελληνικά', flag: '🇬🇷' },
  { code: 'th', name: 'Thai', nativeName: 'ไทย', flag: '🇹🇭' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'hu', name: 'Hungarian', nativeName: 'Magyar', flag: '🇭🇺' },
];

const STORAGE_KEY = 'fas-lang';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private platformId = inject(PLATFORM_ID);
  private translations = signal<Record<string, string>>({});
  private _currentLang = signal<string>('en');

  readonly currentLang = this._currentLang.asReadonly();
  readonly currentLanguage = computed(
    () => SUPPORTED_LANGUAGES.find((l) => l.code === this._currentLang()) ?? SUPPORTED_LANGUAGES[0],
  );
  readonly languages = SUPPORTED_LANGUAGES;

  constructor() {
    const lang = this.detectLanguage();
    this.setLanguage(lang);
  }

  /**
   * Detect user language from:
   * 1. localStorage (previous choice)
   * 2. navigator.language (browser setting)
   * 3. fallback to 'en'
   */
  private detectLanguage(): string {
    if (!isPlatformBrowser(this.platformId)) return 'en';

    // Check localStorage for saved preference
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED_LANGUAGES.some((l) => l.code === saved)) {
      return saved;
    }

    // Check browser language
    const browserLang = navigator.language?.split('-')[0]?.toLowerCase();
    if (browserLang && SUPPORTED_LANGUAGES.some((l) => l.code === browserLang)) {
      return browserLang;
    }

    // Check navigator.languages array
    if (navigator.languages) {
      for (const lang of navigator.languages) {
        const code = lang.split('-')[0].toLowerCase();
        if (SUPPORTED_LANGUAGES.some((l) => l.code === code)) {
          return code;
        }
      }
    }

    return 'en';
  }

  async setLanguage(langCode: string): Promise<void> {
    if (!SUPPORTED_LANGUAGES.some((l) => l.code === langCode)) {
      langCode = 'en';
    }

    try {
      const translations = await this.loadTranslations(langCode);
      this.translations.set(translations);
      this._currentLang.set(langCode);

      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem(STORAGE_KEY, langCode);
        document.documentElement.lang = langCode;
        // Set direction for RTL languages
        document.documentElement.dir = langCode === 'ar' ? 'rtl' : 'ltr';
      }
    } catch (e) {
      console.warn(`Failed to load translations for ${langCode}, falling back to English.`);
      if (langCode !== 'en') {
        await this.setLanguage('en');
      }
    }
  }

  private async loadTranslations(langCode: string): Promise<Record<string, string>> {
    const response = await fetch(`/assets/i18n/${langCode}.json`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  }

  /**
   * Translate a key. Supports dot-notation for nested keys.
   * Falls back to the key itself if not found.
   */
  translate(key: string): string {
    const dict = this.translations();
    return dict[key] ?? key;
  }
}
