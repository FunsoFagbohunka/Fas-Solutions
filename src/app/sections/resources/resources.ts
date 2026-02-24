import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Resource {
  badge: string;
  badgeColor: string;
  title: string;
  linkText: string;
}

@Component({
  selector: 'app-resources',
  imports: [CommonModule],
  templateUrl: './resources.html',
  styleUrl: './resources.scss',
})
export class Resources {
  resources: Resource[] = [
    {
      badge: 'Guide',
      badgeColor: '#28c840',
      title: 'Getting started with YounitedTherapy as a therapist',
      linkText: 'Read guide →',
    },
    {
      badge: 'Article',
      badgeColor: '#50428c',
      title: 'Mental health in the digital age',
      linkText: 'Read article →',
    },
    {
      badge: 'Tutorial',
      badgeColor: '#752dbe',
      title: 'How to book your first session',
      linkText: 'Read tutorial →',
    },
    {
      badge: 'Blog',
      badgeColor: '#e5a100',
      title: 'Why we chose Switzerland for data hosting',
      linkText: 'Read post →',
    },
    {
      badge: 'Guide',
      badgeColor: '#28c840',
      title: 'Understanding your privacy rights on the platform',
      linkText: 'Read guide →',
    },
    {
      badge: 'Article',
      badgeColor: '#50428c',
      title: 'The future of online therapy',
      linkText: 'Read article →',
    },
  ];
}
