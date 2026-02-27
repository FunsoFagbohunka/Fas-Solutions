import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

interface ValueProp {
  titleKey: string;
  descKey: string;
  image: string;
  imageAlt: string;
}

@Component({
  selector: 'app-value-propositions',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './value-propositions.html',
  styleUrl: './value-propositions.scss',
})
export class ValuePropositions {
  values: ValueProp[] = [
    {
      image: 'assets/images/values/ownership.png',
      imageAlt: 'Team managing the full product lifecycle on a Kanban board',
      titleKey: 'values.ownership_title',
      descKey: 'values.ownership_desc',
    },
    {
      image: 'assets/images/values/security.png',
      imageAlt: 'Secure cloud infrastructure with data protection',
      titleKey: 'values.security_title',
      descKey: 'values.security_desc',
    },
    {
      image: 'assets/images/values/partnership.png',
      imageAlt: 'Two teams collaborating as partners',
      titleKey: 'values.partner_title',
      descKey: 'values.partner_desc',
    },
    {
      image: 'assets/images/values/launch.png',
      imageAlt: 'Successful product launch with growth metrics',
      titleKey: 'values.launch_title',
      descKey: 'values.launch_desc',
    },
  ];
}
