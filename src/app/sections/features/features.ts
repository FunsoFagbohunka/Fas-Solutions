import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Icon, IconName } from '../../shared/components/icon/icon';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

interface Capability {
  icon: IconName;
  titleKey: string;
  descKey: string;
}

@Component({
  selector: 'app-features',
  imports: [CommonModule, Icon, TranslatePipe],
  templateUrl: './features.html',
  styleUrl: './features.scss',
})
export class Features {
  capabilities: Capability[] = [
    { icon: 'layout', titleKey: 'features.scalable_title', descKey: 'features.scalable_desc' },
    { icon: 'edit', titleKey: 'features.ux_title', descKey: 'features.ux_desc' },
    { icon: 'lock', titleKey: 'features.security_title', descKey: 'features.security_desc' },
    { icon: 'bolt', titleKey: 'features.rapid_title', descKey: 'features.rapid_desc' },
    { icon: 'globe', titleKey: 'features.multilang_title', descKey: 'features.multilang_desc' },
    { icon: 'chart', titleKey: 'features.data_title', descKey: 'features.data_desc' },
  ];
}
