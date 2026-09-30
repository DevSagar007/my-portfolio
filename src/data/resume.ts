import type { ResumeItem, Service, SkillStack, Testimonial } from '@/types/resume';
import { assetPath } from '@/utils/assetPath';

/** "Working Experience" list on the home page. */
export const experience: ResumeItem[] = [
  {
    dateClass: 'mr-45',
    date: 'Apr 2024 - Present',
    href: '#0',
    title: 'Frontend Web Developer',
    subtitle: 'Tdevs.co',
    last: false,
  },
  {
    dateClass: 'mr-40',
    date: 'Feb 2022 - Mar 2024',
    href: '#0',
    title: 'Frontend Web Developer',
    subtitle: 'BDevs Technologies Ltd',
    last: false,
  },
];

/** "Education & Certifications" list on the home page. */
export const education: ResumeItem[] = [
  {
    dateClass: 'mr-40',
    date: '2026 - Present',
    href: '#0',
    title: 'Next Level Web Development',
    subtitle: 'Programming Hero',
    last: false,
  },
  {
    dateClass: 'mr-40',
    date: '2026 - Present',
    href: '#0',
    title: 'Think in a Redux Way Course',
    subtitle: 'Learn with Sumit',
    last: false,
  },
  {
    dateClass: 'mr-40',
    date: '2025 - Present',
    href: '#0',
    title: 'Reactive Accelerator Course',
    subtitle: 'Learn with Sumit',
    last: false,
  },
  {
    dateClass: 'mr-40',
    date: '2022 - 2023',
    href: '#0',
    title: 'Complete Frontend Web Development (Batch 9)',
    subtitle: 'Programming Hero',
    last: false,
  },
  {
    dateClass: 'mr-40',
    date: '2019 - 2020',
    href: '#0',
    title: 'Responsive Web Design for Envato – PSD to HTML',
    subtitle: 'weblearn.app',
    last: false,
  },
  {
    dateClass: 'mr-45',
    date: '2026 - Present',
    href: 'https://www.adust.edu.bd',
    title: 'B.Sc. in Computer Science & Engineering (CSE) Atish Dipankar University of Science & Technology',
    subtitle: '(Currently Studying)',
    last: true,
  },
];

