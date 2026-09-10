'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import RollingText from '@/components/RollingText';
import { navItems, profile } from '@/data/site';
import { useScrollNav } from '@/hooks/useScrollNav';

const NAV_SCROLL_OFFSET = 300;

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { activeIndex, scrollToIndex } = useScrollNav(isHome);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > NAV_SCROLL_OFFSET);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg static${scrolled ? ' nav-scroll' : ''}`}>
      <div className="container">
        {/* Logo */}
        <Link className="logo icon-img-100" href="/">
          <img src={profile.logo} alt="logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        {/* navbar links */}
        <div
          className={`collapse navbar-collapse justify-content-center${open ? ' show' : ''}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            {navItems.map((item) => (
              <li className="nav-item" key={item.label}>
                {isHome ? (
                  <a
                    className={`nav-link${activeIndex === String(item.scrollNav) ? ' active' : ''}`}
                    href="#0"
                    data-scroll-nav={item.scrollNav}
                    onClick={(event) => {
                      // The static site left the collapsed menu open after a
                      // jump link, so this does not close it either.
                      event.preventDefault();
                      scrollToIndex(item.scrollNav);
                    }}
                  >
                    <RollingText text={item.label} />
                  </a>
                ) : (
                  <Link className="nav-link" href="/" onClick={() => setOpen(false)}>
                    <RollingText text={item.label} />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="md-hide">
          <div className="butn-presv">
            <a href="#0" className="butn butn-sm butn-bg bg-white radius-5 skew">
              <span className="text-dark">Lets Talk</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
