import Link from 'next/link';

const featured = [
  {
    number: '01',
    title: 'Marine Assurance & Compliance',
    items: [
      'Vessel assurance audits (Flag, Class, SOLAS, MARPOL)',
      'ISM compliance reviews & OVID/CMID inspections',
      'DP assurance surveys & navigation equipment',
    ],
  },
  {
    number: '04',
    title: 'P&I & Cargo Surveys',
    items: [
      'Cargo damage investigations',
      'Draft surveys & on/off-hire surveys',
      'DRI/HBI/Fines specialist loading (15+ years)',
    ],
  },
  {
    number: '06',
    title: 'Marine Consultancy & Claims',
    items: [
      'Accident & incident investigation, root cause analysis',
      'Claims handling (cargo, delay, pollution, injury)',
      'Environmental & MARPOL compliance',
    ],
  },
];

export default function ServicesPreview() {
  return (
    <section className="services-preview section section--navy">
      <div className="container">
        <p className="eyebrow">What We Do</p>
        <h2 className="section-title section-title--light">
          Specialist Marine Survey &amp; Consultancy
        </h2>
        <p className="section-lead section-lead--light" style={{ marginBottom: '3rem' }}>
          From P&amp;I surveys to full vessel compliance audits — TEAL covers every
          dimension of marine surveying in the Caribbean.
        </p>

        <div className="services__grid">
          {featured.map((s) => (
            <div key={s.number} className="service-card">
              <span className="service-card__number">{s.number}</span>
              <h3 className="service-card__title">{s.title}</h3>
              <ul className="service-card__list">
                {s.items.map((item) => (
                  <li key={item} className="service-card__item">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
          <Link href="/services" className="btn btn-gold">
            View All 6 Services
          </Link>
        </div>
      </div>
    </section>
  );
}
