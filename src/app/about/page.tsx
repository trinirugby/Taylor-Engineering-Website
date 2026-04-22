import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import About from '@/components/About';
import Team from '@/components/Team';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'About Us | Taylor Engineering Agencies Limited',
  description:
    'Family-owned marine surveying firm founded in 1984 by Liston Taylor. Now in its third generation under Paul and Andrew Taylor, serving the Caribbean for 40+ years.',
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Story"
        title="A Family Legacy Built on the Sea"
        lead="Third-generation marine surveyors, headquartered in Port of Spain, Trinidad — operating since 1984."
        backgroundImage="/assets/about-ship.jpg"
        backgroundPosition="center top"
      />
      <About />
      <Team />
      <ContactCTA
        heading="Work with the Caribbean's most experienced survey team."
        sub="9 qualified surveyors, ready to mobilise across the region."
      />
    </main>
  );
}
