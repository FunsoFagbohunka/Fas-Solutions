import { COMPANY } from './company.config';

export const SEO_PAGES = {
  '': {
    title: 'Custom Software & SaaS Development in Switzerland | FAS-Solutions',
    description: 'FAS-Solutions is a Swiss software development company that designs, builds and launches SaaS platforms, custom business software and AI integrations.',
    keywords: 'custom software development, SaaS development, software development Switzerland, AI integration, FAS-Solutions',
  },
  about: {
    title: 'About Our Swiss Software Development Company | FAS-Solutions',
    description: 'Learn about FAS-Solutions, a Swiss software development company.',
    indexable: false,
  },
  work: {
    title: 'Software Development Portfolio | FAS-Solutions',
    description: 'See software and web projects built by FAS-Solutions, including the YounitedTherapy online therapy platform and Eva Vassalli’s practice website.',
    keywords: 'software development portfolio, SaaS case studies, YounitedTherapy, WordPress development, FAS-Solutions',
  },
  contact: {
    title: 'Contact FAS-Solutions About Your Software Project',
    description: 'Tell FAS-Solutions about your SaaS product, custom software project or AI integration. Get in touch with our Swiss development team.',
    keywords: 'contact FAS-Solutions, SaaS development partner, custom software project, AI integration',
  },
  privacy: {
    title: 'Privacy Policy | FAS-Solutions',
    description: 'Learn how FAS-Solutions handles personal data when you use our website or contact our team.',
  },
  terms: {
    title: 'Terms of Service | FAS-Solutions',
    description: 'Read the terms that apply when you use the FAS-Solutions website.',
  },
} as const;

export function pageUrl(path: string): string {
  return new URL(path, COMPANY.website + '/').href;
}
