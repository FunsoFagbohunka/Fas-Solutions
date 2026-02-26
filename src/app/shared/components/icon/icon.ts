import { Component, Input } from '@angular/core';

export type IconName =
  | 'sun'
  | 'settings'
  | 'rocket'
  | 'layout'
  | 'edit'
  | 'lock'
  | 'bolt'
  | 'globe'
  | 'chart'
  | 'check-circle'
  | 'shield'
  | 'users'
  | 'dollar'
  | 'brain';

@Component({
  selector: 'app-icon',
  imports: [],
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
})
export class Icon {
  @Input({ required: true }) name!: IconName;
  @Input() size = 28;
}
