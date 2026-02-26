import { Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { Services } from '../../sections/services/services';
import { ProductShowcase } from '../../sections/product-showcase/product-showcase';
import { Features } from '../../sections/features/features';
import { Stats } from '../../sections/stats/stats';
import { ValuePropositions } from '../../sections/value-propositions/value-propositions';
import { CtaBanner } from '../../sections/cta-banner/cta-banner';

@Component({
  selector: 'app-home',
  imports: [Hero, Services, ProductShowcase, Features, Stats, ValuePropositions, CtaBanner],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
