'use client';

import Link from 'next/link';
import { useState } from 'react';

import ProjectCard from '@/components/portfolio/ProjectCard';
import { getProjectsForTab, portfolioTabs } from '@/data/projects';
import type { PortfolioTabId } from '@/types/project';

interface PortfolioProps {
  /** Section classes, which differ slightly between the home and works pages. */
  sectionClassName: string;
  /** Only the home page's copy took part in the one-page scroll navigation. */
  scrollIndex?: string;
}

/**
 * The portfolio grid with its four filter tabs.
 *
 * The static pages relied on Bootstrap's tab JavaScript; here the same
 * Bootstrap classes (`active`, `show`, `fade`) are driven by React state, so
 * the markup, the fade transition and the ARIA wiring stay identical without
 * shipping Bootstrap's bundle.
 */
export default function Portfolio({ sectionClassName, scrollIndex }: PortfolioProps) {
  const [active, setActive] = useState<PortfolioTabId>('all');

  return (
    <section className={sectionClassName} data-scroll-index={scrollIndex}>
      <div className="container">
        <div className="sec-head bord-thin-bottom pb-20 mb-30 d-flex align-items-center justify-content-between">
          <h4 className="sub-title fz-28">Protfolio</h4>
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
                {getProjectsForTab(tab.slugs).map((project) => (
                  <ProjectCard project={project} tabId={tab.id} key={project.slug} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-xxl-12">
            <div className="butn-presv text-center mt-60">
              <Link href="/projects" className="butn butn-md butn-bg bg-white radius-5 skew">
                <span className="text-dark fw-600">See More Works</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
