import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Icon, IconName } from '../../shared/components/icon/icon';

interface ServiceCard {
  icon: IconName;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  imports: [CommonModule, Icon],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  services: ServiceCard[] = [
    {
      icon: 'sun',
      title: 'Product Development',
      description:
        'We take your idea from concept to a fully deployed SaaS product. Architecture, design, frontend, backend — end to end.',
    },
    {
      icon: 'brain',
      title: 'AI Integration',
      description:
        'We embed intelligent AI into your products — from predictive analytics and NLP to custom LLM pipelines and smart automation.',
    },
    {
      icon: 'settings',
      title: 'Custom Software Solutions',
      description:
        'Need a bespoke tool, internal platform, or integration? From payment systems to third-party APIs — we build tailored software that fits your workflow.',
    },
    {
      icon: 'globe',
      title: 'Cloud & DevOps',
      description:
        'We architect and manage cloud infrastructure — CI/CD pipelines, containerization, monitoring, and auto-scaling for peak reliability.',
    },
    {
      icon: 'chart',
      title: 'Data & Analytics',
      description:
        'Turn raw data into actionable insights. We build dashboards, data pipelines, and reporting systems that drive smarter decisions.',
    },
    {
      icon: 'rocket',
      title: 'Technical Consulting',
      description:
        'Already have a product? We help with architecture reviews, performance optimization, and scaling strategy.',
    },
  ];
}
