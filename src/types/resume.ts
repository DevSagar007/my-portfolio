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

/** A row in the "Technical Skills & Expertise" grid. */
export interface Skill {
  /** Item classes from the original markup (margins differ per cell). */
  itemClass: string;
  icon: string;
  name: string;
  /** Target width of the progress bar, e.g. "85%". */
  value: string;
  /** Label rendered next to the bar. */
  shown: string;
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
