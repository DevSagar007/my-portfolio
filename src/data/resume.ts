import {
  SiAngular, SiBootstrap, SiCss, SiDocker, SiExpress, SiFirebase, SiGit, SiGithub, SiHtml5,
  SiJavascript, SiJsonwebtokens, SiMongodb, SiNestjs, SiNextdotjs, SiNodedotjs, SiPostgresql,
  SiReact, SiReactquery, SiRedis, SiRedux, SiTailwindcss, SiTypescript, SiVercel, SiVuedotjs,
} from 'react-icons/si';
import {
  LuBlocks, LuBot, LuCloudUpload, LuCog, LuCpu, LuDatabase, LuGitBranch, LuLaptop, LuMonitorSmartphone,
  LuNetwork, LuServer, LuWaypoints, LuWebhook, LuWorkflow,
} from 'react-icons/lu';
import type { ResumeItem, Service, SkillStack, Testimonial } from '@/types/resume';
import { assetPath } from '@/utils/assetPath';

/** "Working Experience" list on the home page. */
export const experience: ResumeItem[] = [
  {
    dateClass: 'mr-45',
    date: 'Apr 2024 - Present',
    href: '#0',
    title: 'Frontend-Focused Full-Stack Engineer',
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
    title: 'Next Level Web Development (Batch 7)',
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
    date: '2025 - 2026',
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
    note: 'Academic Foundation: C programming fundamentals and basic problem-solving through university coursework.',
    last: true,
  },
];

/** Technology stacks shown in "Technical Skills & Expertise". */
export const skillStacks: SkillStack[] = [
  {
    title: 'Frontend Engineering',
    icon: LuLaptop,
    color: '#61DAFB',
    description:
      'Building scalable, pixel-perfect and production-ready web applications with React, Next.js, TypeScript, modern state management and API integration.es.',
    featured: true,
    techs: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss, color: '#1572B6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
      { name: 'Redux', icon: SiRedux, color: '#764ABC' },
      { name: 'TanStack Query', icon: SiReactquery, color: '#FF4154' },
      { name: 'Angular', icon: SiAngular, color: '#DD0031' },
      { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D' },
      { name: 'React Native', icon: LuMonitorSmartphone, color: '#61DAFB' },
    ],
  },
  {
    title: 'Backend Development',
    icon: LuServer,
    color: '#5FA04E',
    description: 'Secure REST APIs and server logic that keep data flowing reliably between clients and services.',
    techs: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'Express.js', icon: SiExpress, color: '#FFFFFF' },
      { name: 'NestJS', icon: SiNestjs, color: '#E0234E' },
      { name: 'REST APIs', icon: LuNetwork },
      { name: 'JWT', icon: SiJsonwebtokens, color: '#D63AFF' },
      { name: 'API Integration', icon: LuWebhook },
      { name: 'Server-side Development', icon: LuServer },
    ],
  },
  {
    title: 'Database & Cloud',
    icon: LuDatabase,
    color: '#60A5FA',
    description: 'Well-modelled data, from document stores to relational schemas, deployed and scaled in the cloud.',
    techs: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      { name: 'Database Design', icon: LuDatabase },
      { name: 'Cloud Deployment', icon: LuCloudUpload },
    ],
  },
  {
    title: 'DevOps & Engineering',
    icon: LuGitBranch,
    color: '#F05032',
    description: 'Version control, containers and automated pipelines that take code from commit to production safely.',
    techs: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'CI/CD', icon: LuWorkflow },
      { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
    ],
  },
  {
    title: 'Architecture & AI',
    icon: LuBlocks,
    color: '#C084FC',
    description:
      'Building maintainable application structures and leveraging AI to improve development workflows and productivity.',
    techs: [
      { name: 'Frontend Architecture', icon: LuBlocks },
      { name: 'Scalable Systems', icon: LuWaypoints },
      { name: 'API & State Management', icon: LuNetwork },
      { name: 'MCP Development', icon: LuBot },
      { name: 'AI Agents', icon: LuCpu },
      { name: 'Development Automation', icon: LuCog },
    ],
  },
];

/** "Services" grid on the home page. */
export const services: Service[] = [
  {
    itemClass: 'item',
    letter: '01',
    title: 'Frontend Engineering',
    description:
      'Pixel-perfect UI implementation, React.js, Next.js, and scalable frontend applications.',
    tags: [
      'Pixel-perfect UI implementation',
      'React.js / Next.js development',
      'Large-scale frontend applications',
      'Component-based architecture',
      'Modern JavaScript ecosystem',
    ],
  },
  {
    itemClass: 'item',
    letter: '02',
    title: 'UI/UX & Responsive Development',
    description:
      'Responsive, accessible, and user-focused interfaces that work seamlessly across devices.',
    tags: [
      'Responsive UI/UX',
      'Figma → React/Next.js conversion',
      'Cross-browser compatibility',
      'Modern CSS / Tailwind CSS',
      'Performance-focused interfaces',
    ],
  },
  {
    itemClass: 'item',
    letter: '03',
    title: 'Full-Stack & Mobile Development',
    description:
      'End-to-end web and mobile application development, from frontend to backend and APIs.',
    tags: [
      'REST API integration',
      'Node.js / Express.js',
      'MongoDB / PostgreSQL',
      'Authentication & authorization',
      'React Native mobile development',
      'Full-stack application development',
    ],
  },
  {
    itemClass: 'item',
    letter: '04',
    title: 'Modern Development & AI',
    description:
      'Faster and smarter product development using modern JavaScript technologies and AI-assisted workflows.',
    tags: [
      'JavaScript ecosystem',
      'Angular / Vue.js',
      'AI-assisted development',
      'MCP-powered development workflows',
      'Modern developer tools',
      'Faster design-to-code implementation',
    ],
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

