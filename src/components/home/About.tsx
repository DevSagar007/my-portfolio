import { profile } from '@/data/site';

export default function About() {
  return (
    <div className="about section-padding" data-scroll-index="0">
      <div className="cont">
        <h1>
          Hello, I&rsquo;m <span className="main-color">Md Sagor Hossen</span>
          <span className="bord">
            Frontend-Focused Full-Stack Developer <i></i>
          </span>
        </h1>
      </div>
      <div className="stauts mt-80">
        <div className="d-flex align-items-center">
          <div className="mr-40">
            <div className="d-flex align-items-center">
              <h2>4+</h2>
              <p>
                Years of <br /> Experience
              </p>
            </div>
          </div>
          <div className="mr-40">
            <div className="d-flex align-items-center">
              <h2>20+</h2>
              <p>
                Projects
                <br /> Completed
              </p>
            </div>
          </div>
          <div>
            <div className="butn-presv">
              <a
                href={profile.resume}
                download
                className="butn butn-md butn-bord radius-5 skew cv-download"
              >
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text mt-80">
        <h6 className="sub-title mb-15">About Me</h6>
        <p className="fz-18">
          I&apos;m <strong>Md Sagor Hossen</strong>, a Frontend-Focused Full-Stack Developer with 4+
          years of experience building responsive, scalable and user-focused web applications. My
          strongest expertise is in{' '}
          <strong>
            React.js, Next.js, TypeScript, Redux, TanStack Query and Tailwind CSS
          </strong>
          , and I also build backend systems with Node.js, Express.js, REST APIs, JWT authentication,
          MongoDB and PostgreSQL, from API integration to database operations, validation and
          deployment.
        </p>
      </div>
    </div>
  );
}
