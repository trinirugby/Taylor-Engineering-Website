import Link from 'next/link';

interface ContactCTAProps {
  heading?: string;
  sub?: string;
}

export default function ContactCTA({
  heading = 'Ready to request a survey?',
  sub = 'Our team is available to mobilise across Trinidad, Guyana, and the Eastern Caribbean.',
}: ContactCTAProps) {
  return (
    <section className="contact-cta">
      <div className="container">
        <div className="contact-cta__inner">
          <div>
            <p className="contact-cta__text">{heading}</p>
            <p className="contact-cta__sub">{sub}</p>
          </div>
          <Link href="/contact" className="btn btn-gold">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
