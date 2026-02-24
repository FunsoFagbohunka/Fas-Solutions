import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Capability {
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
  capabilities: Capability[] = [
    {
      icon: '🏗️',
      title: 'Scalable Architecture',
      description:
        'We design systems that grow with your business — microservices, cloud-native, API-first.',
    },
    {
      icon: '🎨',
      title: 'Polished User Experience',
      description:
        'Every product we build is designed with the end user in mind — intuitive, fast, beautiful.',
    },
    {
      icon: '🔒',
      title: 'Security & Compliance',
      description: 'GDPR-ready, encrypted by default, built with privacy at the core.',
    },
    {
      icon: '⚡',
      title: 'Rapid Delivery',
      description: 'Agile process with regular releases — from prototype to production in weeks.',
    },
    {
      icon: '🌐',
      title: 'Multi-Language & Multi-Region',
      description: "Internationalization baked in — we've shipped products in 5+ languages.",
    },
    {
      icon: '📊',
      title: 'Data-Driven Decisions',
      description: 'Analytics, dashboards, and reporting built into every platform we deliver.',
    },
  ];
}
