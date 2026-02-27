import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

interface Resource {
  badgeKey: string;
  badgeColor: string;
  titleKey: string;
  linkTextKey: string;
}

@Component({
  selector: 'app-resources',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './resources.html',
  styleUrl: './resources.scss',
})
export class Resources {
  resources: Resource[] = [
    {
      badgeKey: 'resources.badge_case_study',
      badgeColor: '#752dbe',
      titleKey: 'resources.article1_title',
      linkTextKey: 'resources.article1_link',
    },
    {
      badgeKey: 'resources.badge_engineering',
      badgeColor: '#114f9d',
      titleKey: 'resources.article2_title',
      linkTextKey: 'resources.article2_link',
    },
    {
      badgeKey: 'resources.badge_tutorial',
      badgeColor: '#50428c',
      titleKey: 'resources.article3_title',
      linkTextKey: 'resources.article3_link',
    },
    {
      badgeKey: 'resources.badge_blog',
      badgeColor: '#e5a100',
      titleKey: 'resources.article4_title',
      linkTextKey: 'resources.article4_link',
    },
    {
      badgeKey: 'resources.badge_case_study',
      badgeColor: '#752dbe',
      titleKey: 'resources.article5_title',
      linkTextKey: 'resources.article5_link',
    },
    {
      badgeKey: 'resources.badge_engineering',
      badgeColor: '#114f9d',
      titleKey: 'resources.article6_title',
      linkTextKey: 'resources.article6_link',
    },
  ];
}
