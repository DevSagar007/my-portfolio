import type { ResumeItem, Service, Skill, Testimonial } from '@/types/resume';

/** "Working Experience" list on the home page. */
export const experience: ResumeItem[] = [
  {
    dateClass: 'mr-45',
    date: '2024 - 2026 Present',
    href: '#0',
    title: 'Front-End Web Developer',
    subtitle: 'Tdevs.co',
    last: false,
  },
  {
    dateClass: 'mr-40',
    date: '2022-2024 Previous',
    href: '#0',
    title: 'Front-End Web Developer',
    subtitle: 'BDevs Technologies LTD',
    last: false,
  },
];

/** "Education & Certifications" list on the home page. */
export const education: ResumeItem[] = [
  {
    dateClass: 'mr-40',
    date: '2026 - Present',
    href: '#0',
    title: 'Next Level Web Development - Programming Hero',
    subtitle: 'Programming Hero',
    last: false,
  },
  {
    dateClass: 'mr-40',
    date: '2026 - Present',
    href: '#0',
    title: 'Think in a Redux way course',
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
    date: '2022-2023',
    href: '#0',
    title: 'Complete Front-End Web Development(Batch 9)',
    subtitle: 'Programming Hero',
    last: false,
  },
  {
    dateClass: 'mr-40',
    date: '2019-2020',
    href: '#0',
    title: 'Responsive web design for Envato – psd to HTML',
    subtitle: 'weblearn.app',
    last: false,
  },
  {
    dateClass: 'mr-45',
    date: '2026 - Present',
    href: 'https://www.adust.edu.bd',
    title: 'B.Sc.⁠ in Computer Science & Engineering (CSE) Atish Dipankar University of Science & Technology',
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
    name: 'HTML & CSS',
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
    name: 'React Js',
    value: '70%',
    shown: '70%',
  },
  {
    itemClass: 'item mb-30',
    icon: '/assets/imgs/resume/next-js.png',
    name: 'Next Js',
    value: '75%',
    shown: '75%',
  },
  {
    itemClass: 'item mb-30',
    icon: '/assets/imgs/resume/axios.svg',
    name: 'Axios',
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
    name: 'Redux',
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
    name: 'Firebase',
    value: '75%',
    shown: '75%',
  },
  {
    itemClass: 'item mb-30',
    icon: '/assets/imgs/resume/node-js.png',
    name: 'Node.js',
    value: '50%',
    shown: '50%',
  },
  {
    itemClass: 'item mb-30',
    icon: '/assets/imgs/resume/mongodb.png',
    name: 'MongoDB',
    value: '50%',
    shown: '50%',
  },
  {
    itemClass: 'item mb-30',
    icon: '/assets/imgs/resume/github.svg',
    name: 'GitHub',
    value: '90%',
    shown: '90%',
  },
];

/** "Services" grid on the home page. */
export const services: Service[] = [
  {
    itemClass: 'item md-mb30',
    letter: 'U',
    title: 'UI Development',
    description:
      'Crafting elegant and user-focused interfaces with attention to detail and usability.',
    tags: ['Figma', 'UI Design', 'UX Principles', 'Accessibility'],
  },
  {
    itemClass: 'item md-mb30',
    letter: 'F',
    title: 'Frontend Development',
    description:
      'Building responsive, pixel-perfect and high-performance websites using modern frontend technologies.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
  },
  {
    itemClass: 'item sm-mb30',
    letter: 'M',
    title: 'Modern Web Applications',
    description:
      'Developing interactive web experiences with reusable components and clean architecture.',
    tags: ['React', 'Next.js', 'Redux Toolkit', 'REST API'],
  },
  {
    itemClass: 'item',
    letter: 'P',
    title: 'Performance Optimization',
    description:
      'Improving website speed, Core Web Vitals, and overall user experience.',
    tags: ['Core Web Vitals', 'SEO', 'Lazy Loading', 'Optimization'],
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
