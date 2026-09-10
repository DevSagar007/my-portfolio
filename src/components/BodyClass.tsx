'use client';

import { useEffect } from 'react';

interface BodyClassProps {
  /** The class the matching static page put on <body> ("main-home"/"main-bg"). */
  name: string;
}

/**
 * Applies the per-page <body> class the static pages carried. The App Router
 * owns a single <body>, so each page declares its own class here instead.
 */
export default function BodyClass({ name }: BodyClassProps) {
  useEffect(() => {
    document.body.classList.add(name);
    return () => document.body.classList.remove(name);
  }, [name]);

  return null;
}
