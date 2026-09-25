/** Navigation entries. On the home page they scroll to a `data-scroll-index`
 *  section; on every other page they link back to the home page, exactly like
 *  the static site did. */
export interface NavItem {
  label: string;
  scrollNav: number;
}

export const navItems: NavItem[] = [
  { label: 'Home', scrollNav: 0 },
  { label: 'About', scrollNav: 1 },
  { label: 'Services', scrollNav: 2 },
  { label: 'Portfolio', scrollNav: 3 },
  { label: 'Testimonials', scrollNav: 4 },
  { label: 'Blog', scrollNav: 5 },
  { label: 'Contact', scrollNav: 6 },
];

export const profile = {
  name: 'Sagor Hossen',
  handle: 'DevSagar',
  image: assetPath('/assets/imgs/header/profile.png'),
  logo: assetPath('/assets/imgs/logo-light.png'),
  resume: assetPath('/assets/pdf/Md-Sagor-Hossen_Resume.pdf'),
};

export const profileSocials = [
  { icon: 'fa-brands fa-linkedin-in', href: 'https://www.linkedin.com/in/sagor-hossen-1b8482253/', external: true },
  { icon: 'fa-brands fa-github', href: 'https://github.com/DevSagar007', external: true },
  { icon: 'fa-brands fa-facebook', href: 'https://www.facebook.com/sagoromi.007', external: true },
  { icon: 'fa-brands fa-skype', href: 'https://join.skype.com/invite/vACYKNiLYY4a', external: false },
];

export const contactSocials = [
  { label: 'Facebook', href: 'https://www.facebook.com/sagoromi.007', className: 'mr-30' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sagor-hossen-1b8482253/', className: 'mr-30' },
  { label: 'X', href: 'https://x.com/sagorKhanomi', className: 'mr-30' },
  { label: 'Github', href: 'https://github.com/DevSagar007', className: '' },
];
import { assetPath } from '@/utils/assetPath';

