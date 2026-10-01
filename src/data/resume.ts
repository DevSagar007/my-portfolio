import {
  SiBootstrap, SiCoolify, SiCss, SiDocker, SiExpress, SiFirebase, SiGit, SiGithub, SiHtml5,
  SiJavascript, SiJsonwebtokens, SiMongodb, SiNestjs, SiNextdotjs, SiNodedotjs, SiPostgresql,
  SiReact, SiReactquery, SiRedis, SiRedux, SiTailwindcss, SiTypescript, SiVercel,
} from 'react-icons/si';
import {
  LuBlocks, LuBot, LuCloudUpload, LuCog, LuCpu, LuDatabase, LuGitBranch, LuLaptop, LuNetwork,
  LuServer, LuSparkles, LuWaypoints, LuWebhook, LuWorkflow,
} from 'react-icons/lu';
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
    icon: LuLaptop,
    color: '#61DAFB',
    description:
      'Pixel-accurate, accessible interfaces with typed component architecture, predictable state and fast server-rendered pages.',
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
      { name: 'Coolify', icon: SiCoolify, color: '#6B16ED' },
    ],
  },
  {
    title: 'Architecture & AI',
    icon: LuBlocks,
    color: '#C084FC',
    description: 'Maintainable system design and AI-driven automation, from architecture decisions to agentic workflows.',
    techs: [
      { name: 'Software Architecture', icon: LuBlocks },
      { name: 'System Design', icon: LuWaypoints },
      { name: 'AI Integration', icon: LuSparkles },
      { name: 'AI Agents', icon: LuBot },
      { name: 'Agentic Development', icon: LuCpu },
      { name: 'Automation', icon: LuCog },
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

