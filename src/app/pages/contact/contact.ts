import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
    // TODO: Implement form submission
    console.log('Form submitted:', this.form);
  }
}