/** Technology stacks shown in "Technical Skills & Expertise". */
export const skillStacks: SkillStack[] = [
  {
    title: 'Frontend Development',
    icon: 'fa-solid fa-laptop-code',
    description:
      'Pixel-accurate, accessible interfaces with typed component architecture, predictable state and fast server-rendered pages.',
    featured: true,
    techs: [
      { name: 'HTML5', icon: 'fa-brands fa-html5' },
      { name: 'CSS3', icon: 'fa-brands fa-css3-alt' },
      { name: 'JavaScript', icon: 'fa-brands fa-js' },
      { name: 'TypeScript', icon: 'fa-solid fa-square-t' },
      { name: 'React.js', icon: 'fa-brands fa-react' },
      { name: 'Next.js', icon: 'fa-solid fa-n' },
      { name: 'Tailwind CSS', icon: 'fa-solid fa-wind' },
      { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap' },
      { name: 'Redux', icon: 'fa-solid fa-atom' },
      { name: 'TanStack Query', icon: 'fa-solid fa-arrows-spin' },
    ],
  },
  {
    title: 'Backend Development',
    icon: 'fa-solid fa-server',
    description: 'Secure REST APIs and server logic that keep data flowing reliably between clients and services.',
    techs: [
      { name: 'Node.js', icon: 'fa-brands fa-node-js' },
      { name: 'Express.js', icon: 'fa-solid fa-brackets-curly' },
      { name: 'REST API', icon: 'fa-solid fa-plug' },
      { name: 'JWT Auth', icon: 'fa-solid fa-key' },
      { name: 'API Integration', icon: 'fa-solid fa-link' },
      { name: 'Server-side Development', icon: 'fa-solid fa-microchip' },
    ],
  },
  {
    title: 'Database & Cloud',
    icon: 'fa-solid fa-database',
    description: 'Well-modelled data, from document stores to relational schemas, deployed and scaled in the cloud.',
    techs: [
      { name: 'MongoDB', icon: 'fa-solid fa-leaf' },
      { name: 'PostgreSQL', icon: 'fa-solid fa-database' },
      { name: 'Firebase', icon: 'fa-solid fa-fire' },
      { name: 'Database Design', icon: 'fa-solid fa-diagram-project' },
      { name: 'Cloud Deployment', icon: 'fa-solid fa-cloud-arrow-up' },
    ],
  },
  {
    title: 'Mobile Development',
    icon: 'fa-solid fa-mobile-screen-button',
    description: 'One React codebase shipped as native-feeling apps for both iOS and Android.',
    techs: [
      { name: 'React Native', icon: 'fa-brands fa-react' },
      { name: 'Cross-platform Apps', icon: 'fa-solid fa-mobile-screen' },
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: 'fa-solid fa-screwdriver-wrench',
    description: 'A disciplined workflow from design hand-off to version control, testing and automated delivery.',
    techs: [
      { name: 'Git', icon: 'fa-brands fa-git-alt' },
      { name: 'GitHub', icon: 'fa-brands fa-github' },
      { name: 'VS Code', icon: 'fa-solid fa-code' },
      { name: 'Figma', icon: 'fa-brands fa-figma' },
      { name: 'Postman', icon: 'fa-solid fa-paper-plane' },
      { name: 'Vercel', icon: 'fa-solid fa-triangle' },
      { name: 'CI/CD', icon: 'fa-solid fa-infinity' },
    ],
  },
];

/** "Services" grid on the home page. */
export const services: Service[] = [
  {
    itemClass: 'item md-mb30',
    letter: 'F',
    title: 'Frontend Development',
    description:
      'Building responsive, high-performance interfaces with React, Next.js and TypeScript.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    itemClass: 'item md-mb30',
    letter: 'B',
    title: 'Backend & APIs',
    description:
      'Building secure REST APIs with Node.js and Express, with JWT auth, validation and error handling.',
    tags: ['Node.js', 'Express.js', 'JWT', 'REST API'],
  },
  {
    itemClass: 'item sm-mb30',
    letter: 'E',
    title: 'End-to-End Web Apps',
    description:
      'Full-stack apps connecting React and Next.js frontends to Node.js APIs and databases.',
    tags: ['MongoDB', 'PostgreSQL', 'CRUD', 'Deployment'],
  },
  {
    itemClass: 'item',
    letter: 'P',
    title: 'Performance Optimization',
    description:
      'Improving speed, Core Web Vitals, SEO and accessibility for a better user experience.',
    tags: ['Core Web Vitals', 'SEO', 'Lazy Loading', 'Accessibility'],
  },
];

/** Slides of the testimonials carousel on the home page. */
export const testimonials: Testimonial[] = [
  {
    image: assetPath('/assets/imgs/testim/1.jpg'),
    name: 'Leonard Heiser',
    role: 'Envato customer',
    text:
      'We have purchased well into the thousands of items, but this is without doubt one of the best we’ve have been lucky enough to work on, the attention to detail apparent throughout, and the delivery is impressively intuitive.',
    stars: 5,
    reviews: '(71 Reviews)',
  },
  {
    image: assetPath('/assets/imgs/testim/2.jpg'),
    name: 'Leonard Heiser',
    role: 'Envato customer',
    text:
      'We have purchased well into the thousands of items, but this is without doubt one of the best we’ve have been lucky enough to work on, the attention to detail apparent throughout, and the delivery is impressively intuitive.',
    stars: 5,
    reviews: '(71 Reviews)',
  },
  {
    image: assetPath('/assets/imgs/testim/3.jpg'),
    name: 'Leonard Heiser',
    role: 'Envato customer',
    text:
      'We have purchased well into the thousands of items, but this is without doubt one of the best we’ve have been lucky enough to work on, the attention to detail apparent throughout, and the delivery is impressively intuitive.',
    stars: 5,
    reviews: '(71 Reviews)',
  },
  {
    image: assetPath('/assets/imgs/testim/4.jpg'),
    name: 'Leonard Heiser',
    role: 'Envato customer',
    text:
      'We have purchased well into the thousands of items, but this is without doubt one of the best we’ve have been lucky enough to work on, the attention to detail apparent throughout, and the delivery is impressively intuitive.',
    stars: 5,
    reviews: '(71 Reviews)',
  },
];

