import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features',
  imports: [CommonModule],
  templateUrl: './features.html',
  styleUrl: './features.scss',
})
export class Features {
  features: Feature[] = [
    {
      icon: '🎥',
      title: 'Video Sessions',
      description: 'Face-to-face therapy via secure, HD video calls with licensed professionals.',
    },
    {
      icon: '📅',
      title: 'Smart Scheduling',
      description: 'Flexible appointment booking that fits your lifestyle and timezone.',
    },
    {
      icon: '🔒',
      title: 'Privacy First',
      description: 'Swiss-grade data protection, GDPR compliant, end-to-end encryption.',
    },
    {
      icon: '💳',
      title: 'Simple Pricing',
      description: 'Transparent pricing with Stripe-powered secure payments.',
    },
    {
      icon: '🌐',
      title: 'Multilingual Support',
      description: 'Platform available in 5 languages for a global audience.',
    },
    {
      icon: '📊',
      title: 'Progress Tracking',
      description: 'Track your therapeutic journey with questionnaires and insights.',
    },
  ];
}
