'use client';

import { useEffect, useRef } from 'react';

import LongArrow from '@/components/icons/LongArrow';
import { testimonials } from '@/data/resume';
import { assetPath } from '@/utils/assetPath';
import { inlineList } from '@/utils/inline';

/**
 * The testimonials carousel.
 *
 * The static site initialised Swiper 5 from the `data-carousel="swiper"`
 * attributes in assets/js/scripts.js. The exact same Swiper version and options
 * are used here (spaceBetween 30, speed 1000, one slide until 1024px, two
 * above), just wired up from a React effect instead of a jQuery sweep.
 */
export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let instance: import('swiper').default | undefined;
    let cancelled = false;

    import('swiper').then(({ default: Swiper }) => {
      if (cancelled) return;

      instance = new Swiper(container, {
        spaceBetween: 30,
        speed: 1000,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.testim-controls .swiper-button-next',
          prevEl: '.testim-controls .swiper-button-prev',
        },
        breakpoints: {
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        },
      });
    });

    return () => {
      cancelled = true;
      instance?.destroy(true, true);
    };
  }, []);

  return (
    <section className="testim-crv" data-scroll-index="4">
      <div className="container">
        <div className="sec-head bord-thin-bottom pb-20 mb-80">
          <div className="row">
            <div className="col-md-6">
              <h4 className="sub-title fz-28">Testimonials</h4>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-items-end justify-end-sm">
                <div className="swiper-controls testim-controls arrow-out d-flex mr-20 ml-auto">
                  <div className="swiper-button-prev">
                    <span className="left">
                      <LongArrow size={20} />
                    </span>
                  </div>
                  <div className="swiper-button-next ml-50">
                    <span className="right">
                      <LongArrow size={20} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="testim-swiper" data-carousel="swiper" data-space="30" data-speed="1000">
              <div
                id="content-carousel-container-unq-testim"
                className="swiper-container"
                data-swiper="container"
                ref={containerRef}
              >
                <div className="swiper-wrapper">
                  {testimonials.map((testimonial, index) => (
                    <div className="swiper-slide" key={index}>
                      <div className="item">
                        <div className="cont mb-30">
                          <div className="d-flex align-items-center">
                            <div>
                              <div className="img">
                                <img src={testimonial.image} alt="" />
                              </div>
                            </div>
                            <div className="ml-30">
                              <div className="info">
                                <h6 className="main-color">{testimonial.name}</h6>
                                <span className="fz-13 mt-10 opacity-8">{testimonial.role}</span>
                              </div>
                            </div>
                          </div>
                          <p className="fw-200 fz-18 mt-40">{testimonial.text}</p>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="rate-stars fz-12">
                            <span className="rate main-color">
                              {inlineList(
                                Array.from({ length: testimonial.stars }).map((_, star) => (
                                  <i className="fas fa-star" key={star}></i>
                                )),
                              )}
                            </span>{' '}
                            <span className="fz-12 opacity-7 ml-10">{testimonial.reviews}</span>
                          </div>
                          <div className="ml-auto">
                            <div className="icon-img-40">
                              <img src={assetPath('/assets/imgs/svg-assets/quote.png')} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-color"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

