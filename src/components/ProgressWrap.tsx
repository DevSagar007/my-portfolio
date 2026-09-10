'use client';

import { useEffect, useRef } from 'react';

const SCROLL_UP_DURATION = 550;
const ACTIVE_OFFSET = 150;

/**
 * The circular "back to top" button. Replaces the jQuery block at the bottom of
 * assets/js/scripts.js - the stroke of the ring tracks scroll progress, the
 * button fades in past 150px and animates back to the top on click.
 */
export default function ProgressWrap() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const path = pathRef.current;
    if (!wrap || !path) return;

    const length = path.getTotalLength();
    path.style.transition = 'none';
    path.style.strokeDasharray = `${length} ${length}`;
    path.style.strokeDashoffset = `${length}`;
    path.getBoundingClientRect();
    path.style.transition = 'stroke-dashoffset 10ms linear';

    const update = () => {
      const scroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = length - (scroll * length) / height;
      path.style.strokeDashoffset = `${progress}`;
      wrap.classList.toggle('active-progress', scroll > ACTIVE_OFFSET);
    };

    update();
    window.addEventListener('scroll', update);
    return () => window.removeEventListener('scroll', update);
  }, []);

  const scrollToTop = () => {
    const start = window.scrollY;
    const startedAt = performance.now();

    // jQuery's default "swing" easing, so the ride back up feels identical.
    const step = (now: number) => {
      const progress = Math.min((now - startedAt) / SCROLL_UP_DURATION, 1);
      const eased = 0.5 - Math.cos(progress * Math.PI) / 2;
      window.scrollTo(0, start * (1 - eased));
      if (progress < 1) window.requestAnimationFrame(step);
    };

    window.requestAnimationFrame(step);
  };

  return (
    <div className="progress-wrap cursor-pointer" ref={wrapRef} onClick={scrollToTop}>
      <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path ref={pathRef} d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>
  );
}
