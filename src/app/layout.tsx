import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import '../styles/global.css';

export const metadata: Metadata = {
  title: 'Taylor Engineering Agencies Limited | Marine Surveying & Consultancy',
  description:
    'Family-owned marine surveying and consultancy firm operating since 1984. The most diversified marine surveying company in the Caribbean — serving P&I clubs, oil majors, container lines and shipowners from Trinidad & Tobago.',
  keywords: [
    'marine surveying',
    'Trinidad',
    'Caribbean',
    'P&I surveys',
    'hull and machinery',
    'cargo surveys',
    'marine consultancy',
    'TEAL',
    'Taylor Engineering',
  ],
  openGraph: {
    title: 'Taylor Engineering Agencies Limited',
    description: 'The most diversified marine surveying firm in the Caribbean. Operating since 1984.',
    url: 'https://tayeng.com',
    siteName: 'Taylor Engineering Agencies Limited',
    locale: 'en_TT',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
