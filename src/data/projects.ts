import type { PortfolioTab, Project } from '@/types/project';

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
    image: '/assets/imgs/works/orvina.png',
    imageAlt: 'Orvina Project',
    href: 'https://orvina.vercel.app/',
    description:
      'Worked as a Frontend Developer and API Integrator. Built responsive user and admin interfaces using Next.js and Tailwind CSS, integrated Laravel REST APIs with Redux Toolkit Query, implemented authentication, dashboard features, investment management, wallet operations, and real-time data handling.',
    technologies: ['Next.js', 'Tailwind CSS', 'Redux Query', 'Laravel API', 'JWT Auth'],
    infoCard: {
      rows: [
        { label: 'Role:', value: 'Frontend Developer & API Integration' },
        { label: 'Backend:', value: 'Laravel REST API (Laravel Developer)' },
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
          { label: 'Backend:', value: 'Laravel REST API (Laravel Developer)' },
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
    image: '/assets/imgs/works/trustep.png',
    imageAlt: 'Trustep Project',
    href: 'https://trustep.vercel.app/',
    description:
      'Worked as a Frontend Developer and API Integrator. Developed modern, responsive user and admin interfaces using Next.js and Tailwind CSS. Integrated Laravel REST APIs with Redux Toolkit Query to manage company listings, business reviews, rating systems, authentication, user profiles, search functionality, and admin moderation features.',
    technologies: ['Next.js', 'Tailwind CSS', 'Redux Query', 'Laravel API', 'Reviews'],
    infoCard: {
      rows: [
        { label: 'Role:', value: 'Frontend Developer & API Integration' },
        { label: 'Backend:', value: 'Laravel REST API (Laravel Developer)' },
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
    image: '/assets/imgs/works/01.png',
    imageAlt: '',
    href: 'https://themeforest.net/item/eduman-education-online-courses-html-template/36636891?s_rank=67',
    description:
      'Eduman – Education & Online Courses HTML Template Eduman Template is creative template for University, College, Courses Hub, Training Center, LMS, Academy, Web, School, Kindergarten, etc. We provide you with pre-built pages, but it’s also dead simple to create new pages all your own with ease.You can easily edit and customize the default homepage to make it in line with your specific content arrangement using the Bootstrap 5. has professional, pixel perfect and clean modern layouts for almost any website need.',
    technologies: ['HTML5 / CSS3', 'SASS CSS.', 'Bootstrap 5.x', 'JS framework', 'Fully Responsive'],
  },
  {
    id: 4,
    slug: 'paradox',
    title: 'Paradox',
    titleClass: 'line-height-1 fz-20 font-weight-600',
    subtitle: 'Paradox - Creative Agency HTML5 Template',
    image: '/assets/imgs/works/02.png',
    imageAlt: '',
    href: 'https://paradox-react.vercel.app/',
    description:
      'Paradox – Creative Agency is a clean and modern HTML5 , Bootstrap Creative Agency Template. In artistic and creative industries, having a portfolio is pretty much a requirement. Digital Agencies, illustrators, graphic artists, designer, marketing services, developer and artisans all use portfolios as a key way of marketing themselves. So it a very important to have a awesome portfolio. In this situation Paradox is perfect solution. It’s suitable for Digital Agencies, Business consulting, Creative Agencies, IT Agenc, Startup Business, SEO Agencies, Personal Portfolio, any or any kind of portfolio profile',
    technologies: ['HTML5 / CSS3', 'SASS CSS.', 'Bootstrap 5.x', 'JS framework', 'Fully Responsive'],
  },
  {
    id: 5,
    slug: 'finwise',
    title: 'Finwise',
    titleClass: 'line-height-1 fz-20 font-weight-600',
    subtitle: 'Finwise - Online Banking & Finance HTML5 Template',
    image: '/assets/imgs/works/03.png',
    imageAlt: '',
    href: 'https://themeforest.net/item/finwise-online-banking-finance-html5-template/47765585',
    description:
      'Paradox – Creative Agency is a clean and modern HTML5 , Bootstrap Creative Agency Template. In artistic and creative industries, having a portfolio is pretty much a requirement. Digital Agencies, illustrators, graphic artists, designer, marketing services, developer and artisans all use portfolios as a key way of marketing themselves. So it a very important to have a awesome portfolio. In this situation Paradox is perfect solution. It’s suitable for Digital Agencies, Business consulting, Creative Agencies, IT Agenc, Startup Business, SEO Agencies, Personal Portfolio, any or any kind of portfolio profile',
    technologies: ['HTML5 / CSS3', 'SASS CSS.', 'Bootstrap 5.x', 'JS framework', 'Fully Responsive'],
  },
  {
    id: 6,
    slug: 'banana',
    title: 'Banana',
    titleClass: 'line-height-1 fz-20 font-weight-600',
    subtitle: 'Banana – Organic Food HTML5 Template',
    image: '/assets/imgs/works/05.png',
    imageAlt: '',
    href: 'https://themeforest.net/item/banana-organic-food-html5-template/38683907?s_rank=48',
    description:
      'Banana – HTML Template is creative template for Organic Food & Grocery eCommerce sites. banana is perfect for different category websites: Organic Store, Organic Food Shop, Gardening, Organic Farming, Organic Food, Plant Biotechnology, Eco Store, Groundskeeper, Ecology, Vegetables, Bakery Shop etc, and any more. You can create many unique and modern websites with Banana. The code is very easy to modify and make it suit anything you need.',
    technologies: ['HTML5 / CSS3', 'SASS CSS.', 'Bootstrap 5.x', 'JS framework', 'Fully Responsive'],
  },
  {
    id: 7,
    slug: 'businoz',
    title: 'Businoz',
    titleClass: 'line-height-1 fz-20 font-weight-600',
    subtitle: 'Businoz - Multipurpose Business HTML5 Template',
    image: '/assets/imgs/works/16.png',
    imageAlt: '',
    href: 'https://themeforest.net/item/businoz-multipurpose-business-html5-template/38233795',
    description:
      'Banana – HTML Template is creative template for Organic Food & Grocery eCommerce sites. banana is perfect for different category websites: Organic Store, Organic Food Shop, Gardening, Organic Farming, Organic Food, Plant Biotechnology, Eco Store, Groundskeeper, Ecology, Vegetables, Bakery Shop etc, and any more. You can create many unique and modern websites with Banana. The code is very easy to modify and make it suit anything you need.',
    technologies: ['HTML5 / CSS3', 'SASS CSS.', 'Bootstrap 5.x', 'JS framework', 'Fully Responsive'],
  },
  {
    id: 8,
    slug: 'dairy-farm',
    title: 'Dairy Farm',
    titleClass: 'line-height-1 fz-20 font-weight-600',
    subtitle: 'Dairypress - Dairy Farm HTML5 Template',
    image: '/assets/imgs/works/06.png',
    imageAlt: '',
    href: 'https://themeforest.net/item/dairypress-dairy-farm-html5-template/39211137?s_rank=47',
    description:
      'Dairypress – HTML Template is creative template for Dairy Farm & Eco Milk Products sites. Dairypress is perfect for different category websites: Organic Store, dairy farms, eco products manufacturers, meat and milk manufacturers, Corganic stores, cattle farms, agricultural business, milk production, milk shops etc, and any more. You can create many unique and modern websites with Dairypress. The code is very easy to modify and make it suit anything you need. We provide you with pre-built pages, but it’s also dead simple to create new pages all your own with eas',
    technologies: ['HTML5 / CSS3', 'SASS CSS.', 'Bootstrap 5.x', 'JS framework', 'Fully Responsive'],
  },
  {
    id: 9,
    slug: 'expovent-dashboard',
    title: 'Expovent Dashboard',
    titleClass: 'line-height-1',
    subtitle: 'Expovent - Event Management Dashboard HTML5 Template + RTL (With Dashboard)',
    image: '/assets/imgs/works/07.png',
    imageAlt: '',
    href: 'https://themeforest.net/item/expovent-event-management-dashboard-html5-template-rtl/43288905?s_rank=29',
    description:
      'Expovent – HTML Template is creative template for Event Management Service sites. Expovent is perfect for websites: event agency, event services, motivational speaker, celebration, event backend event task, event ui, fun meetings, merry-making etc. You can create many unique and modern websites with Expovent. The code is very easy to modify and make it suit anything you need.',
    technologies: ['HTML5 / CSS3', 'SASS CSS.', 'Bootstrap 5.x', 'JS framework', 'Fully Responsive'],
  },
  {
    id: 10,
    slug: 'eurtech',
    title: 'Eurtech',
    titleClass: 'line-height-1',
    subtitle: 'Eurtech - IT Solutions HTML5 Template',
    image: '/assets/imgs/works/08.png',
    imageAlt: '',
    href: 'https://themeforest.net/item/eurtech-it-solutions-html5-template/39640570?s_rank=42',
    description:
      'Eurtech – HTML5 Template is creative template for IT Solutions & Technology sites. Eurtech is perfect for different category websites: IT Solutions, IT Services, IT Business, Cyber security, Consulting, SaaS & Software, Digital Solution, Technical Engineering, Technology, and Services Company etc, and any more. You can create many unique and modern websites with Eurtech. The code is very easy to modify and make it suit anything you need. We provide you with pre-built pages, but it’s also dead simple to create new pages all your own with ease.',
    technologies: ['HTML5 / CSS3', 'SASS CSS.', 'Bootstrap 5.x', 'JS framework', 'Fully Responsive'],
  },
  {
    id: 11,
    slug: 'medivibes',
    title: 'Medivibes',
    titleClass: 'line-height-1 fz-20 font-weight-600',
    subtitle: 'Medivibes - Health & Medical HTML5 Template',
    image: '/assets/imgs/works/medivibes.png',
    imageAlt: '',
    href: 'https://medivibes.vercel.app/',
    description:
      'Paradox – Creative Agency is a clean and modern HTML5 , Bootstrap Creative Agency Template. In artistic and creative industries, having a portfolio is pretty much a requirement. Digital Agencies, illustrators, graphic artists, designer, marketing services, developer and artisans all use portfolios as a key way of marketing themselves. So it a very important to have a awesome portfolio. In this situation Paradox is perfect solution. It’s suitable for Digital Agencies, Business consulting, Creative Agencies, IT Agenc, Startup Business, SEO Agencies, Personal Portfolio, any or any kind of portfolio profile',
    technologies: ['HTML5 / CSS3', 'SASS CSS.', 'Bootstrap 5.x', 'JS framework', 'Fully Responsive'],
  },
  {
    id: 12,
    slug: 'axil',
    title: 'Axil',
    titleClass: 'line-height-1',
    subtitle: 'Axil - Creative Agency Portfolio Template',
    image: '/assets/imgs/works/09.png',
    imageAlt: '',
    href: 'https://themeforest.net/item/axil-creative-agency-portfolio-template/45530784',
    description:
      'Axil – Creative Agency Portfolio is a clean and modern HTML5 , Bootstrap Creative Agency Template. In artistic and creative industries, having a portfolio is pretty much a requirement. Digital Agencies, Startup Business, graphic artists, designer, marketing services, developer and artisans all use portfolios as a key way of marketing themselves. So it a very important to have a awesome portfolio. In this situation Axil is perfect solution. It’s suitable for Digital Agencies, Creative Business consulting, Creative Agencies, IT Agenc, Startup Business, SEO Agencies, Personal Portfolio, any or any kind of portfolio profile',
    technologies: ['HTML5 / CSS3', 'SASS CSS.', 'Bootstrap 5.x', 'JS framework', 'Fully Responsive'],
  },
  {
    id: 13,
    slug: 'dogri',
    title: 'Dogri',
    titleClass: 'line-height-1',
    subtitle: 'Health & Medical Service',
    image: '/assets/imgs/works/10.png',
    imageAlt: '',
    href: 'https://themeforest.net/item/dogri-health-medical-center-html-template/49310177',
    description:
      'Axil – Creative Agency Portfolio is a clean and modern HTML5 , Bootstrap Creative Agency Template. In artistic and creative industries, having a portfolio is pretty much a requirement. Digital Agencies, Startup Business, graphic artists, designer, marketing services, developer and artisans all use portfolios as a key way of marketing themselves. So it a very important to have a awesome portfolio. In this situation Axil is perfect solution. It’s suitable for Digital Agencies, Creative Business consulting, Creative Agencies, IT Agenc, Startup Business, SEO Agencies, Personal Portfolio, any or any kind of portfolio profile',
    technologies: ['HTML5 / CSS3', 'SASS CSS.', 'Bootstrap 5.x', 'JS framework', 'Fully Responsive'],
  },
  {
    id: 14,
    slug: 'digitek',
    title: 'Digitek',
    titleClass: 'line-height-1',
    subtitle: 'Digitek - IT Service HTML Template',
    image: '/assets/imgs/works/11.png',
    imageAlt: '',
    href: 'https://themeforest.net/item/digitek-seo-service-html-template/44350405',
    description:
      'Digitek is a Responsive Modern Bootstrap 5 template for IT, SEO, Marketing, SaaS, Business & Social Media Marketing agency HTML Template. It is created for business and tech-focussed agencies who offer Online & IT-based services,, including digital solutions through SaaS applications. The template is suitable for Agencies, startups, IT Solutions providers, CCTV services, Psychology Counselling, NewsPortal, and other business agencies.',
    technologies: ['HTML5 / CSS3', 'SASS CSS.', 'Bootstrap 5.x', 'JS framework', 'Fully Responsive'],
  },
  {
    id: 15,
    slug: 'inventual',
    title: 'Inventual',
    titleClass: 'line-height-1 fz-20 font-weight-600',
    subtitle: 'Inventual NextJs Inventory Admin Template + RTL',
    image: '/assets/imgs/works/react-01.png',
    imageAlt: '',
    href: 'https://themeforest.net/item/inventual-angular-inventory-admin-template/35814136',
    description:
      'Inventual is a sophisticated and powerful inventory administration template meticulously designed to meet the unique demands of managing inventories in diverse industries. With its cutting-edge features and intuitive user interface, Inventual empowers businesses to streamline inventory management, optimize processes, and enhance productivity',
    technologies: ['Next Js', 'ReactJS', 'Tailwind Css', 'Material UI', 'Apex Charts', 'Fully Responsive'],
  },
  {
    id: 16,
    slug: 'solid-ptc',
    title: 'Solid PTC',
    titleClass: 'line-height-1',
    subtitle: 'Solid PTC - Advanced Pay Per Click Platform',
    image: '/assets/imgs/works/ptc.png',
    imageAlt: '',
    href: 'https://codecanyon.net/item/solid-ptc-advanced-pay-per-click-platform/54996559',
    description:
      'Solid PTC - Advanced Pay Per Click Platform - CodeCanyon Item for Sale Live Preview Screenshots SolidPTC – is a Pay Per Click solution that is mainly used for building a business website that can offer advertising campaigns, and sales and generate traffic on the websites. It is an easy and reliable PTC Script where all the necessary features are available. In the system, visitors can register as a user to earn money from the platform and, can deposit to the account for subscribing to the plan to see more ads and earn more. In the system, there are places to list the ads by the user which will be seen by all the other users. The admin or the user both will be able to list the ads and they can be found by all the users as per needs.',
    technologies: ['HTML5 / CSS3', 'SASS CSS.', 'Bootstrap 5.x', 'JS framework', 'Fully Responsive'],
  },
  {
    id: 17,
    slug: 'hyip-rio',
    title: 'Hyip Rio',
    titleClass: 'line-height-1 fz-20 font-weight-600',
    subtitle: 'Hyip Rio - Advanced Hyip Investment Scheme With Ranking System and Automatic Withdraw',
    image: '/assets/imgs/works/04.png',
    imageAlt: '',
    href: 'https://codecanyon.net/item/hyiprio-advanced-hyip-investment-scheme-with-ranking-system/41665623',
    description:
      'Hyip Rio – is an Advanced Investment System that is mainly used for the Hyip Investment Website. It is a highly secure and fast dynamic Hyip Investment Script. In the system user can register to the application and can deposit to the account and can Invest in any of the Investment Plans which is called Schema in the system. Users can get the Signup Bonus for registering to the website and they also can earn to referral. It has various referral levels to get the referral bonus. There is an integrated automatic payment gateway like Paypal, Stripe, Mollie, Coinbase, Paystack, VogurePay, Coingate, and Flutterwave. Also, it has an automatic withdrawal method to withdraw the money to the user account directly. It has a manual deposit method available. There is a Ranking system on the website, users can achieve any of the rankings to earn from investment and can unlock ranking badges. One user can transfer the fund to other users. There is an investment and deposit bounty available. All the systems and features are managed by the admin.',
    technologies: ['HTML5 / CSS3', 'SASS CSS.', 'Bootstrap 5.x', 'JS framework', 'Fully Responsive'],
  },
  {
    id: 18,
    slug: 'digibank',
    title: 'Digibank',
    titleClass: 'line-height-1 fz-20 font-weight-600',
    subtitle: 'Digibank - Advanced Multi Wallet Digital Banking System with Virtual Card and Rewards',
    image: '/assets/imgs/works/12.png',
    imageAlt: '',
    href: 'https://codecanyon.net/item/digibank-advanced-digital-banking-system-with-rewards/52757276',
    description:
      'Digibank – is an Advanced Digital Banking solution that is mainly used for Digital and Physical Banking Websites. It is a flexible banking script that offers all banking facilities. In the system, visitors can register as a bank user to the application and deposit into the account, and also can make the FDR or DPS using the deposited amount. In the system, there are DPS, FDR, Loan and Bill payment, Multi Wallets or Currency, and Virtual card creation features available. The user can make a DPS for a particular time period and amount, and can receive the DPS amount with the profit after its maturity. It is also possible to make FDR, which had some FDR plans, the bank users would keep the funds in their FDR as block money, and they would receive the profit from that money every a little period of time. FDR has the compounding system available. The bank users can also apply for a Loan by following all the processes of the bank. The admin or bank owner will be able to approve the loan or reject it if it does not fulfill the requirements.',
    technologies: ['HTML5 / CSS3', 'SASS CSS.', 'Bootstrap 5.x', 'JS framework', 'Fully Responsive'],
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
