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
      badge: 'Case Study',
      badgeColor: '#752dbe',
      title: 'How we built YounitedTherapy from zero to launch',
      linkText: 'Read study →',
    },
    {
      badge: 'Engineering',
      badgeColor: '#114f9d',
      title: 'Designing a multi-tenant SaaS architecture',
      linkText: 'Read article →',
    },
    {
      badge: 'Tutorial',
      badgeColor: '#50428c',
      title: 'Setting up real-time video with end-to-end encryption',
      linkText: 'Read tutorial →',
    },
    {
      badge: 'Blog',
      badgeColor: '#e5a100',
      title: 'Lessons learned from internationalizing a SaaS platform',
      linkText: 'Read post →',
    },
    {
      badge: 'Case Study',
      badgeColor: '#752dbe',
      title: 'Building a GDPR-compliant scheduling engine',
      linkText: 'Read study →',
    },
    {
      badge: 'Engineering',
      badgeColor: '#114f9d',
      title: 'Scaling Angular applications for enterprise',
      linkText: 'Read article →',
    },
  ];
}
