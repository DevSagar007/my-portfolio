import ArrowRight from '@/components/icons/ArrowRight';
import type { ResumeItem } from '@/types/resume';

interface ResumeProps {
  title: string;
  /** Value of the `data-scroll-index` attribute the static markup carried. */
  scrollIndex: string;
  items: ResumeItem[];
}

/** The "Working Experience" and "Education & Certifications" lists. */
export default function Resume({ title, scrollIndex, items }: ResumeProps) {
  return (
    <div className="resume section-padding pt-0" data-scroll-index={scrollIndex}>
      <div className="sec-head bord-thin-bottom pb-20 mb-80">
        <h4 className="sub-title fz-28">{title}</h4>
      </div>
      {items.map((item, index) => (
        <div
          className={`item d-flex align-items-center${item.last ? '' : ' mb-30'}`}
          key={`${item.title}-${index}`}
        >
          <div className={`date ${item.dateClass}`}>
            <p className="fz-13">{item.date}</p>
          </div>
          <div className="w-auto">
            <h6 className="mb-5">
              <a href={item.href}>{item.title}</a>
            </h6>
            <p>{item.subtitle}</p>
          </div>
          <div className="ml-auto">
            <div className="d-flex align-items-center">
              <div className="icon-img-40 mr-80"></div>
              <div className="arrow">
                <a href="#">
                  <ArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
