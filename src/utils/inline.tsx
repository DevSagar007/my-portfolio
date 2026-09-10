import { Fragment, type ReactNode } from 'react';

/**
 * Joins a list of inline elements with a single space.
 *
 * The static markup put each of these elements on its own line, and in an
 * inline formatting context that collapsed newline is a real space - roughly
 * 3-4px of spacing between social icons, tag pills and rating stars. Rendering
 * a mapped array in JSX produces no whitespace at all, so it has to be put back
 * explicitly or the elements sit noticeably closer together.
 */
export function inlineList(items: ReactNode[]): ReactNode[] {
  return items.map((item, index) => (
    <Fragment key={index}>
      {index > 0 ? ' ' : null}
      {item}
    </Fragment>
  ));
}
