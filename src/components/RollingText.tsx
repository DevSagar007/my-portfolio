/** Non-breaking space, matching the "\xa0" the original script inserted for
 *  whitespace between letters. */
const NBSP = String.fromCharCode(160);

interface RollingTextProps {
  text: string;
  className?: string;
}

/**
 * The hover "rolling" label used by the navbar and the contact social links.
 * The static site built these letter spans imperatively at runtime
 * (assets/js/scripts.js); here the exact same DOM is rendered directly, so no
 * DOM manipulation is needed and the markup is identical on first paint.
 */
export default function RollingText({ text, className }: RollingTextProps) {
  const letters = Array.from(text).map((letter, index) => (
    <span className="letter" key={index}>
      {letter.trim() === '' ? NBSP : letter}
    </span>
  ));

  return (
    <span className={className ? `rolling-text ${className}` : 'rolling-text'}>
      <div className="block">{letters}</div>
      <div className="block">{letters}</div>
    </span>
  );
}
