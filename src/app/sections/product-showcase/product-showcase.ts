import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

interface Highlight {
  icon: string;
  titleKey: string;
  descKey: string;
}

@Component({
  selector: 'app-product-showcase',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './product-showcase.html',
  styleUrl: './product-showcase.scss',
})
export class ProductShowcase {
  products = [
    {
      label: 'product.label',
      title: 'product.title_prefix',
      link: 'https://younitedtherapy.com',
      linkText: 'product.title_name',
      desc1: 'product.desc1',
      desc2: 'product.desc2',
      visitText: 'product.visit_btn',
      highlights: [
        { icon: '🔒', titleKey: 'product.info1_title', descKey: 'product.info1_desc' },
        { icon: '📅', titleKey: 'product.info2_title', descKey: 'product.info2_desc' },
        {
          icon: '🌍',
          titleKey: 'product.info3_title',
          descKey: 'product.info3_desc',
        },
      ],
      img: 'assets/images/product/platform.webp',
      imgAlt: 'YounitedTherapy platform overview',
    },
    {
      label: 'product.label1',
      title: 'product.title_prefix',
      link: 'https://evavassalli.ch/',
      linkText: 'eva.title_name',
      desc1: 'eva.desc1',
      desc2: 'eva.desc2',
      visitText: 'eva.visit_btn',
      highlights: [
        { icon: '🔎', titleKey: 'eva.info1_title', descKey: 'eva.info1_desc' },
        { icon: '🧾', titleKey: 'eva.info2_title', descKey: 'eva.info2_desc' },
        {
          icon: '✅',
          titleKey: 'eva.info3_title',
          descKey: 'eva.info3_desc',
        },
      ],
      img: 'assets/images/product/eva-vassalli-desktop.webp',
      imgAlt: 'Eva Vassalli platform overview',
    },
  ];
}
