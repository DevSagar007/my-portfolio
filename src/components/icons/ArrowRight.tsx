/**
 * The 34x32 "arrow-right" line icon used by resume rows and project cards.
 *
 * The stroke width stays an inline style, exactly as the static markup had it -
 * nothing in the theme stylesheet targets `.arrow-right`, so there is no
 * cascade to win and no need for a utility class here.
 */
export default function ArrowRight() {
  return (
    <svg
      className="arrow-right"
      style={{ strokeWidth: 2 }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 34.2 32.3"
    >
      <line x1="0" y1="16" x2="33" y2="16"></line>
      <line x1="17.3" y1="0.7" x2="33.2" y2="16.5"></line>
      <line x1="17.3" y1="31.6" x2="33.5" y2="15.4"></line>
    </svg>
  );
}
