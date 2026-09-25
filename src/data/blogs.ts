import type { BlogCard, BlogPost } from '@/types/blog';

/** The three news cards shared by the home page and the works page. */
const newsCards: Omit<BlogCard, 'titleTargetBlank'>[] = [
  {
    itemClass: 'item md-mb30',
    image: '/my-portfolio/assets/imgs/blog/1.jpg',
    date: '6 , Aug 2025',
    title: 'Software Development-এ BFF (Backend for Frontend) কী?',
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7372698145538961408/',
    comments: '2 Comments',
  },
  {
    itemClass: 'item md-mb30',
    image: '/my-portfolio/assets/imgs/blog/2.jpg',
    date: '6 , May 2026',
    title: 'What is BFF (Backend for Frontend) in Software Development?.',
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7438634424050589697/',
    comments: '2 Comments',
  },
  {
    itemClass: 'item md-mb30',
    image: '/my-portfolio/assets/imgs/blog/1.jpg',
    date: '6 , Aug 2025',
    title: 'Software Development-এ BFF (Backend for Frontend) কী?',
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7372698145538961408/',
    comments: '2 Comments',
  },
];

/** "Latest News" on the home page - the titles opened in a new tab there. */
export const latestNews: BlogCard[] = newsCards.map((card) => ({
  ...card,
  titleTargetBlank: true,
}));

/** "Related Posts" on the works page - same cards, same-tab titles. */
export const relatedNews: BlogCard[] = newsCards.map((card) => ({
  ...card,
  titleTargetBlank: false,
}));

const POST_SLUG = 'network-of-wormholes-colonies-extraordinary-claims-require';

/**
 * "Related Posts" grid shown under a blog post. The static page linked every
 * card back to blog-details.html; here they point at the post route instead.
 */
