import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

interface Highlight {
  icon: string;
  titleKey: string;
  descKey: string;
}

@Component({
  selector: 'app-product-showcase',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './product-showcase.html',
  styleUrl: './product-showcase.scss',
})
export class ProductShowcase {
  highlights: Highlight[] = [
    { icon: '🔒', titleKey: 'product.secure_title', descKey: 'product.secure_desc' },
    { icon: '📅', titleKey: 'product.scheduling_title', descKey: 'product.scheduling_desc' },
    { icon: '🌍', titleKey: 'product.multilingual_title', descKey: 'product.multilingual_desc' },
  ];
}
