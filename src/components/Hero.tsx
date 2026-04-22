'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import heroLogo from '../../Taylor LOGO new.png';

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    if (prefersReduced || isMobile) return;

    const handleScroll = () => {
      if (!bgRef.current) return;
      const scrolled = window.scrollY;
      bgRef.current.style.transform = `translateY(${scrolled * 0.4}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="hero">
      <div ref={bgRef} className="hero__bg" aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />

      {/* Main content */}
      <div className="container">
        <div className="hero__content">
          <h1 className="hero__wordmark">
            <Image
              src={heroLogo}
              alt="Taylor Engineering Agencies Limited"
              priority
              className="hero__wordmark-image"
            />
          </h1>

          <div className="hero__rule" aria-hidden="true" />

          <p className="hero__lead">
            The Caribbean&apos;s most diversified marine surveying firm delivering
            expert cargo inspection, hull &amp; machinery surveys, and P&amp;I
            consultancy across Trinidad, Guyana, and the Eastern Caribbean.
          </p>

          <div className="hero__ctas">
            <Link href="/services" className="btn btn-gold">
              Our Services
            </Link>
            <Link href="/contact" className="btn btn-outline-white">
              Request a Survey
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
