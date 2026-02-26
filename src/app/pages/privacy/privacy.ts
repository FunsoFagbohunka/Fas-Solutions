import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY } from '../../core/company.config';

@Component({
  selector: 'app-privacy',
  imports: [RouterLink],
  templateUrl: './privacy.html',
  styleUrl: './privacy.scss',
})
export class Privacy {
  readonly company = COMPANY;
}
