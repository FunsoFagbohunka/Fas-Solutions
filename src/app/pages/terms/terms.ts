import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY } from '../../core/company.config';

@Component({
  selector: 'app-terms',
  imports: [RouterLink],
  templateUrl: './terms.html',
  styleUrl: './terms.scss',
})
export class Terms {
  readonly company = COMPANY;
}
