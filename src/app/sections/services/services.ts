import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ServiceCard {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  services: ServiceCard[] = [
    {
      icon: '💡',
      title: 'Product Development',
      description:
        'We take your idea from concept to a fully deployed SaaS product. Architecture, design, frontend, backend — end to end.',
    },
    {
      icon: '⚙️',
      title: 'Custom Software Solutions',
      description:
        'Need a bespoke tool, internal platform, or integration? We build tailored software that fits your workflow.',
    },
    {
      icon: '🚀',
      title: 'Technical Consulting',
      description:
        'Already have a product? We help with architecture reviews, performance optimization, and scaling strategy.',
    },
  ];
}
