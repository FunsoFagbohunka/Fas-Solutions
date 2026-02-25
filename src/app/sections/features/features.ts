import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Capability {
  svg: string;
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
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h3v3H7z"/><path d="M14 7h3"/><path d="M14 11h3"/><path d="M7 14h10v3H7z"/></svg>`,
      title: 'Scalable Architecture',
      description:
        'We design systems that grow with your business — microservices, cloud-native, API-first.',
    },
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/></svg>`,
      title: 'Polished User Experience',
      description:
        'Every product we build is designed with the end user in mind — intuitive, fast, beautiful.',
    },
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
      title: 'Security & Compliance',
      description: 'GDPR-ready, encrypted by default, built with privacy at the core.',
    },
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
      title: 'Rapid Delivery',
      description: 'Agile process with regular releases — from prototype to production in weeks.',
    },
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
      title: 'Multi-Language & Multi-Region',
      description: "Internationalization baked in — we've shipped products in 5+ languages.",
    },
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,
      title: 'Data-Driven Decisions',
      description: 'Analytics, dashboards, and reporting built into every platform we deliver.',
    },
  ];
}
