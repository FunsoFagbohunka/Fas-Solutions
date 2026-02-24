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
      quote: '"YounitedTherapy made it so easy to find a therapist who speaks my language."',
      name: 'Ana M.',
      title: 'Client, Spain',
      linkText: "Read Ana's story",
    },
    {
      quote: '"The scheduling system is seamless. I can manage all my appointments in one place."',
      name: 'Dr. Thomas K.',
      title: 'Therapist, Switzerland',
      linkText: 'Read case study',
    },
    {
      quote: '"Finally, a platform that respects privacy and makes therapy accessible."',
      name: 'Priya S.',
      title: 'Client, Germany',
      linkText: "Read Priya's story",
    },
    {
      quote: '"The admin tools are incredibly powerful. It\'s like nothing I\'ve used before."',
      name: 'Marie L.',
      title: 'Practice Owner, France',
      linkText: 'Read case study',
    },
    {
      quote: '"I switched from another platform and saved hours every week on scheduling."',
      name: 'Dr. Sarah W.',
      title: 'Therapist, UK',
      linkText: "Read Sarah's story",
    },
    {
      quote: '"The multilingual support means I can serve clients across Switzerland."',
      name: 'Marco B.',
      title: 'Therapist, Switzerland',
      linkText: 'Read case study',
    },
    {
      quote: '"Booking sessions is incredibly intuitive. I love the progress tracking."',
      name: 'Luisa F.',
      title: 'Client, Italy',
      linkText: "Read Luisa's story",
    },
    {
      quote: '"An excellent platform. Our practice efficiency improved dramatically."',
      name: 'Dr. Klaus R.',
      title: 'Clinic Director, DE',
      linkText: 'Read case study',
    },
  ];
}
