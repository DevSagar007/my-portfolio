'use client';

import { useCallback, useEffect, useState } from 'react';

const SCROLL_TIME = 600;
const TOP_OFFSET = -80;

/** jQuery's "swing" easing, which the scrollIt plugin animated with. */
const swing = (progress: number) => 0.5 - Math.cos(progress * Math.PI) / 2;

const sections = () => Array.from(document.querySelectorAll('[data-scroll-index]'));
const documentTop = (element: Element) => element.getBoundingClientRect().top + window.scrollY;
const lastIndex = () => Number(sections().at(-1)?.getAttribute('data-scroll-index') ?? 0);

/**
 * React port of the `$.scrollIt` plugin the static site used for its one-page
 * navigation: clicking a nav item smooth-scrolls to the matching
 * `[data-scroll-index]` section, the arrow keys step between sections, and the
 * nav item for the section currently under the viewport top gets `active`.
 */
export function useScrollNav(enabled: boolean) {
  const [activeIndex, setActiveIndex] = useState<string | null>(null);

  const scrollToIndex = useCallback((index: number) => {
    if (index < 0 || index > lastIndex()) return;

    const target = document.querySelector(`[data-scroll-index="${index}"]`);
    if (!target) return;

    const from = window.scrollY;
    const to = documentTop(target) + TOP_OFFSET + 1;
    const startedAt = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - startedAt) / SCROLL_TIME, 1);
      window.scrollTo(0, from + (to - from) * swing(progress));
      if (progress < 1) window.requestAnimationFrame(step);
    };

    window.requestAnimationFrame(step);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const update = () => {
      const top = window.scrollY;
      const current = sections().find((section) => {
        const start = documentTop(section) + TOP_OFFSET;
        return top >= start && top < start + (section as HTMLElement).offsetHeight;
      });
      setActiveIndex(current?.getAttribute('data-scroll-index') ?? null);
    };

    update();
    window.addEventListener('scroll', update);
    return () => window.removeEventListener('scroll', update);
  }, [enabled]);

  // Re-bound whenever the active section changes, so the handler always steps
  // from the current one without having to mirror the state into a ref.
  useEffect(() => {
    if (!enabled) return;

    const onKeyDown = (event: KeyboardEvent) => {
      const current = Number(activeIndex ?? 0);

      if (event.key === 'ArrowUp' && current > 0) {
        scrollToIndex(current - 1);
        event.preventDefault();
      } else if (event.key === 'ArrowDown' && current < lastIndex()) {
        scrollToIndex(current + 1);
        event.preventDefault();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [enabled, activeIndex, scrollToIndex]);

  return { activeIndex, scrollToIndex };
}
