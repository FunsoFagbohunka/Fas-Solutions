import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ValueProp {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-value-propositions',
  imports: [CommonModule],
  templateUrl: './value-propositions.html',
  styleUrl: './value-propositions.scss',
})
export class ValuePropositions {
  values: ValueProp[] = [
    {
      icon: '🇨🇭',
      title: 'Swiss Quality, Global Reach',
      description:
        'Built and registered in Switzerland, serving clients and therapists across Europe and beyond. Our infrastructure meets the highest standards of reliability and compliance.',
    },
    {
      icon: '🛡️',
      title: 'Your Data, Your Control',
      description:
        "GDPR compliant, Swiss-hosted infrastructure, end-to-end encryption. We never sell your data. Your privacy is not a feature — it's a foundation.",
    },
    {
      icon: '💬',
      title: 'Support That Cares',
      description:
        'Real human support for both therapists and clients. Fast response times, multilingual help, and a team that genuinely understands mental health.',
    },
    {
      icon: '💎',
      title: 'Affordable & Transparent',
      description:
        "No hidden fees. Clear subscription plans for therapists, transparent pricing for clients. Quality mental health care shouldn't break the bank.",
    },
  ];
}
