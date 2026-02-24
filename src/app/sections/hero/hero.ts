import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MockupImage {
  src: string;
  alt: string;
  label: string;
}

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit, OnDestroy {
  mockups: MockupImage[] = [
    {
      src: 'assets/images/hero/dashboard.webp',
      alt: 'Therapist dashboard overview',
      label: 'Dashboard',
    },
    {
      src: 'assets/images/hero/scheduling.webp',
      alt: 'Appointment scheduling UI',
      label: 'Scheduling',
    },
    { src: 'assets/images/hero/video-call.webp', alt: 'Video call session', label: 'Sessions' },
    { src: 'assets/images/hero/progress.webp', alt: 'Client progress tracking', label: 'Progress' },
  ];

  activeIndex = signal<number>(0);
  private intervalId: any;

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
