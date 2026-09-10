'use client';

import { useEffect, useRef } from 'react';

/**
 * The custom cursor dot. Replaces the imperative block in
 * assets/js/scripts.js: the dot follows the pointer and grows (`cursor-active`)
 * while hovering a link or any `.cursor-pointer` element.
 */
export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = ref.current;
    if (!dot) return;

    const move = (event: MouseEvent) => {
      dot.style.left = `${event.clientX}px`;
      dot.style.top = `${event.clientY}px`;
    };

    const isTarget = (node: EventTarget | null) =>
      node instanceof Element && Boolean(node.closest('a, .cursor-pointer'));

    const over = (event: MouseEvent) => {
      if (isTarget(event.target)) dot.classList.add('cursor-active');
    };

    const out = (event: MouseEvent) => {
      if (isTarget(event.target) && !isTarget(event.relatedTarget)) {
        dot.classList.remove('cursor-active');
      }
    };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseout', out);
    };
  }, []);

  return <div className="cursor" ref={ref}></div>;
}
