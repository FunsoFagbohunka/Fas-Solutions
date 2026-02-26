import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  status: 'live' | 'in-progress' | 'coming-soon';
  link?: string;
}

@Component({
  selector: 'app-work',
  imports: [CommonModule, RouterLink],
  templateUrl: './work.html',
  styleUrl: './work.scss',
})
export class Work {
  flagship: Project = {
    title: 'YounitedTherapy',
    category: 'Online Therapy Platform',
    description:
      'A comprehensive SaaS platform connecting individuals with licensed therapists. Secure video sessions, intelligent scheduling, Stripe-powered payments, and multilingual support — serving users across 5 languages.',
    tags: ['Angular', 'Node.js', 'Stripe', 'WebRTC', 'i18n', 'GDPR'],
    image: 'assets/images/product/platform.webp',
    link: 'https://younitedtherapy.com',
    status: 'live',
  };

  projects: Project[] = [
    {
      title: 'FAS-Solutions',
      category: 'Corporate Website',
      description:
        'Server-rendered Angular landing page with custom design system, AOS animations, and full SEO optimization.',
      tags: ['Angular', 'SSR', 'SCSS'],
      image: 'assets/images/values/launch.png',
      status: 'live',
    },
    {
      title: 'AI Analytics Engine',
      category: 'Data Intelligence',
      description:
        'Real-time analytics with AI-driven insights, predictive trends, and automated reporting for SaaS platforms.',
      tags: ['AI/ML', 'Python', 'Angular'],
      image: 'assets/images/values/ownership.png',
      status: 'in-progress',
    },
    {
      title: 'Coming Soon',
      category: 'In the Pipeline',
      description:
        'New products across health-tech, fintech, and enterprise SaaS — currently in active development.',
      tags: ['Health-Tech', 'FinTech'],
      image: 'assets/images/values/security.png',
      status: 'coming-soon',
    },
  ];
}
