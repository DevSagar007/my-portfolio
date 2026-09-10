/** A single "Email:" / "Pass:" line inside a demo-credentials box. */
export interface CredentialItem {
  label: string;
  value: string;
}

/** One demo account box ("User Account", "Admin Account", ...). */
export interface CredentialAccount {
  title: string;
  /** Bootstrap column classes the original markup used for this box. */
  colClass: string;
  items: CredentialItem[];
}

/** A "Live Website" / "Admin Panel" button inside the project info card. */
export interface ProjectLink {
  /** Bootstrap column classes the original markup used for this button. */
  colClass: string;
  href: string;
  /** Font Awesome classes, e.g. "fas fa-external-link-alt mr-5". */
  icon: string;
  label: string;
}

/** A "Role:" / "Backend:" line inside the project info card. */
export interface ProjectInfoRow {
  label: string;
  value: string;
}

/** The extended info card shown on the API-integration projects. */
export interface ProjectInfoCard {
  rows: ProjectInfoRow[];
  /** Bootstrap row classes wrapping the link buttons. */
  linkRowClass: string;
  links: ProjectLink[];
  credentials?: {
    rowClass: string;
    accounts: CredentialAccount[];
  };
}

/** The four filter tabs shown above the portfolio grid. */
export type PortfolioTabId = 'all' | 'html' | 'frontend' | 'api';

export interface Project {
  id: number;
  slug: string;
  title: string;
  /** Heading classes from the original card (a few cards drop fz-20/font-weight-600). */
  titleClass: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  /** External link the card points at (live site or marketplace listing). */
  href: string;
  description: string;
  technologies: string[];
  infoCard?: ProjectInfoCard;
  /**
   * A couple of cards were duplicated across filter tabs with slightly
   * different Bootstrap gutter classes. Where that happened the variant is
   * kept here, keyed by tab, so each tab renders exactly what it used to.
   */
  infoCardByTab?: Partial<Record<PortfolioTabId, ProjectInfoCard>>;
}

export interface PortfolioTab {
  id: PortfolioTabId;
  /** DOM id of the tab button, kept from the original markup. */
  buttonId: string;
  /** DOM id of the tab pane, kept from the original markup. */
  paneId: string;
  label: string;
  /** Project slugs shown in this tab, in the original order. */
  slugs: string[];
}
