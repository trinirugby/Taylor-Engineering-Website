import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Coverage from '@/components/Coverage';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Coverage | Taylor Engineering Agencies Limited',
  description:
    'TEAL operates across Trinidad & Tobago, Guyana, Suriname, Barbados, St. Maarten and the Eastern Caribbean. The region\'s widest marine survey coverage.',
};

export default function CoveragePage() {
  return (
    <main>
      <PageHero
        eyebrow="Where We Operate"
        title="Caribbean-Wide Survey Coverage"
        lead="From Suriname in the south to St. Maarten in the north — one firm, one call."
        backgroundImage="/assets/coverage-aerial2.jpg"
        backgroundPosition="center"
      />
      <Coverage />

      <ContactCTA
        heading="Operating in the Caribbean? We're already there."
        sub="Rapid mobilisation across all active regions — contact us to arrange coverage."
      />
    </main>
  );
}
