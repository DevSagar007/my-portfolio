import { services } from '@/data/resume';
import { inlineList } from '@/utils/inline';

export default function Services() {
  return (
    <section className="services section-padding pt-40" data-scroll-index="2">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-head bord-thin-bottom pb-20 mb-80">
              <h4 className="sub-title fz-28">Services</h4>
            </div>
          </div>
        </div>
        <div className="row">
          {services.map((service) => (
            <div className="col-lg-3 col-md-6" key={service.title}>
              <div className={service.itemClass}>
                <h3 className="letr">{service.letter}</h3>
                <h6>{service.title}</h6>
                <p>{service.description}</p>
                <div className="tags">
                  {inlineList(
                    service.tags.map((tag) => (
                      <a href="#0" key={tag}>
                        {tag}
                      </a>
                    )),
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
