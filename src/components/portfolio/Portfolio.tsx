'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import ProjectCard from '@/components/portfolio/ProjectCard';
import { getProjectsForTab, portfolioTabs, projects } from '@/data/projects';
import type { PortfolioTabId } from '@/types/project';

interface PortfolioProps {
  /** Section classes, which differ slightly between the home and works pages. */
  sectionClassName: string;
  /** Only the home page's copy took part in the one-page scroll navigation. */
  scrollIndex?: string;
  /** Show the complete catalog and hide the home-page "See More" action. */
  fullCatalog?: boolean;
}

/**
 * The portfolio grid with its four filter tabs.
 *
 * The static pages relied on Bootstrap's tab JavaScript; here the same
 * Bootstrap classes (`active`, `show`, `fade`) are driven by React state, so
 * the markup, the fade transition and the ARIA wiring stay identical without
 * shipping Bootstrap's bundle.
 */
export default function Portfolio({ sectionClassName, scrollIndex, fullCatalog = false }: PortfolioProps) {
  const router = useRouter();
  const [active, setActive] = useState<PortfolioTabId>('all');
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => () => document.body.classList.remove('page-transitioning'), []);

  useEffect(() => {
    if (!fullCatalog) return;

    const requestedTab = new URLSearchParams(window.location.search).get('tab');
    const frame = window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

      if (portfolioTabs.some((tab) => tab.id === requestedTab)) {
        setActive(requestedTab as PortfolioTabId);
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [fullCatalog]);

  const projectsForTab = (tab: (typeof portfolioTabs)[number]) => {
    const matches = tab.id === 'all' && fullCatalog ? projects : getProjectsForTab(tab.slugs);
    return fullCatalog ? matches : matches.slice(0, 4);
  };

  const openProjects = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (isNavigating) return;

    setIsNavigating(true);
    document.body.classList.add('page-transitioning');

    window.setTimeout(() => {
      router.push(`/projects?tab=${active}`, { scroll: true });
    }, 450);
  };

  return (
    <section className={sectionClassName} data-scroll-index={scrollIndex}>
      <div className="container">
        <div className="sec-head bord-thin-bottom pb-20 mb-30 d-flex align-items-center justify-content-between">
          <h4 className="sub-title fz-28">Portfolio</h4>
          <ul className="nav nav-tabs portfolio-filter" id="myTab" role="tablist">
            {portfolioTabs.map((tab) => (
              <li className="nav-item" role="presentation" key={tab.id}>
                <button
                  className={`nav-link${active === tab.id ? ' active' : ''}`}
                  id={tab.buttonId}
                  data-bs-target={`#${tab.paneId}`}
                  type="button"
                  role="tab"
                  aria-controls={tab.paneId}
                  aria-selected={active === tab.id}
                  onClick={() => setActive(tab.id)}
                >
                  {tab.label}
                  {fullCatalog ? <span className="portfolio-count">{projectsForTab(tab).length}</span> : null}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="tab-content" id="myTabContent">
          {portfolioTabs.map((tab) => (
            <div
              className={`tab-pane fade${active === tab.id ? ' show active' : ''}`}
              id={tab.paneId}
              role="tabpanel"
              aria-labelledby={tab.buttonId}
              tabIndex={0}
              key={tab.id}
            >
              <div className="row">
                {projectsForTab(tab).map((project) => (
                  <ProjectCard project={project} tabId={tab.id} key={project.slug} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {!fullCatalog ? <div className="row">
          <div className="col-xxl-12">
            <div className="butn-presv text-center mt-60">
              <Link
                href={`/projects?tab=${active}`}
                scroll
                className={`butn butn-md butn-bg bg-white radius-5 skew portfolio-more${isNavigating ? ' is-loading' : ''}`}
                aria-busy={isNavigating}
                onClick={openProjects}
              >
                <span className="text-dark fw-600">
                  {isNavigating ? (
                    <><span className="portfolio-loader" aria-hidden="true" /> Loading Projects...</>
                  ) : (
                    <>View More {portfolioTabs.find((tab) => tab.id === active)?.label} Projects</>
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
