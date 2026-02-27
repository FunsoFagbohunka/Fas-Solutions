import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { TranslationService } from '../../core/i18n/translation.service';

interface MockupImage {
  src: string;
  alt: string;
  labelKey: string;
}

@Component({
  selector: 'app-hero',
  imports: [CommonModule, RouterLink, TranslatePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit, OnDestroy {
  mockups: MockupImage[] = [
    {
      src: 'assets/images/hero/dashboard.webp',
      alt: 'Therapist dashboard overview',
      labelKey: 'hero.tab_dashboard',
    },
    {
      src: 'assets/images/hero/scheduling.png',
      alt: 'Appointment scheduling UI',
      labelKey: 'hero.tab_scheduling',
    },
    {
      src: 'assets/images/hero/video-call.png',
      alt: 'Search for therapists',
      labelKey: 'hero.tab_find_therapists',
    },
    {
      src: 'assets/images/hero/progress.png',
      alt: 'Therapist profiles',
      labelKey: 'hero.tab_profiles',
    },
  ];

  activeIndex = signal<number>(0);
  private intervalId: any;

  constructor(public i18n: TranslationService) {}

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  setIndex(index: number): void {
    this.activeIndex.set(index);
    this.stopAutoplay();
    this.startAutoplay();
  }

  private startAutoplay(): void {
    this.intervalId = setInterval(() => {
      this.activeIndex.update((i) => (i + 1) % this.mockups.length);
    }, 4000);
  }

  private stopAutoplay(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
