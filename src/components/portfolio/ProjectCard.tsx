import ArrowRight from '@/components/icons/ArrowRight';
import CopyButton from '@/components/portfolio/CopyButton';
import type { PortfolioTabId, Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
  /** Tab the card is rendered in, used to pick up any per-tab variant. */
  tabId?: PortfolioTabId;
}

/** One card of the portfolio grid, matching the original `.col-lg-6` block. */
export default function ProjectCard({ project, tabId }: ProjectCardProps) {
  const infoCard = (tabId && project.infoCardByTab?.[tabId]) || project.infoCard;

  return (
    <div className="col-lg-6">
      <div className="item mt-50">
        <div className="img">
          <a target="_blank" href={project.href}>
            <img src={project.image} alt={project.imageAlt} className="radius-5" />
          </a>
        </div>

        <div className="cont mt-30">
          <div className="d-flex align-items-center mb-15">
            <div>
              <h6 className={project.titleClass}>
                <a target="_blank" href={project.href}>
                  {project.title}
                </a>
              </h6>
              <span className="sub-title fz-13 main-color mt-5">{project.subtitle}</span>
            </div>
            <div className="ml-auto">
              <div className="arrow">
                <a target="_blank" href={project.href}>
                  <ArrowRight />
                </a>
              </div>
            </div>
          </div>

          <p className="fz-14 opacity-8 mb-20">{project.description}</p>

          <div className="meta-tags mb-20 d-flex flex-wrap">
            {project.technologies.map((tech) => (
              <span className="tech-badge" key={tech}>
                {tech}
              </span>
            ))}
          </div>

          {infoCard ? (
            <div className="project-info-card">
              {infoCard.rows.map((row) => (
                <div className="info-row" key={row.label}>
                  <span className="info-label">{row.label}</span>
                  <span className="info-value">{row.value}</span>
                </div>
              ))}

              <div className="info-divider"></div>

              <div className={infoCard.linkRowClass}>
                {infoCard.links.map((link) => (
                  <div className={link.colClass} key={link.href}>
                    <a target="_blank" href={link.href} className="info-link-btn">
                      <i className={link.icon}></i>
                      {` ${link.label}`}
                    </a>
                  </div>
                ))}
              </div>

              {infoCard.credentials ? (
                <div className="credentials-section">
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
          ) : null}
        </div>
      </div>
    </div>
  );
}
