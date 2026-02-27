import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { COMPANY } from '../../core/company.config';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { TranslationService } from '../../core/i18n/translation.service';

interface ContactForm {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, TranslatePipe],
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

  subjectKeys = [
    'contact.subject_product_dev',
    'contact.subject_ai',
    'contact.subject_custom',
    'contact.subject_cloud',
    'contact.subject_consulting',
    'contact.subject_general',
    'contact.subject_partnership',
  ];

  constructor(public i18n: TranslationService) {}

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
