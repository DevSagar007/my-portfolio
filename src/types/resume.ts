/** A row in the "Working Experience" / "Education & Certifications" lists. */
export interface ResumeItem {
  /** Spacing class the original markup used on the date column. */
  dateClass: string;
  date: string;
  href: string;
  title: string;
  subtitle: string;
  /** The last row in each list drops the bottom margin. */
  last: boolean;
}

/** A technology chip inside a skill stack card. */
export interface SkillTech {
  name: string;
  /** Font Awesome classes, e.g. "fa-brands fa-react". */
  icon: string;
}

/** A card in the "Technical Skills & Expertise" grid. */
export interface SkillStack {
  title: string;
  /** Font Awesome classes for the card's header icon. */
  icon: string;
  description: string;
  techs: SkillTech[];
  /** Featured stacks span the full width of the grid. */
  featured?: boolean;
}

/** A card in the "Services" grid. */
export interface Service {
  /** Item classes from the original markup (responsive margins differ). */
  itemClass: string;
  letter: string;
  title: string;
  description: string;
  tags: string[];
}

/** A slide in the testimonials carousel. */
export interface Testimonial {
  image: string;
  name: string;
  role: string;
  text: string;
  stars: number;
  reviews: string;
}
