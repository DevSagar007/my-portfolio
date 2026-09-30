import { skillStacks } from '@/data/resume';

/**
 * "Technical Skills & Expertise".
 *
 * One card per technology stack, laid out on a two-column grid where the
 * featured stack spans the full row. Styles live in `src/styles/skills.css`.
 */
export default function Skills() {
  return (
    <div className="skills section-padding pt-0" data-scroll-index="1">
      <div className="sec-head bord-thin-bottom pb-20 mb-40">
        <h4 className="sub-title fz-28">Technical Skills &amp; Expertise</h4>
      </div>
      <p className="skills-intro fz-16 mb-50">
        Building scalable, modern web applications using a powerful combination of frontend,
        backend, databases, and development tools.
      </p>
      <div className="stack-grid">
        {skillStacks.map((stack, index) => (
          <article className={`stack-card${stack.featured ? ' featured' : ''}`} key={stack.title}>
            <div className="stack-head">
              <span className="stack-icon">
                <i className={stack.icon} aria-hidden="true"></i>
              </span>
              <span className="stack-num num-font">{String(index + 1).padStart(2, '0')}</span>
            </div>
            <h6 className="stack-title">{stack.title}</h6>
            <p className="stack-desc">{stack.description}</p>
            <ul className="stack-techs">
              {stack.techs.map((tech) => (
                <li key={tech.name}>
                  <i className={tech.icon} aria-hidden="true"></i>
                  {tech.name}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
