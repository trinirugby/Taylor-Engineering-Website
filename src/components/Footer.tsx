import Image from 'next/image';
import Link from 'next/link';
import footerLogo from '../../Taylor LOGO new.png';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Coverage', href: '/coverage' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          {/* Brand column */}
          <div>
            <Image
              src={footerLogo}
              alt="Taylor Engineering Agencies Limited"
              className="footer__logo"
            />
            <p className="footer__tagline">
              The Caribbean&apos;s most diversified marine surveying and consultancy firm.
              Serving the region since 1984.
            </p>
          </div>

          {/* Navigation column */}
          <div>
            <p className="footer__col-title">Navigation</p>
            <ul className="footer__links">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="footer__link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <p className="footer__col-title">Contact</p>
            <p className="footer__contact-line">+1 (868) 361-2289</p>
            <p className="footer__contact-line">+1 (868) 361-2284</p>
            <p className="footer__contact-line">+1 (868) 293-9779</p>
            <p className="footer__contact-line">mail@tayeng.com</p>
            <p className="footer__contact-line">
              Port of Spain,<br />Trinidad and Tobago
            </p>
            <div style={{ marginTop: '1rem' }}>
              <Link href="/contact" className="btn btn-outline-white" style={{ fontSize: '0.8125rem', padding: '0.5rem 1rem' }}>
                Send Enquiry
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; 2026 Taylor Engineering Agencies Limited. All rights reserved.
          </p>
          <div className="footer__legal-links">
            <a href="#" className="footer__legal-link">Privacy Policy</a>
            <a href="#" className="footer__legal-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
