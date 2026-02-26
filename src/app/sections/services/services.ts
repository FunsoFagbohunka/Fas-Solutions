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
        'We help companies build bespoke tools, internal platforms, and integrations that streamline operations. Whether it’s payments, automation, or third-party APIs, we deliver tailored B2B software that matches your processes. No software solution is too small—or too complex.',
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
