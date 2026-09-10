'use client';

import { useEffect, useRef } from 'react';

const LOADING = ['L', 'o', 'a', 'd', 'i', 'n', 'g'];

const CURVE = 'M0 502S175 272 500 272s500 230 500 230V0H0Z';
const FLAT = 'M0 2S175 1 500 1s500 1 500 1V0H0Z';

/**
 * The page loader. Replaces the jQuery/GSAP block from assets/js/scripts.js:
 * the same GSAP timeline runs on mount, and the `loaded` class is put on
 * <body> for 1.5s so the page cannot be scrolled while the curtain lifts.
 */
export default function Preloader() {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    document.body.classList.add('loaded');
    const unlock = window.setTimeout(() => {
      document.body.classList.remove('loaded');
    }, 1500);

    let ctx: { revert: () => void } | undefined;
    let cancelled = false;

    import('gsap').then(({ gsap }) => {
      if (cancelled) return;
      ctx = gsap.context(() => {
        const tl = gsap.timeline();

        tl.to('.loader-wrap-heading .load-text , .loader-wrap-heading .cont', {
          delay: 1.5,
          y: -100,
          opacity: 0,
        });
        tl.to(pathRef.current, {
          duration: 0.5,
          attr: { d: CURVE },
          ease: 'power2.easeIn',
        }).to(pathRef.current, {
          duration: 0.5,
          attr: { d: FLAT },
          ease: 'power2.easeOut',
        });
        tl.to('.loader-wrap', { y: -1500 });
        tl.to('.loader-wrap', { zIndex: -1, display: 'none' });
      });
    });

    return () => {
      cancelled = true;
      window.clearTimeout(unlock);
      document.body.classList.remove('loaded');
      ctx?.revert();
    };
  }, []);

  return (
    <div className="loader-wrap">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path ref={pathRef} id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>

      <div className="loader-wrap-heading">
        <div className="load-text">
          {LOADING.map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
