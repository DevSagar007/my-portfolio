'use client';

import { useSyncExternalStore } from 'react';

interface CurrentYearProps {
  /** Year rendered on the server, so hydration always matches. */
  initialYear: number;
}

/** Nothing to subscribe to - the year is read once per render pass. */
const subscribe = () => () => {};

/**
 * The footer year. The static site filled `#currentYear` from the browser
 * clock; the pre-rendered year is shown first and the browser's own clock takes
 * over after hydration, which keeps that behaviour on a statically exported
 * build that may outlive its build year - without a flash or a hydration
 * mismatch.
 */
export default function CurrentYear({ initialYear }: CurrentYearProps) {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => initialYear,
  );

  return <span id="currentYear">{year}</span>;
}
