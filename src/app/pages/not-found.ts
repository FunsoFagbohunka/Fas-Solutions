import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  template: `
    <main class="container" style="padding-block: 8rem 4rem">
      <h1>Page not found</h1>
      <p>The page you’re looking for may have moved or been removed.</p>
      <a routerLink="/">Back to homepage</a>
    </main>
  `,
})
export class NotFound {}
