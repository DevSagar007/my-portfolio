'use client';

import { useEffect, useId, useRef, useState } from 'react';

import ArrowRight from '@/components/icons/ArrowRight';
import CopyButton from '@/components/portfolio/CopyButton';
import TechBadge from '@/components/portfolio/TechBadge';
import type { PortfolioTabId, Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
  /** Tab the card is rendered in, used to pick up any per-tab variant. */
  tabId?: PortfolioTabId;
}

/** Badges shown on the card itself; the details dialog lists every one. */
const VISIBLE_BADGES = 4;

/**
 * One fixed-size card of the portfolio grid.
 *
 * Every card has the same structure - thumbnail, clamped title / subtitle /
 * description, one row of badges and a two-row action footer pinned to the
 * bottom - so cards line up at every breakpoint and in every tab. The longer
 * content (full description, role, every technology and the demo credentials)
 * lives in a modal dialog, so opening it never changes the grid's height.
 */
export default function ProjectCard({ project, tabId }: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  const infoCard = (tabId && project.infoCardByTab?.[tabId]) || project.infoCard;
  const links = infoCard?.links ?? [
    { colClass: '', href: project.href, icon: 'fas fa-external-link-alt', label: 'View Project' },
  ];
  const badges = project.technologies.slice(0, VISIBLE_BADGES);
  const hiddenBadges = project.technologies.slice(VISIBLE_BADGES);
  // Only work-in-progress projects get a ribbon; finished ones need no label.
  const inDevelopment = /development/i.test(project.status ?? '');

  useEffect(() => {
    const dialog = dialogRef.current;
    if (open && dialog && !dialog.open) dialog.showModal();
  }, [open]);

  const close = () => dialogRef.current?.close();

  return (
    <div className="col-xl-4 col-md-6 d-flex">
      <article className="item project-card">
        <a
          className="project-card__media"
          target="_blank"
          rel="noopener noreferrer"
          href={project.href}
          tabIndex={-1}
          aria-hidden="true"
        >
          <img src={project.image} alt={project.imageAlt} loading="lazy" />
        </a>
        {inDevelopment ? (
          <span className="project-status">
            <span className="project-status__dot" aria-hidden="true"></span>
            {project.status}
          </span>
        ) : null}

        <div className="cont project-card__body">
          <div className="project-card__head">
            <div className="project-card__heading">
              <h6 className="project-card__title">
                <a target="_blank" rel="noopener noreferrer" href={project.href}>
                  {project.title}
                </a>
              </h6>
              <span className="sub-title main-color project-card__subtitle" title={project.subtitle}>
                {project.subtitle}
              </span>
            </div>
            <div className="arrow">
              <a target="_blank" rel="noopener noreferrer" href={project.href} aria-label={`Open ${project.title}`}>
                <ArrowRight />
              </a>
            </div>
          </div>

          <p className="fz-14 opacity-8 project-card__desc">{project.description}</p>

          <div className="project-card__badges">
            {badges.map((tech, index) => (
              <TechBadge
                tech={tech}
                key={tech}
                className={index === VISIBLE_BADGES - 1 ? 'tech-badge--wide-only' : undefined}
              />
            ))}
            {hiddenBadges.length ? (
              <span className="tech-badge tech-badge--more tech-badge--wide-only" title={hiddenBadges.join(', ')}>
                +{hiddenBadges.length}
              </span>
            ) : null}
            {/* Very narrow screens drop the last visible badge into the count. */}
            {badges.length === VISIBLE_BADGES ? (
              <span
                className="tech-badge tech-badge--more tech-badge--narrow-only"
                title={project.technologies.slice(VISIBLE_BADGES - 1).join(', ')}
              >
                +{hiddenBadges.length + 1}
              </span>
            ) : null}
          </div>

          <div className="project-card__actions">
            <div className={`project-card__links${links.length > 1 ? ' is-split' : ''}`}>
              {links.map((link) => (
                <a target="_blank" rel="noopener noreferrer" href={link.href} className="info-link-btn" key={link.href}>
                  <i className={link.icon} aria-hidden="true"></i>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
            <button
              type="button"
              className="info-link-btn project-card__details-btn cursor-pointer"
              aria-haspopup="dialog"
              onClick={() => setOpen(true)}
            >
              <i className={infoCard?.credentials ? 'fas fa-lock' : 'fas fa-info-circle'} aria-hidden="true"></i>
              <span>{infoCard?.credentials ? 'Details & Demo Credentials' : 'Project Details'}</span>
            </button>
          </div>
        </div>
      </article>

      {open ? (
        <dialog
          ref={dialogRef}
          className="project-dialog"
          aria-labelledby={titleId}
          onClose={() => setOpen(false)}
          onClick={(event) => {
            // A click on the backdrop lands on the <dialog> element itself.
            if (event.target === event.currentTarget) close();
          }}
        >
          <div className="project-dialog__inner">
            <div className="project-dialog__head">
              <div>
                <h5 className="project-dialog__title" id={titleId}>
                  {project.title}
                </h5>
                <span className="sub-title main-color project-dialog__subtitle">{project.subtitle}</span>
              </div>
              <button type="button" className="project-dialog__close" onClick={close} aria-label="Close details">
                <i className="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>

            <p className="fz-14 opacity-8 mb-20">{project.description}</p>

            <div className="meta-tags mb-20 d-flex flex-wrap">
              {project.technologies.map((tech) => (
                <TechBadge tech={tech} key={tech} />
              ))}
            </div>

            <div className="project-info-card">
              {infoCard?.rows.map((row) => (
                <div className="info-row" key={row.label}>
                  <span className="info-label">{row.label}</span>
                  <span className="info-value">{row.value}</span>
                </div>
              ))}
              {infoCard ? <div className="info-divider"></div> : null}

              <div className={`project-card__links${links.length > 1 ? ' is-split' : ''}`}>
                {links.map((link) => (
                  <a target="_blank" rel="noopener noreferrer" href={link.href} className="info-link-btn" key={link.href}>
                    <i className={link.icon} aria-hidden="true"></i>
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>

              {infoCard?.credentials ? (
                <div className="credentials-section mt-15">
                  <div className="cred-header">
                    <i className="fas fa-lock mr-5"></i> Demo Credentials
                  </div>
                  <div className={infoCard.credentials.rowClass}>
                    {infoCard.credentials.accounts.map((account) => (
                      <div className={account.colClass} key={account.title}>
                        <div className="cred-box">
                          <div className="cred-box-title">{account.title}</div>
                          {account.items.map((item) => (
                            <div className="cred-item" key={item.label}>
                              <span>{item.label}</span>
                              <code>{item.value}</code>
                              <CopyButton value={item.value} />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </dialog>
      ) : null}
    </div>
  );
}
