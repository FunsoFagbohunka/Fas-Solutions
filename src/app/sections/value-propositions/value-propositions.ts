import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ValueProp {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

@Component({
  selector: 'app-value-propositions',
  imports: [CommonModule],
  templateUrl: './value-propositions.html',
  styleUrl: './value-propositions.scss',
})
export class ValuePropositions {
  values: ValueProp[] = [
    {
      image: 'assets/images/values/ownership.png',
      imageAlt: 'Team managing the full product lifecycle on a Kanban board',
      title: 'We Own It, Start to Finish',
      description:
        'No handoffs, no gaps. We take full responsibility from the first wireframe to production deployment — and stay to maintain, iterate, and scale your product as it grows.',
    },
    {
      image: 'assets/images/values/security.png',
      imageAlt: 'Secure cloud infrastructure with data protection',
      title: 'Built Secure from Day One',
      description:
        "Security isn't an afterthought — it's our foundation. Every product ships GDPR-compliant, encrypted, and privacy-first. Built in Switzerland, held to the highest standards.",
    },
    {
      image: 'assets/images/values/partnership.png',
      imageAlt: 'Two teams collaborating as partners',
      title: 'A Partner, Not a Vendor',
      description:
        "We don't disappear after delivery. We embed with your team — weekly standups, shared Slack channels, transparent roadmaps. Your goals are our goals.",
    },
    {
      image: 'assets/images/values/launch.png',
      imageAlt: 'Successful product launch with growth metrics',
      title: 'From Idea to Revenue',
      description:
        "We don't just write code — we ship products that generate business. YounitedTherapy is proof: conceived, built, and launched entirely by our team.",
    },
  ];
}