const relatedPosts: BlogCard[] = [
  {
    itemClass: 'item md-mb30',
    image: '/my-portfolio/assets/imgs/blog/1.jpg',
    date: '6 , Aug 2022',
    title: '12 unique examples of portfolio websites.',
    href: `/blog/${POST_SLUG}`,
    titleTargetBlank: false,
    comments: '2 Comments',
  },
  {
    itemClass: 'item md-mb30',
    image: '/my-portfolio/assets/imgs/blog/2.jpg',
    date: '6 , Aug 2022',
    title: 'Dealing with spring allergy symptoms.',
    href: `/blog/${POST_SLUG}`,
    titleTargetBlank: false,
    comments: '2 Comments',
  },
  {
    // The last card in the static markup drops the responsive bottom margin.
    itemClass: 'item',
    image: '/my-portfolio/assets/imgs/blog/3.jpg',
    date: '6 , Aug 2022',
    title: 'Best wireframe tools for web designers.',
    href: `/blog/${POST_SLUG}`,
    titleTargetBlank: false,
    comments: '2 Comments',
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: POST_SLUG,
    title: 'Network of wormholes colonies extraordinary claims require.',
    categories: ['Web Design', 'Envato'],
    meta: '6 , August 2022 - By Admin',
    image: '/my-portfolio/assets/imgs/blog/m.jpg',
    blocks: [
      {
        type: 'text',
        className: 'text mb-20',
        lead: {
          dropCap: 'A',
          text: 'new report said earlier this week that Apple is working on a brand new laptop. A trusted Apple insider with a proven track record confirmed that Apple is working on the larger MacBook Air.',
        },
        paragraphs: [
          'new report said earlier this week that Apple is working on a brand new laptop. Apple plans to release a 15-inch MacBook Air in 2023, a first for the Air series. A trusted Apple insider with a proven track record confirmed that Apple is working on the larger MacBook Air.',
        ],
      },
      {
        type: 'text',
        className: 'text',
        paragraphs: [
          'However, Apple might not include it in the Air series when it launches it. As for the notebook’s release date, the 15-inch MacBook isn’t coming soon. It’ll get a late 2023 release at best, according to the new claims.',
        ],
      },
      {
        type: 'title',
        className: 'title mt-30',
        text: 'What sizes do MacBook Airs come in?',
      },
      {
        type: 'text',
        className: 'text mt-20',
        paragraphs: [
          'Apple currently sells only one MacBook Air size. The laptop comes in a 13-inch version that matches the pre-2021 13-inch MacBook Pro size. Previously, Apple sold an 11-inch MacBook Air, but the company discontinued that model in 2017.',
        ],
      },
      {
        type: 'quote',
        className: 'post-qoute mt-50',
        text: 'Increase your site traffic and gain new customers with a beautiful and functional blog.',
        author: '- Ui-ThemeZ Code',
      },
      {
        type: 'imagePair',
        className: 'mb-50 mt-50',
        images: ['/my-portfolio/assets/imgs/blog/b1.jpg', '/my-portfolio/assets/imgs/blog/b2.jpg'],
      },
      {
        type: 'title',
        className: 'title mb-10',
        text: 'Apple currently sells only one MacBook Air size.',
      },
      {
        type: 'text',
        className: 'text mb-20',
        paragraphs: [
          'A new report said earlier this week that Apple is working on a brand new laptop. Apple plans to release a 15-inch MacBook Air in 2023, a first for the Air series. A trusted Apple insider with a proven track record confirmed that Apple is working on the larger MacBook Air.',
        ],
      },
      {
        type: 'list',
        className: 'unorder-list mb-30',
        ordered: false,
        heading: 'Ordered & Unordered Lists.',
        items: [
          'Yet this above sewed flirted opened ouch',
          'Goldfinch realistic sporadic ingenuous',
          'Abominable this abidin far successfully then like piquan',
        ],
      },
      {
        type: 'list',
        className: 'order-list mb-30',
        ordered: true,
        heading: 'Ordered & Unordered Lists.',
        items: [
          'Yet this above sewed flirted opened ouch',
          'Goldfinch realistic sporadic ingenuous',
          'Abominable this abidin far successfully then like piquan',
        ],
      },
      {
        type: 'text',
        className: 'text',
        paragraphs: [
          'However, Apple might not include it in the Air series when it launches it. As for the notebook’s release date, the 15-inch MacBook isn’t coming soon. It’ll get a late 2023 release at best, according to the new claims.',
        ],
      },
    ],
    tags: [
      { label: 'Tech', href: '#' },
      { label: 'Hawke', href: '#' },
    ],
    share: [
      { icon: 'fab fa-facebook-f', href: 'https://www.facebook.com/' },
      { icon: 'fab fa-twitter', href: 'https://www.twitter.com/' },
      { icon: 'fab fa-youtube', href: 'https://www.youtube.com/' },
    ],
    author: {
      image: '/my-portfolio/assets/imgs/blog/author1.jpg',
      name: 'Chris Smith',
      bio: 'Nulla eleifend, lectus eu gravida facilisis, ipsum metus faucibus eros, vitae vulputate nibh libero ac metus.',
    },
    prev: {
      image: '/my-portfolio/assets/imgs/blog/1.jpg',
      slug: POST_SLUG,
      titleLines: ['Ways to quickly traffic to', 'your website.'],
    },
    next: {
      image: '/my-portfolio/assets/imgs/blog/2.jpg',
      slug: POST_SLUG,
      titleLines: ['How to Handle Your Good Employee.'],
    },
    commentsHeading: 'comments (2)',
    comments: [
      {
        avatar: '/my-portfolio/assets/imgs/blog/author1.jpg',
        name: 'Megan fox',
        text: 'Ut elementum turpis lorem, id vulputate risus consequat vitae. Morbi eget urna imperdiet, pellentesque nulla id, tempus mauris.',
        replied: false,
      },
      {
        avatar: '/my-portfolio/assets/imgs/blog/author1.jpg',
        name: 'Megan fox',
        text: 'Ut elementum turpis lorem Morbi eget urna imperdiet, pellentesque nulla id, tempus mauris.',
        replied: true,
      },
    ],
    relatedPosts,
  },
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((post) => post.slug === slug);
