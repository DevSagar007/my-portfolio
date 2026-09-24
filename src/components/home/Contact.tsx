import ContactForm from '@/components/ContactForm';
import HoverLink from '@/components/home/HoverLink';
import { contactSocials } from '@/data/site';

export default function Contact() {
  return (
    <section className="contact section-padding bord-thin-top" data-scroll-index="6">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="sec-head md-mb80">
              <h6 className="dot-titl mb-15">Get In Touch</h6>
              <h2 className="fz-50">Let&apos;s build something great together!</h2>
              <p className="fz-15 mt-10">
                Have a role, project or idea in mind? I&rsquo;m open to new opportunities and would love to
                hear from you!
              </p>
              <div className="phone fz-30 fw-600 mt-30 underline">
                <a href="#0" className="main-color">
                  +8801645402045
                </a>
              </div>
              <ul className="rest social-text d-flex mt-60">
                {contactSocials.map((social) => (
                  <li className={social.className || undefined} key={social.label}>
                    <HoverLink href={social.href} label={social.label} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 valign">
            <div className="full-width">
              <ContactForm variant="contact" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
