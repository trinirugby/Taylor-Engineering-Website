'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Coverage', href: '/coverage' },
  { label: 'Contact', href: '/contact' },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__inner">
          {/* Desktop links */}
          <ul className="nav__links">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`nav__link${pathname === l.href ? ' nav__link--active' : ''}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className="nav__hamburger"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`nav__mobile${menuOpen ? ' is-open' : ''}`}>
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`nav__link${pathname === l.href ? ' nav__link--active' : ''}`}
            onClick={handleLinkClick}
          >
            {l.label}
          </Link>
        ))}
        <Link href="/contact" className="btn btn-gold" onClick={handleLinkClick}>
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
