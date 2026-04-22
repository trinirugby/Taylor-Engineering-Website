import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Contact | Taylor Engineering Agencies Limited',
  description:
    'Request a marine survey or send an enquiry to Taylor Engineering Agencies Limited. Serving Trinidad, Guyana, and the Eastern Caribbean.',
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Get In Touch"
        title="Request a Survey or Send an Enquiry"
        lead="Our team responds promptly to all survey requests across the Caribbean region."
        backgroundImage="/assets/contact-ship.jpg"
        backgroundPosition="center 40%"
      />
      <Contact />
    </main>
  );
}
