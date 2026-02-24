import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  linkText: string;
}

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  testimonials: Testimonial[] = [
    {
      quote:
        '"FAS-Solutions took our idea and turned it into a production-ready platform in record time."',
      name: 'Alex R.',
      title: 'CTO, HealthStart GmbH',
      linkText: 'Read case study',
    },
    {
      quote:
        '"The scheduling system on YounitedTherapy is seamless. I manage everything in one place."',
      name: 'Dr. Thomas K.',
      title: 'Therapist, YounitedTherapy',
      linkText: 'Read case study',
    },
    {
      quote:
        '"Their engineering team understood our domain deeply. The end result exceeded expectations."',
      name: 'Maria C.',
      title: 'Founder, EduFlow',
      linkText: "Read Maria's story",
    },
    {
      quote: '"Finally, a platform that respects privacy and makes therapy accessible."',
      name: 'Priya S.',
      title: 'Client, YounitedTherapy',
      linkText: "Read Priya's story",
    },
    {
      quote: '"We needed a custom scheduling engine — FAS built exactly what we needed."',
      name: 'Daniel P.',
      title: 'COO, BookWell',
      linkText: 'Read case study',
    },
    {
      quote: '"The multilingual support means I can serve clients across Europe."',
      name: 'Marco B.',
      title: 'Therapist, YounitedTherapy',
      linkText: 'Read case study',
    },
    {
      quote:
        '"Working with FAS felt like having a senior engineering team embedded in our company."',
      name: 'Sarah W.',
      title: 'VP Engineering, Klarity',
      linkText: "Read Sarah's story",
    },
    {
      quote: '"An excellent platform. Our practice efficiency improved dramatically."',
      name: 'Dr. Klaus R.',
      title: 'Clinic Director, DE',
      linkText: 'Read case study',
    },
  ];
}
