import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { COMPANY } from '../../core/company.config';

interface ContactForm {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly companyEmail = COMPANY.email;

  form: ContactForm = {
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  };

  subjects = [
    'Product Development',
    'AI Integration',
    'Custom Software Solutions',
    'Cloud & DevOps',
    'Technical Consulting',
    'General Inquiry',
    'Partnership Opportunity',
  ];

  onSubmit(): void {
    const subject = encodeURIComponent(`[${COMPANY.name}] ${this.form.subject || 'Contact Form'}`);

    const bodyParts = [
      `Name: ${this.form.name}`,
      `Email: ${this.form.email}`,
      this.form.company ? `Company: ${this.form.company}` : '',
      `Subject: ${this.form.subject}`,
      '',
      'Message:',
      this.form.message,
    ]
      .filter(Boolean)
      .join('\n');

    const body = encodeURIComponent(bodyParts);
    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
  }
}
