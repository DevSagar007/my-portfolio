import { profile } from '@/data/site';

export default function About() {
  return (
    <div className="about section-padding" data-scroll-index="0">
      <div className="cont">
        <h1>
          Hello, I&rsquo;m <span className="main-color">Md Sagor Hossen</span>
          <span className="bord">
            Front-end Developer <i></i>
          </span>
        </h1>
      </div>
      <div className="stauts mt-80">
        <div className="d-flex align-items-center">
          <div className="mr-40">
            <div className="d-flex align-items-center">
              <h2>4+</h2>
              <p>
                Years <br /> of Experance
              </p>
            </div>
          </div>
          <div className="mr-40">
            <div className="d-flex align-items-center">
              <h2>20+</h2>
              <p>
                Project
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
                <span>Download C.V</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text mt-80">
        <h6 className="sub-title mb-15">About Us</h6>
        <p className="fz-18">
          Hi, I&apos;m <strong>Md Sagor Hossen.</strong>, a passionate Frontend Developer. I
          specialize in building modern, responsive, and user-friendly web applications using{' '}
          <strong>
            HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, TypeScript, React.js, Next.js, Redux,
            TanStack Query, REST APIs, Firebase and MongoDB
          </strong>
          . I enjoy creating clean UI/UX, writing maintainable code, and continuously learning new
          technologies to build scalable and efficient web solutions.
        </p>
      </div>
    </div>
  );
}
