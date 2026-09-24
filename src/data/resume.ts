import type { ResumeItem, Service, Skill, Testimonial } from '@/types/resume';

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

/** "Technical Skills & Expertise" grid on the home page. */
export const skills: Skill[] = [
  {
    itemClass: 'item mb-30',
    icon: '/assets/imgs/resume/s2.png',
    name: 'Convert UI / UX Designs',
    value: '100%',
    shown: '100%',
  },
  {
    itemClass: 'item mb30',
    icon: '/assets/imgs/resume/html.png',
    name: 'HTML, CSS & Bootstrap',
    value: '85%',
    shown: '85%',
  },
  {
    itemClass: 'item mb-30',
    icon: '/assets/imgs/resume/tailwindcss.svg',
    name: 'Tailwind CSS',
    value: '90%',
    shown: '90%',
  },
  {
    itemClass: 'item',
    icon: '/assets/imgs/resume/scss-gulp.svg',
    name: 'SCSS & Gulp.js',
    value: '90%',
    shown: '90%',
  },
  {
    itemClass: 'item mb-30',
    icon: '/assets/imgs/resume/javascript.png',
    name: 'JavaScript / ES6+',
    value: '64%',
    shown: '64%',
  },
  {
    itemClass: 'item mb-30',
    icon: '/assets/imgs/resume/react.png',
    name: 'React.js',
    value: '70%',
    shown: '70%',
  },
  {
    itemClass: 'item mb-30',
    icon: '/assets/imgs/resume/next-js.png',
    name: 'Next.js',
    value: '75%',
    shown: '75%',
  },
  {
    itemClass: 'item mb-30',
    icon: '/assets/imgs/resume/axios.svg',
    name: 'REST APIs & Integration',
    value: '90%',
    shown: '90%',
  },
  {
    itemClass: 'item mb-30',
    icon: '/assets/imgs/resume/tanstackquery.svg',
    name: 'TanStack Query',
    value: '85%',
    shown: '85%',
  },
  {
    itemClass: 'item',
    icon: '/assets/imgs/resume/postman.svg',
    name: 'Postman',
    value: '85%',
    shown: '85%',
  },
  {
    itemClass: 'item mb-30',
    icon: '/assets/imgs/resume/redux.svg',
    name: 'Redux & Context API',
    value: '85%',
    shown: '85%',
  },
  {
    itemClass: 'item mb-30',
    icon: '/assets/imgs/resume/typescript.svg',
    name: 'TypeScript',
    value: '80%',
    shown: '80%',
  },
  {
    itemClass: 'item mb-30',
    icon: '/assets/imgs/resume/firebase.svg',
    name: 'Firebase & JWT Auth',
    value: '75%',
    shown: '75%',
  },
  {
    itemClass: 'item mb-30',
    icon: '/assets/imgs/resume/node-js.png',
    name: 'Node.js & Express.js',
    value: '50%',
    shown: '50%',
  },
  {
    itemClass: 'item mb-30',
    icon: '/assets/imgs/resume/mongodb.png',
    name: 'MongoDB & PostgreSQL',
    value: '50%',
    shown: '50%',
  },
  {
    itemClass: 'item mb-30',
    icon: '/assets/imgs/resume/github.svg',
    name: 'Git, GitHub & Vercel',
    value: '90%',
    shown: '90%',
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
    image: '/assets/imgs/testim/1.jpg',
    name: 'Leonard Heiser',
    role: 'Envato customer',
    text:
      'We have purchased well into the thousands of items, but this is without doubt one of the best we’ve have been lucky enough to work on, the attention to detail apparent throughout, and the delivery is impressively intuitive.',
    stars: 5,
    reviews: '(71 Reviews)',
  },
  {
    image: '/assets/imgs/testim/2.jpg',
    name: 'Leonard Heiser',
    role: 'Envato customer',
    text:
      'We have purchased well into the thousands of items, but this is without doubt one of the best we’ve have been lucky enough to work on, the attention to detail apparent throughout, and the delivery is impressively intuitive.',
    stars: 5,
    reviews: '(71 Reviews)',
  },
  {
    image: '/assets/imgs/testim/3.jpg',
    name: 'Leonard Heiser',
    role: 'Envato customer',
    text:
      'We have purchased well into the thousands of items, but this is without doubt one of the best we’ve have been lucky enough to work on, the attention to detail apparent throughout, and the delivery is impressively intuitive.',
    stars: 5,
    reviews: '(71 Reviews)',
  },
  {
    image: '/assets/imgs/testim/4.jpg',
    name: 'Leonard Heiser',
    role: 'Envato customer',
    text:
      'We have purchased well into the thousands of items, but this is without doubt one of the best we’ve have been lucky enough to work on, the attention to detail apparent throughout, and the delivery is impressively intuitive.',
    stars: 5,
    reviews: '(71 Reviews)',
  },
];
