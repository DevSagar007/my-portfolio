'use client';

import { useEffect, useRef, useState } from 'react';

const ICON = 'far fa-copy';
const COPIED_ICON = 'fas fa-check text-success';
const RESET_AFTER = 1500;

interface CopyButtonProps {
  value: string;
}

/**
 * The credential copy button. Replaces the inline `copyText()` helper the
 * static pages defined: the icon swaps to a green check for 1.5s after a
 * successful copy.
 */
export default function CopyButton({ value }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = () => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        setCopied(true);
        window.clearTimeout(timer.current);
        timer.current = window.setTimeout(() => setCopied(false), RESET_AFTER);
      })
      .catch((error) => {
        console.error('Failed to copy: ', error);
      });
  };

  return (
    <button type="button" className="copy-btn" onClick={copy} aria-label={`Copy ${value}`}>
      <i className={copied ? COPIED_ICON : ICON}></i>
    </button>
  );
}
