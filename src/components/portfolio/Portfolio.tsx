'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import ProjectCard from '@/components/portfolio/ProjectCard';
import { getPortfolioTab, getProjectsForTab, portfolioTabs } from '@/data/projects';
import type { PortfolioTabId } from '@/types/project';

interface PortfolioProps {
  /** Section classes, which differ slightly between the home and works pages. */
  sectionClassName: string;
  /** Only the home page's copy took part in the one-page scroll navigation. */
  scrollIndex?: string;
  /** Show the complete catalog and hide the home-page "View All" action. */
  fullCatalog?: boolean;
}

/** Cards shown per tab in the home page preview (two rows on desktop). */
const PREVIEW_LIMIT = 6;

const DEFAULT_TAB: PortfolioTabId = 'all';

/** Projects page URL for a tab, e.g. `/projects/?tab=web-applications`. */
const projectsHref = (tab: PortfolioTabId) => `/projects/?tab=${tab}`;

/** The tab named by the current URL's `?tab=` value, falling back to "All". */
const tabFromLocation = (): PortfolioTabId =>
  getPortfolioTab(new URLSearchParams(window.location.search).get('tab'))?.id ?? DEFAULT_TAB;

/**
 * The portfolio grid with its filter tabs.
 *
 * The static pages relied on Bootstrap's tab JavaScript; here the same
 * Bootstrap classes (`active`, `show`, `fade`) are driven by React state. Both
 * the home page and the projects page use the same tab definitions and
 * `getProjectsForTab`, so membership and counts always agree. On the projects
 * page the active tab is mirrored in `?tab=`, which survives a refresh and
 * works with the browser's back / forward buttons.
 */
export default function Portfolio({ sectionClassName, scrollIndex, fullCatalog = false }: PortfolioProps) {
  const router = useRouter();
  const [active, setActive] = useState<PortfolioTabId>(DEFAULT_TAB);
  const [isNavigating, setIsNavigating] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => () => document.body.classList.remove('page-transitioning'), []);

  useEffect(() => {
    if (!fullCatalog) return;

    const frame = window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      setActive(tabFromLocation());
    });

    const syncWithHistory = () => setActive(tabFromLocation());
    window.addEventListener('popstate', syncWithHistory);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('popstate', syncWithHistory);
    };
  }, [fullCatalog]);

  const selectTab = (id: PortfolioTabId) => {
    if (id === active) return;
    setActive(id);

    if (fullCatalog) {
      const url = new URL(window.location.href);
      url.searchParams.set('tab', id);
      window.history.pushState(null, '', url);
    }
  };

  /** Arrow / Home / End move between tabs, as in the WAI-ARIA tabs pattern. */
  const onTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = portfolioTabs.length - 1;
    const next =
      event.key === 'ArrowRight' ? (index === last ? 0 : index + 1)
      : event.key === 'ArrowLeft' ? (index === 0 ? last : index - 1)
      : event.key === 'Home' ? 0
      : event.key === 'End' ? last
      : -1;
    if (next < 0) return;

    event.preventDefault();
    tabRefs.current[next]?.focus();
    selectTab(portfolioTabs[next].id);
  };

  const activeTab = getPortfolioTab(active) ?? portfolioTabs[0];
  const href = projectsHref(activeTab.id);

  const openProjects = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // Let modified clicks (new tab / window) behave like a normal link.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
    event.preventDefault();
    if (isNavigating) return;

    setIsNavigating(true);
    document.body.classList.add('page-transitioning');

    window.setTimeout(() => {
      router.push(href, { scroll: true });
    }, 450);
  };

  return (
    <section className={sectionClassName} data-scroll-index={scrollIndex}>
      <div className="container">
        <div className="sec-head bord-thin-bottom pb-20 mb-30 d-flex align-items-center justify-content-between">
          <h4 className="sub-title fz-28">Portfolio</h4>
          <ul className="nav nav-tabs portfolio-filter" id="myTab" role="tablist" aria-label="Project categories">
            {portfolioTabs.map((tab, index) => (
              <li className="nav-item" role="presentation" key={tab.id}>
                <button
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  className={`nav-link${active === tab.id ? ' active' : ''}`}
                  id={tab.buttonId}
                  type="button"
                  role="tab"
                  aria-controls={tab.paneId}
                  aria-selected={active === tab.id}
                  tabIndex={active === tab.id ? 0 : -1}
                  onClick={() => selectTab(tab.id)}
                  onKeyDown={(event) => onTabKeyDown(event, index)}
                >
                  {tab.label}
                  <span className="portfolio-count">{getProjectsForTab(tab).length}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="tab-content" id="myTabContent">
          {portfolioTabs.map((tab) => {
            const matches = getProjectsForTab(tab);
            const shown = fullCatalog ? matches : matches.slice(0, PREVIEW_LIMIT);

            return (
              <div
                className={`tab-pane fade${active === tab.id ? ' show active' : ''}`}
                id={tab.paneId}
                role="tabpanel"
                aria-labelledby={tab.buttonId}
                tabIndex={0}
                key={tab.id}
              >
                <div className="row project-grid">
                  {shown.map((project) => (
                    <ProjectCard project={project} tabId={tab.id} key={project.slug} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {!fullCatalog ? <div className="row">
          <div className="col-xxl-12">
            <div className="butn-presv text-center mt-60">
              <Link
                href={href}
                scroll
                className={`butn butn-md butn-bg bg-white radius-5 skew portfolio-more${isNavigating ? ' is-loading' : ''}`}
                aria-busy={isNavigating}
                onClick={openProjects}
              >
                <span className="text-dark fw-600">
                  {isNavigating ? (
                    <><span className="portfolio-loader" aria-hidden="true" /> Loading Projects...</>
                  ) : (
                    <>View All {activeTab.collectionLabel}</>
                  )}
                </span>
              </Link>
            </div>
          </div>
        </div> : null}
      </div>
    </section>
  );
}
