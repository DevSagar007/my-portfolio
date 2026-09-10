/** A card in the "Latest News" / "Related Posts" grid. */
export interface BlogCard {
  /** Item classes from the original markup (responsive margins differ). */
  itemClass: string;
  image: string;
  date: string;
  title: string;
  href: string;
  /** Whether the title link opened in a new tab in the original markup. */
  titleTargetBlank: boolean;
  comments: string;
}

/**
 * The body of a blog post, modelled as the same sequence of blocks the static
 * blog-details.html used so the rendered markup and spacing stay identical.
 */
export type BlogBlock =
  | {
      type: 'text';
      className: string;
      /** Optional drop-cap paragraph rendered first. */
      lead?: { dropCap: string; text: string };
      paragraphs: string[];
    }
  | { type: 'title'; className: string; text: string }
  | { type: 'quote'; className: string; text: string; author: string }
  | { type: 'imagePair'; className: string; images: [string, string] }
  | {
      type: 'list';
      className: string;
      ordered: boolean;
      heading: string;
      items: string[];
    };

export interface BlogComment {
  avatar: string;
  name: string;
  text: string;
  /** Renders the indented "replayed" variant. */
  replied: boolean;
}

export interface BlogPostNav {
  image: string;
  slug: string;
  /** Title lines, kept separate because the original used a <br> here. */
  titleLines: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  categories: string[];
  meta: string;
  image: string;
  blocks: BlogBlock[];
  tags: { label: string; href: string }[];
  share: { icon: string; href: string }[];
  author: { image: string; name: string; bio: string };
  prev: BlogPostNav;
  next: BlogPostNav;
  commentsHeading: string;
  comments: BlogComment[];
  relatedPosts: BlogCard[];
}
