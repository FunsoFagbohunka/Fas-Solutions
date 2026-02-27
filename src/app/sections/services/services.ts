import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Icon, IconName } from '../../shared/components/icon/icon';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

interface ServiceCard {
  icon: IconName;
  titleKey: string;
  descKey: string;
}

@Component({
  selector: 'app-services',
  imports: [CommonModule, Icon, TranslatePipe],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  services: ServiceCard[] = [
    { icon: 'sun', titleKey: 'services.product_dev_title', descKey: 'services.product_dev_desc' },
    { icon: 'brain', titleKey: 'services.ai_title', descKey: 'services.ai_desc' },
    { icon: 'settings', titleKey: 'services.custom_title', descKey: 'services.custom_desc' },
    { icon: 'globe', titleKey: 'services.cloud_title', descKey: 'services.cloud_desc' },
    { icon: 'chart', titleKey: 'services.data_title', descKey: 'services.data_desc' },
    { icon: 'rocket', titleKey: 'services.consulting_title', descKey: 'services.consulting_desc' },
  ];
}
