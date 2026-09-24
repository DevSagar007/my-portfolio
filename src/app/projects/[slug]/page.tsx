import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import BodyClass from '@/components/BodyClass';
import ListArrow from '@/components/icons/ListArrow';
import { getProjectBySlug, projects } from '@/data/projects';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} | Md Sagor Hossen`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Md Sagor Hossen`,
      description: project.description,
      images: [project.image],
    },
  };
}

/** Hostname shown in the "Website :" row of the sidebar. */
const hostOf = (href: string) => {
  try {
    return new URL(href).hostname.replace(/^www\./, '');
  } catch {
    return href;
  }
};

export default async function ProjectDetailsPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === project.slug);
  const prev = index > 0 ? projects[index - 1] : undefined;
  const next = index < projects.length - 1 ? projects[index + 1] : undefined;
  const role = project.infoCard?.rows.find((row) => row.label === 'Role:')?.value;

  return (
    <>
      <BodyClass name="main-bg" />

      <main>
        <section className="project section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-11">
                <div className="img mb-80">
                  <a target="_blank" href={project.href}>
                    <img src={project.image} alt={project.imageAlt} className="radius-5" />
                  </a>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-7">
                    <div className="cont md-mb50">
                      <h3 className="mb-15 fw-500">{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="mt-30">
                        <h6 className="mb-15 line-height-28">{project.subtitle}</h6>
                        <ul className="rest list-arrow mt-50">
                          {project.technologies.map((tech, techIndex) => (
                            <li className={techIndex === 0 ? undefined : 'mt-20'} key={tech}>
                              <span className="icon">
                                <ListArrow />
                              </span>
                              <h6 className="inline fz-18">{tech}</h6>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    {/* Pinned with the "sticky-kit" plugin on the static
                        page; native CSS stickiness replaces it here. */}
                    <div className="info tw:sticky tw:top-0" id="sticky_item">
                      <ul>
                        <li className="mb-30">
                          <span className="sub-title">
                            <i className="fas fa-list-ul mr-10"></i> Categories :
                          </span>
                          <p>{project.subtitle}</p>
                        </li>
                        {role ? (
                          <li className="mb-30">
                            <span className="sub-title">
                              <i className="far fa-user mr-10"></i> Role :
                            </span>
                            <p>{role}</p>
                          </li>
                        ) : null}
                        <li className="mb-30">
                          <span className="sub-title">
                            <i className="fas fa-code mr-10"></i> Stack :
                          </span>
                          <p>{project.technologies.join(', ')}</p>
                        </li>
                        <li>
                          <span className="sub-title">
                            <i className="fas fa-globe mr-10"></i> Website :
                          </span>
                          <p>
                            <a target="_blank" href={project.href}>
                              {hostOf(project.href)}
                            </a>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="next-prev">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-11">
                  <div className="d-flex align-items-center mt-80 pt-80 bord-thin-top">
                    <div className="prev">
                      <h6 className="sub-title">
                        {prev ? (
                          <Link href={`/projects/${prev.slug}`}>
                            <i className="fas fa-long-arrow-alt-left"></i> Prev Project
                          </Link>
                        ) : (
                          <Link href="/projects">
                            <i className="fas fa-long-arrow-alt-left"></i> All Projects
                          </Link>
                        )}
                      </h6>
                    </div>
                    <div className="next ml-auto">
                      <h6 className="sub-title">
                        {next ? (
                          <Link href={`/projects/${next.slug}`}>
                            Next Project <i className="fas fa-long-arrow-alt-right"></i>
                          </Link>
                        ) : (
                          <Link href="/projects">
                            All Projects <i className="fas fa-long-arrow-alt-right"></i>
                          </Link>
                        )}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
