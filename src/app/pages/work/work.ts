import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

interface Project {
  title: string;
  categoryKey: string;
  descKey: string;
  tags: string[];
  image: string;
  status: 'live' | 'in-progress' | 'coming-soon';
  link?: string;
}

@Component({
  selector: 'app-work',
  imports: [CommonModule, RouterLink, TranslatePipe],
  templateUrl: './work.html',
  styleUrl: './work.scss',
})
export class Work {
  flagship: Project = {
    title: 'YounitedTherapy',
    categoryKey: 'work.flagship_category',
    descKey: 'work.flagship_desc',
    tags: ['Angular', 'Node.js', 'Stripe', 'WebRTC', 'i18n', 'GDPR'],
    image: 'assets/images/product/platform.webp',
    link: 'https://younitedtherapy.com',
    status: 'live',
  };

  projects: Project[] = [
    {
      title: 'FAS-Solutions',
      categoryKey: 'work.fas_category',
      descKey: 'work.fas_desc',
      tags: ['Angular', 'SSR', 'SCSS'],
      image: 'assets/images/values/launch.png',
      status: 'live',
    },
    {
      title: 'AI Analytics Engine',
      categoryKey: 'work.ai_category',
      descKey: 'work.ai_desc',
      tags: ['AI/ML', 'Python', 'Angular'],
      image: 'assets/images/values/ownership.png',
      status: 'in-progress',
    },
    {
      title: 'Coming Soon',
      categoryKey: 'work.coming_category',
      descKey: 'work.coming_desc',
      tags: ['Health-Tech', 'FinTech'],
      image: 'assets/images/values/security.png',
      status: 'coming-soon',
    },
  ];
}
