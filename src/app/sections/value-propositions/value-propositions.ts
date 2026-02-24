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
      icon: '🎯',
      title: 'End-to-End Ownership',
      description:
        "We don't just build features — we own the entire product lifecycle from architecture to deployment and beyond.",
    },
    {
      icon: '🛡️',
      title: 'Security by Default',
      description:
        'GDPR-compliant, encrypted by design, privacy-first engineering. Every product we ship meets the highest standards.',
    },
    {
      icon: '🤝',
      title: 'Real Partnership, Not Outsourcing',
      description:
        'We work as an extension of your team. Regular communication, shared goals, transparent progress.',
    },
    {
      icon: '💎',
      title: 'Clear Pricing, No Surprises',
      description:
        "Transparent project scoping and pricing. You always know what you're paying for and what's coming next.",
    },
  ];
}
