import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Services from '@/components/Services';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Services | Taylor Engineering Agencies Limited',
  description:
    'Marine assurance, cargo surveys, P&I inspections, hull & machinery, tank cleaning, and marine consultancy — the Caribbean\'s broadest range of marine surveying services.',
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="What We Do"
        title="Full-Spectrum Marine Surveying & Consultancy"
        lead="Six specialist service disciplines covering every aspect of marine survey operations across the Caribbean."
        backgroundImage="/assets/services-bg.jpg"
        backgroundPosition="center 40%"
      />
      <Services />

      <ContactCTA
        heading="Need a survey arranged quickly?"
        sub="Our team responds fast — across Trinidad, Guyana, and the Eastern Caribbean."
      />
    </main>
  );
}
