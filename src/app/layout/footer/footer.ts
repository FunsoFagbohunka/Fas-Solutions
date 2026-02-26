import { Component } from '@angular/core';
import { COMPANY } from '../../core/company.config';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly company = COMPANY;
  currentYear = new Date().getFullYear();
}
