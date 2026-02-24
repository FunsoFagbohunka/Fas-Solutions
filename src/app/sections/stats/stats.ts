import { Component, AfterViewInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, inject } from '@angular/core';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  current: number;
}

@Component({
  selector: 'app-stats',
  imports: [CommonModule],
  templateUrl: './stats.html',
  styleUrl: './stats.scss',
})
export class Stats implements AfterViewInit {
  private platformId = inject(PLATFORM_ID);

  stats: Stat[] = [
    { value: 1, suffix: '+', label: 'Products Shipped', current: 0 },
    { value: 500, suffix: 'K+', label: 'Lines of Code Deployed', current: 0 },
    { value: 15, suffix: '+', label: 'Countries Served', current: 0 },
    { value: 98, suffix: '%', label: 'Client Satisfaction', current: 0 },
  ];

  private hasAnimated = false;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.hasAnimated = true;
            this.animateCounters();
          }
        });
      },
      { threshold: 0.3 },
    );

    const el = document.getElementById('stats');
    if (el) observer.observe(el);
  }

  private animateCounters(): void {
    this.stats.forEach((stat) => {
      const duration = 2000;
      const steps = 60;
      const increment = stat.value / steps;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        stat.current = Math.min(Math.round(increment * step), stat.value);
        if (step >= steps) clearInterval(timer);
      }, duration / steps);
    });
  }

  formatNumber(n: number): string {
    if (n >= 1000) return n.toLocaleString();
    return n.toString();
  }
}
