// @project
import { BUY_NOW_URL, FREEBIES_URL } from '@/path';

export const pricing = {
  heading: 'The Affordable Unfair Advantage.',
  caption: 'Choose the plan that aligns with your product requirements.',
  features: [
    { id: 1, label: '1 Demo Landing' },
    { id: 2, label: '7 Demo Landing' },
    { id: 3, label: '25 Components Blocks' },
    { id: 4, label: '193+ Component Blocks' },
    { id: 5, label: 'Dark/Light Mode' },
    { id: 6, label: 'Typescript Version' },
    { id: 7, label: 'Design File (Figma)' },
    { id: 8, label: 'Multiple Color Options' },
    { id: 9, label: 'RTL' },
    { id: 10, label: 'Supbase Authentication' }
  ],
  plans: [
    {
      title: 'Free',
      price: 0,
      active: false,
      featureTitle: 'Features',
      content: 'Learn more about the MIT',
      contentLink: { children: 'license', href: 'https://github.com/phoenixcoded/saasable-ui/blob/url_changes/LICENSE', target: '_blank' },
      exploreLink: { children: 'Get Started With Free', href: FREEBIES_URL, target: '_blank' },
      featuresID: [1, 3]
    },
    {
      title: 'Pro',
      active: false,
      price: 69,
      featureTitle: 'Features',
      content: 'Learn more about the Pro',
      contentLink: { children: 'license', href: 'https://mui.com/store/license/', target: '_blank' },
      exploreLink: { children: 'Get Started With Pro', href: BUY_NOW_URL, target: '_blank' },
      featuresID: [2, 4, 5, 6, 7, 8, 9, 10]
    }
  ]
};

export const pricing9 = {
  features: [
    { id: 1, label: '1 Demo Landing' },
    { id: 2, label: '7 Demo Landing' },
    { id: 3, label: '25 Components Blocks' },
    { id: 4, label: '193+ Component Blocks' },
    { id: 5, label: 'Dark/Light Mode' },
    { id: 6, label: 'Typescript Version' },
    { id: 7, label: 'Design File (Figma)' },
    { id: 8, label: 'Multiple Color Options' },
    { id: 9, label: 'RTL' },
    { id: 10, label: 'Supbase Authentication' }
  ],
  plans: [
    {
      title: 'free',
      price: 0,
      active: false,
      featureTitle: 'Features',
      content: 'Learn more about the MIT',
      contentLink: { children: 'license', href: '#' },
      exploreLink: { children: 'Get Started With Free' },
      featuresID: [1, 3]
    },
    {
      title: 'pro',
      active: false,
      price: 69,
      featureTitle: 'Features',
      content: 'Learn more about the Pro',
      contentLink: { children: 'license', href: '#' },
      exploreLink: { children: 'Get Started With Pro' },
      featuresID: [2, 4, 5, 6, 7, 8, 9, 10]
    }
  ]
};