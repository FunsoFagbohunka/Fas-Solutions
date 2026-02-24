import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Highlight {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-product-showcase',
  imports: [CommonModule],
  templateUrl: './product-showcase.html',
  styleUrl: './product-showcase.scss',
})
export class ProductShowcase {
  highlights: Highlight[] = [
    {
      icon: '🔒',
      title: 'Secure & Private',
      description: 'End-to-end encrypted sessions with Swiss-grade data protection.',
    },
    {
      icon: '📅',
      title: 'Easy Scheduling',
      description: 'Book appointments with licensed therapists in just a few clicks.',
    },
    {
      icon: '🌍',
      title: 'Multilingual',
      description: 'Available in English, German, French, Spanish, and Italian.',
    },
  ];
}
