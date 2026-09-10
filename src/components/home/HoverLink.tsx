'use client';

import { useRef } from 'react';

const MOVE = 25;

interface HoverLinkProps {
  href: string;
  label: string;
}

/**
 * A `.hover-this` link whose inner `.hover-anim` span drifts with the pointer.
 * Same maths as the parallax block in assets/js/scripts.js, scoped to the
 * element instead of a global querySelectorAll sweep.
 */
export default function HoverLink({ href, label }: HoverLinkProps) {
  const animRef = useRef<HTMLSpanElement>(null);

  const move = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const anim = animRef.current;
    if (!anim) return;

    const { offsetWidth: width, offsetHeight: height } = event.currentTarget;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const xMove = (x / width) * (MOVE * 2) - MOVE;
    const yMove = (y / height) * (MOVE * 2) - MOVE;

    anim.style.transform = `translate(${xMove}px, ${yMove}px)`;
  };

  const reset = () => {
    if (animRef.current) animRef.current.style.transform = '';
  };

  return (
    <a target="_blank" href={href} className="hover-this" onMouseMove={move} onMouseLeave={reset}>
      <span className="hover-anim" ref={animRef}>
        {label}
      </span>
    </a>
  );
}
