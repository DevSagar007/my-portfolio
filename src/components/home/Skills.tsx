'use client';

import { useEffect, useRef } from 'react';

import { skills } from '@/data/resume';

/**
 * "Technical Skills & Expertise".
 *
 * The static site filled the bars from a jQuery scroll handler: as soon as the
 * bottom of a bar entered the viewport its width was set to `data-value` and it
 * stayed there. The same rule is reproduced here with a scroll listener over
 * refs, so the timing and easing (the CSS transition on `.progres`) are
 * unchanged.
 */
export default function Skills() {
  const barsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const fill = () => {
      const bottomOfWindow = window.scrollY + window.innerHeight;
      barsRef.current.forEach((bar) => {
        if (!bar) return;
        const bottomOfObject = bar.getBoundingClientRect().top + window.scrollY + bar.offsetHeight;
        if (bottomOfWindow > bottomOfObject) {
          bar.style.width = bar.dataset.value ?? '';
        }
      });
    };

    fill();
    window.addEventListener('scroll', fill);
    return () => window.removeEventListener('scroll', fill);
  }, []);

  return (
    <div className="skills section-padding pt-0" data-scroll-index="1">
      <div className="sec-head bord-thin-bottom pb-20 mb-80">
        <h4 className="sub-title fz-28">Technical Skills &amp; Expertise</h4>
      </div>
      <div className="row">
        {skills.map((skill, index) => (
          <div className="col-md-6" key={skill.name}>
            <div className={skill.itemClass}>
              <div className="d-flex align-items-center mb-30">
                <div className="mr-30">
                  <div className="img icon-img-40">
                    <img src={skill.icon} alt="" />
                  </div>
                </div>
                <div>
                  <h6 className="fz-18">{skill.name}</h6>
                </div>
              </div>
              <div className="skill-progress">
                <span
                  className="progres"
                  data-value={skill.value}
                  ref={(element) => {
                    barsRef.current[index] = element;
                  }}
                ></span>
              </div>
              <span className="value">{skill.shown}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
