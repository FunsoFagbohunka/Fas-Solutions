import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPANY } from '../../core/company.config';
import {
  TranslationService,
  SUPPORTED_LANGUAGES,
  Language,
} from '../../core/i18n/translation.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { ClickOutsideDirective } from '../../shared/directives/click-outside.directive';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, TranslatePipe, ClickOutsideDirective],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly company = COMPANY;
  currentYear = new Date().getFullYear();
  languages = SUPPORTED_LANGUAGES;
  isLangMenuOpen = false;

  constructor(public i18n: TranslationService) {}

  get currentLanguage(): Language {
    return this.i18n.currentLanguage();
  }

  toggleLangMenu(): void {
    this.isLangMenuOpen = !this.isLangMenuOpen;
  }

  closeLangMenu(): void {
    this.isLangMenuOpen = false;
  }

  selectLanguage(lang: Language): void {
    this.i18n.setLanguage(lang.code);
    this.isLangMenuOpen = false;
  }
}
