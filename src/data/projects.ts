import type { PortfolioTab, Project } from '@/types/project';
import { assetPath } from '@/utils/assetPath';

/**
 * Every project card from the original index.html / projects.html portfolio
 * grid. The static pages repeated the same card markup in several filter tabs;
 * here each project is defined once and the tabs below reference it by slug.
 */
export const projects: Project[] = [
  {
    id: 1,
    slug: 'orvina',
    title: 'Orvina',
    titleClass: 'line-height-1 fz-20 font-weight-600',
    subtitle: 'Sustainable Green Energy & Loan Platform',
    image: assetPath('/assets/imgs/works/orvina.png'),
    imageAlt: 'Orvina Project',
    href: 'https://orvina.vercel.app/',
    description:
      'A green energy investment and loan platform with separate user and admin portals. I developed the frontend application with Next.js and Tailwind CSS and integrated the REST APIs using Redux Toolkit Query, building JWT authentication, dashboard features, investment management, wallet operations and real-time data handling in a fully responsive UI.',
    technologies: ['Next.js', 'Tailwind CSS', 'RTK Query', 'Laravel API', 'JWT Auth'],
    infoCard: {
      rows: [
        { label: 'Role:', value: 'Frontend Developer & API Integration' },
        { label: 'Backend:', value: 'REST API (built by backend developer)' },
      ],
      linkRowClass: 'row g-2 mb-15',
      links: [
        {
          colClass: 'col-sm-6',
          href: 'https://orvina.vercel.app/',
          icon: 'fas fa-external-link-alt mr-5',
          label: 'Live Website',
        },
        {
          colClass: 'col-sm-6',
          href: 'https://orvina.tdevs.co/admin',
          icon: 'fas fa-user-shield mr-5',
          label: 'Admin Panel',
        },
      ],
      credentials: {
        rowClass: 'row g-2 gy-2 mt-5',
        accounts: [
          {
            title: 'User Account',
            colClass: 'col-sm-6',
            items: [
              { label: 'Email:', value: 'user@qunzo.com' },
              { label: 'Pass:', value: '12345678' },
            ],
          },
          {
            title: 'Admin Account',
            colClass: 'col-sm-6',
            items: [
              { label: 'Email:', value: 'admin@orvina.com' },
              { label: 'Pass:', value: '12345678' },
            ],
          },
        ],
      },
    },
    // The static markup used slightly different Bootstrap gutter
    // classes for this card inside the tab(s) below.
    infoCardByTab: {
      api: {
        rows: [
          { label: 'Role:', value: 'Frontend Developer & API Integration' },
          { label: 'Backend:', value: 'REST API (built by backend developer)' },
        ],
        linkRowClass: 'row mb-15',
        links: [
          {
            colClass: 'col-sm-6 mb-10',
            href: 'https://orvina.vercel.app/',
            icon: 'fas fa-external-link-alt mr-5',
            label: 'Live Website',
          },
          {
            colClass: 'col-sm-6 mb-10',
            href: 'https://orvina.tdevs.co/admin',
            icon: 'fas fa-user-shield mr-5',
            label: 'Admin Panel',
          },
        ],
        credentials: {
          rowClass: 'row mt-5',
          accounts: [
            {
              title: 'User Account',
              colClass: 'col-sm-6 mb-10',
              items: [
                { label: 'Email:', value: 'user@qunzo.com' },
                { label: 'Pass:', value: '12345678' },
              ],
            },
            {
              title: 'Admin Account',
              colClass: 'col-sm-6 mb-10',
              items: [
                { label: 'Email:', value: 'admin@orvina.com' },
                { label: 'Pass:', value: '12345678' },
              ],
            },
          ],
        },
      },
    },
  },
  {
    id: 2,
    slug: 'trustep',
    title: 'Trustep',
    titleClass: 'line-height-1 fz-20 font-weight-600',
    subtitle: 'Review & Rating Platform',
    image: assetPath('/assets/imgs/works/trustep.png'),
    imageAlt: 'Trustep Project',
    href: 'https://trustep.vercel.app/',
    description:
      'A business review and rating platform for reviewers, business owners and admins. I developed the frontend application with Next.js and Tailwind CSS and integrated the REST APIs using Redux Toolkit Query to power company listings, reviews and ratings, authentication, user profiles, search, role-based dashboards and admin moderation.',
    technologies: ['Next.js', 'Tailwind CSS', 'RTK Query', 'Laravel API', 'Firebase Auth'],
    infoCard: {
      rows: [
        { label: 'Role:', value: 'Frontend Developer & API Integration' },
        { label: 'Backend:', value: 'REST API (built by backend developer)' },
      ],
      linkRowClass: 'row mb-15',
      links: [
        {
          colClass: 'col-sm-6 mb-10',
          href: 'https://trustep.vercel.app/',
          icon: 'fas fa-external-link-alt mr-5',
          label: 'Live Website',
        },
        {
          colClass: 'col-sm-6 mb-10',
          href: 'https://trustep.tdevs.co/admin',
          icon: 'fas fa-user-shield mr-5',
          label: 'Admin Panel',
        },
      ],
      credentials: {
        rowClass: 'row mt-5',
        accounts: [
          {
            title: 'Admin Account',
            colClass: 'col-12 mb-10',
            items: [
              { label: 'Email:', value: 'admin@trustep.com' },
              { label: 'Pass:', value: '12345678' },
            ],
          },
          {
            title: 'Business Account',
            colClass: 'col-sm-6 mb-10',
            items: [
              { label: 'Email:', value: 'business-owner@trustep.com' },
              { label: 'Pass:', value: '12345678' },
            ],
          },
          {
            title: 'User Account',
            colClass: 'col-sm-6 mb-10',
            items: [
              { label: 'Email:', value: 'reviewer@trustep.com' },
              { label: 'Pass:', value: '12345678' },
            ],
          },
        ],
      },
    },
  },
  {
    id: 3,
    slug: 'eduman',
    title: 'Eduman',
    titleClass: 'line-height-1 fz-20 font-weight-600',
    subtitle: 'Eduman – Education & Online Courses HTML Template',
    image: assetPath('/assets/imgs/works/01.png'),
    imageAlt: '',
    href: 'https://themeforest.net/item/eduman-education-online-courses-html-template/36636891?s_rank=67',
    description:
      'Eduman is a responsive education and online course template for universities, colleges, academies, training centers and LMS platforms. I developed the frontend with HTML5, SCSS, Bootstrap 5 and JavaScript, building reusable page sections, course listings and pixel-perfect layouts that are easy to customize and work smoothly across all devices and browsers.',
    technologies: ['HTML5 / CSS3', 'SCSS', 'Bootstrap 5.x', 'JavaScript', 'Fully Responsive'],
  },
  {
    id: 4,
    slug: 'paradox',
    title: 'Paradox',
    titleClass: 'line-height-1 fz-20 font-weight-600',
    subtitle: 'Paradox - Creative Agency HTML5 Template',
    image: assetPath('/assets/imgs/works/02.png'),
    imageAlt: '',
    href: 'https://paradox-react.vercel.app/',
    description:
      'Paradox is a clean, modern creative agency and portfolio template for digital agencies, startups, designers and consultants. I developed the frontend with HTML5, SCSS, Bootstrap 5 and JavaScript, focusing on reusable sections, smooth interactions and a fully responsive, cross-browser layout that showcases portfolio work effectively.',
    technologies: ['HTML5 / CSS3', 'SCSS', 'Bootstrap 5.x', 'JavaScript', 'Fully Responsive'],
  },
  {
    id: 5,
    slug: 'finwise',
    title: 'Finwise',
    titleClass: 'line-height-1 fz-20 font-weight-600',
    subtitle: 'Finwise - Online Banking & Finance HTML5 Template',
    image: assetPath('/assets/imgs/works/03.png'),
    imageAlt: '',
    href: 'https://themeforest.net/item/finwise-online-banking-finance-html5-template/47765585',
    description:
      'Finwise is an online banking and finance website template for banks, fintech startups and financial service providers. I developed the frontend with HTML5, SCSS, Bootstrap 5 and JavaScript, building clear service and pricing sections, trustworthy layouts and a fully responsive UI optimized for performance across devices.',
    technologies: ['HTML5 / CSS3', 'SCSS', 'Bootstrap 5.x', 'JavaScript', 'Fully Responsive'],
  },
  {
    id: 6,
    slug: 'banana',
    title: 'Banana',
    titleClass: 'line-height-1 fz-20 font-weight-600',
    subtitle: 'Banana – Organic Food HTML5 Template',
    image: assetPath('/assets/imgs/works/05.png'),
    imageAlt: '',
    href: 'https://themeforest.net/item/banana-organic-food-html5-template/38683907?s_rank=48',
    description:
      'Banana is an organic food and grocery eCommerce template for organic stores, farms, bakeries and eco shops. I developed the frontend with HTML5, SCSS, Bootstrap 5 and JavaScript, building product listings, shop and cart pages and reusable components in a clean, fully responsive layout that is easy to customize.',
    technologies: ['HTML5 / CSS3', 'SCSS', 'Bootstrap 5.x', 'JavaScript', 'Fully Responsive'],
  },
  {
    id: 7,
    slug: 'businoz',
    title: 'Businoz',
    titleClass: 'line-height-1 fz-20 font-weight-600',
    subtitle: 'Businoz - Multipurpose Business HTML5 Template',
    image: assetPath('/assets/imgs/works/16.png'),
    imageAlt: '',
    href: 'https://themeforest.net/item/businoz-multipurpose-business-html5-template/38233795',
    description:
      'Businoz is a multipurpose business website template for corporate companies, consultancies and service providers. I developed the frontend with HTML5, SCSS, Bootstrap 5 and JavaScript, building reusable service, team and case-study sections in a professional, fully responsive layout with consistent cross-browser behavior.',
    technologies: ['HTML5 / CSS3', 'SCSS', 'Bootstrap 5.x', 'JavaScript', 'Fully Responsive'],
  },
  {
    id: 8,
    slug: 'dairy-farm',
    title: 'Dairy Farm',
    titleClass: 'line-height-1 fz-20 font-weight-600',
    subtitle: 'Dairypress - Dairy Farm HTML5 Template',
    image: assetPath('/assets/imgs/works/06.png'),
    imageAlt: '',
    href: 'https://themeforest.net/item/dairypress-dairy-farm-html5-template/39211137?s_rank=47',
    description:
      'Dairypress is a dairy farm and eco milk products template for dairy farms, organic stores, cattle farms and agricultural businesses. I developed the frontend with HTML5, SCSS, Bootstrap 5 and JavaScript, building product showcases, farm service pages and reusable sections in a fully responsive, easy-to-customize layout.',
    technologies: ['HTML5 / CSS3', 'SCSS', 'Bootstrap 5.x', 'JavaScript', 'Fully Responsive'],
  },
  {
    id: 9,
    slug: 'expovent-dashboard',
    title: 'Expovent Dashboard',
    titleClass: 'line-height-1',
    subtitle: 'Expovent - Event Management Dashboard HTML5 Template + RTL (With Dashboard)',
    image: assetPath('/assets/imgs/works/07.png'),
    imageAlt: '',
    href: 'https://themeforest.net/item/expovent-event-management-dashboard-html5-template-rtl/43288905?s_rank=29',
    description:
      'Expovent is an event management dashboard template with RTL support for event agencies, organizers and service providers. I developed the frontend with HTML5, SCSS, Bootstrap 5 and JavaScript, building dashboard layouts, event management screens and data-rich components that stay clean and usable on every screen size.',
    technologies: ['HTML5 / CSS3', 'SCSS', 'Bootstrap 5.x', 'JavaScript', 'Fully Responsive'],
  },
  {
    id: 10,
    slug: 'eurtech',
    title: 'Eurtech',
    titleClass: 'line-height-1',
    subtitle: 'Eurtech - IT Solutions HTML5 Template',
    image: assetPath('/assets/imgs/works/08.png'),
    imageAlt: '',
    href: 'https://themeforest.net/item/eurtech-it-solutions-html5-template/39640570?s_rank=42',
    description:
      'Eurtech is an IT solutions and technology company template for IT services, cyber security, SaaS, consulting and digital solution businesses. I developed the frontend with HTML5, SCSS, Bootstrap 5 and JavaScript, building reusable service and pricing sections in a modern, fully responsive layout with cross-browser support.',
    technologies: ['HTML5 / CSS3', 'SCSS', 'Bootstrap 5.x', 'JavaScript', 'Fully Responsive'],
  },
  {
    id: 11,
    slug: 'medivibes',
    title: 'Medivibes',
    titleClass: 'line-height-1 fz-20 font-weight-600',
    subtitle: 'Medivibes - Health & Medical HTML5 Template',
    image: assetPath('/assets/imgs/works/medivibes.png'),
    imageAlt: '',
    href: 'https://medivibes.vercel.app/',
    description:
      'Medivibes is a health and medical website template for clinics, hospitals and healthcare providers. I developed the frontend with HTML5, SCSS, Bootstrap 5 and JavaScript, building doctor, department and appointment sections in an accessible, fully responsive layout that presents medical services clearly on any device.',
    technologies: ['HTML5 / CSS3', 'SCSS', 'Bootstrap 5.x', 'JavaScript', 'Fully Responsive'],
  },
  {
    id: 12,
    slug: 'axil',
    title: 'Axil',
    titleClass: 'line-height-1',
    subtitle: 'Axil - Creative Agency Portfolio Template',
    image: assetPath('/assets/imgs/works/09.png'),
    imageAlt: '',
    href: 'https://themeforest.net/item/axil-creative-agency-portfolio-template/45530784',
    description:
      'Axil is a creative agency portfolio template for digital agencies, startups, designers and marketing teams. I developed the frontend with HTML5, SCSS, Bootstrap 5 and JavaScript, building portfolio grids, service sections and case-study pages in a clean, fully responsive layout with smooth, performant interactions.',
    technologies: ['HTML5 / CSS3', 'SCSS', 'Bootstrap 5.x', 'JavaScript', 'Fully Responsive'],
  },
  {
    id: 13,
    slug: 'dogri',
    title: 'Dogri',
    titleClass: 'line-height-1',
    subtitle: 'Health & Medical Service',
    image: assetPath('/assets/imgs/works/10.png'),
    imageAlt: '',
    href: 'https://themeforest.net/item/dogri-health-medical-center-html-template/49310177',
    description:
      'Dogri is a health and medical center website template for clinics, medical centers and healthcare professionals. I developed the frontend with HTML5, SCSS, Bootstrap 5 and JavaScript, building service, doctor and appointment sections in a clean, fully responsive and cross-browser compatible layout.',
    technologies: ['HTML5 / CSS3', 'SCSS', 'Bootstrap 5.x', 'JavaScript', 'Fully Responsive'],
  },
  {
    id: 14,
    slug: 'digitek',
    title: 'Digitek',
    titleClass: 'line-height-1',
    subtitle: 'Digitek - IT Service HTML Template',
    image: assetPath('/assets/imgs/works/11.png'),
    imageAlt: '',
    href: 'https://themeforest.net/item/digitek-seo-service-html-template/44350405',
    description:
      'Digitek is a responsive Bootstrap 5 template for IT, SEO, SaaS and digital marketing agencies. I developed the frontend with HTML5, SCSS, Bootstrap 5 and JavaScript, building reusable service, pricing and case-study sections in a modern, fully responsive layout designed for tech-focused businesses.',
    technologies: ['HTML5 / CSS3', 'SCSS', 'Bootstrap 5.x', 'JavaScript', 'Fully Responsive'],
  },
  {
    id: 15,
    slug: 'inventual',
    title: 'Inventual',
    titleClass: 'line-height-1 fz-20 font-weight-600',
    subtitle: 'Inventual Next.js Inventory Admin Template + RTL',
    image: assetPath('/assets/imgs/works/react-01.png'),
    imageAlt: '',
    href: 'https://themeforest.net/item/inventual-angular-inventory-admin-template/35814136',
    description:
      'Inventual is an inventory management admin dashboard for businesses that need to track products, stock, sales and purchases. I developed the frontend with Next.js, React.js, Tailwind CSS and Material UI, building dashboard layouts, reusable components, data tables and ApexCharts analytics views in a fully responsive UI with RTL support.',
    technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'Material UI', 'ApexCharts', 'Fully Responsive'],
  },
  {
    id: 16,
    slug: 'solid-ptc',
    title: 'Solid PTC',
    titleClass: 'line-height-1',
    subtitle: 'Solid PTC - Advanced Pay Per Click Platform',
    image: assetPath('/assets/imgs/works/ptc.png'),
    imageAlt: '',
    href: 'https://codecanyon.net/item/solid-ptc-advanced-pay-per-click-platform/54996559',
    description:
      'Solid PTC is a pay-per-click advertising platform where users register, subscribe to plans, view ads to earn and publish their own ad campaigns, while admins manage the whole system. I developed the responsive frontend UI with HTML5, SCSS, Bootstrap 5 and JavaScript, building the landing pages and user dashboard screens; the application backend was built by the backend team.',
    technologies: ['HTML5 / CSS3', 'SCSS', 'Bootstrap 5.x', 'JavaScript', 'Fully Responsive'],
  },
  {
    id: 17,
    slug: 'hyip-rio',
    title: 'Hyip Rio',
    titleClass: 'line-height-1 fz-20 font-weight-600',
    subtitle: 'Hyip Rio - Advanced Hyip Investment Scheme With Ranking System and Automatic Withdraw',
    image: assetPath('/assets/imgs/works/04.png'),
    imageAlt: '',
    href: 'https://codecanyon.net/item/hyiprio-advanced-hyip-investment-scheme-with-ranking-system/41665623',
    description:
      'Hyip Rio is an advanced investment platform with investment plans, multi-level referral bonuses, a ranking system, multiple payment gateways, automatic withdrawals and fund transfers between users. I developed the responsive frontend UI with HTML5, SCSS, Bootstrap 5 and JavaScript, building the landing pages and user dashboard screens; the application backend was built by the backend team.',
    technologies: ['HTML5 / CSS3', 'SCSS', 'Bootstrap 5.x', 'JavaScript', 'Fully Responsive'],
  },
  {
    id: 18,
    slug: 'digibank',
    title: 'Digibank',
    titleClass: 'line-height-1 fz-20 font-weight-600',
    subtitle: 'Digibank - Advanced Multi Wallet Digital Banking System with Virtual Card and Rewards',
    image: assetPath('/assets/imgs/works/12.png'),
    imageAlt: '',
    href: 'https://codecanyon.net/item/digibank-advanced-digital-banking-system-with-rewards/52757276',
    description:
      'Digibank is a multi-wallet digital banking system with DPS and FDR savings schemes, loans, bill payments, virtual cards and rewards. I developed the responsive frontend UI with HTML5, SCSS, Bootstrap 5 and JavaScript, building the landing pages and user banking dashboard screens; the application backend was built by the backend team.',
    technologies: ['HTML5 / CSS3', 'SCSS', 'Bootstrap 5.x', 'JavaScript', 'Fully Responsive'],
  },
];

export const portfolioTabs: PortfolioTab[] = [
  {
    id: 'all',
    buttonId: 'protfolio-tab',
    paneId: 'protfolio-tab-pane',
    label: 'All',
    slugs: ['orvina', 'trustep', 'eduman', 'paradox'],
  },
  {
    id: 'html',
    buttonId: 'profile-tab',
    paneId: 'profile-tab-pane',
    label: 'HTML Template',
    slugs: ['eduman', 'paradox', 'finwise', 'banana', 'businoz', 'dairy-farm', 'expovent-dashboard', 'eurtech', 'medivibes', 'axil', 'dogri', 'digitek'],
  },
  {
    id: 'frontend',
    buttonId: 'frontend-backend',
    paneId: 'frontend-backend-pane',
    label: 'Frontend Design',
    slugs: ['inventual', 'solid-ptc', 'hyip-rio', 'digibank'],
  },
  {
    id: 'api',
    buttonId: 'api-tab',
    paneId: 'api-tab-pane',
    label: 'API Implementation',
    slugs: ['orvina', 'trustep'],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug);

export const getProjectsForTab = (slugs: string[]): Project[] =>
  slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is Project => Boolean(project));

