import BlogSection from '@/components/BlogSection';
import BodyClass from '@/components/BodyClass';
import About from '@/components/home/About';
import AuthorProfile from '@/components/home/AuthorProfile';
import Contact from '@/components/home/Contact';
import Resume from '@/components/home/Resume';
import Services from '@/components/home/Services';
import Skills from '@/components/home/Skills';
import Testimonials from '@/components/home/Testimonials';
import Portfolio from '@/components/portfolio/Portfolio';
import { latestNews } from '@/data/blogs';
import { education, experience } from '@/data/resume';

export default function HomePage() {
  return (
    <>
      <BodyClass name="main-home" />

      <main>
        <section className="box">
          <div className="container">
            <div className="row md-marg">
              <div className="col-lg-4">
                <AuthorProfile />
              </div>
              <div className="col-lg-7 offset-lg-1">
                <About />
                <Resume title="Working Experience" scrollIndex="1" items={experience} />
                <Resume title="Education & Certifications" scrollIndex="11" items={education} />
                <Skills />
              </div>
            </div>
          </div>
        </section>

        <Services />

        <Portfolio sectionClassName="portfolio section-padding pt-0" scrollIndex="3" />

        <Testimonials />

        <BlogSection
          sectionClassName="blog section-padding"
          scrollIndex="5"
          title="Latest News"
          posts={latestNews}
        />

        <Contact />
      </main>
    </>
  );
}
