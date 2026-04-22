const services = [
  {
    number: '01',
    title: 'Marine Assurance & Compliance',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
    items: [
      'Vessel assurance audits (Flag, Class, SOLAS, MARPOL, ISM, ISPS)',
      'ISM compliance reviews',
      'OVID / CMID inspections',
      'DP assurance surveys',
      'Navigation equipment surveys',
      'Hull and structural surveys',
      'Accident & incident investigation',
    ],
  },
  {
    number: '02',
    title: 'Cargo Operations & Loadout Oversight',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600',
    items: [
      'Fuel (MGO/IFO) loadouts & ROB surveys',
      'Dry bulk (cement, barite) loadouts',
      'Liquid bulk & brine (CaCl₂, NaBr) loadouts',
      'Specialty liquids — methanol, DMO',
      'Chain-of-custody, calibrated equipment, signed reports',
    ],
  },
  {
    number: '03',
    title: 'Hull & Machinery Surveys',
    image: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=600',
    items: [
      'Hull plating, decks, internal structures',
      'Ultrasonic thickness measurement',
      'Hatch weathertight testing (ultrasonic)',
      'Structural damage with photographic reports',
    ],
  },
  {
    number: '04',
    title: 'P&I & Cargo Surveys',
    image: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=600',
    items: [
      'Cargo damage investigations',
      'Draft surveys (bill of lading verification)',
      'On/off-hire surveys',
      'Quantity & quality dispute resolution',
      'DRI/HBI/Fines specialist loading (15+ years expertise)',
    ],
  },
  {
    number: '05',
    title: 'Tank Cleaning & Inspection',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600',
    items: [
      'Tank cleaning oversight (timeline matrix)',
      'Post-cleaning certification',
      'Borescope inspection of cargo lines, manifolds, crossovers',
      'Waste quantification and documentation',
    ],
  },
  {
    number: '06',
    title: 'Marine Consultancy & Claims',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600',
    items: [
      'Accident & incident investigation, root cause analysis',
      'Claims handling & settlement (cargo, delay, pollution, personal injury)',
      'Crew medical emergencies & complex repatriation',
      'Environmental & MARPOL compliance',
      'Ballast water management surveys',
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="services section"
      style={{ backgroundImage: "url('/assets/services-bg.jpg')" }}
    >
      <div className="services__overlay" aria-hidden="true" />

      <div className="container">
        <p className="eyebrow">What We Do</p>
        <h2 className="section-title section-title--light">
          Full-Spectrum Marine Survey &amp; Consultancy Services
        </h2>
        <p className="section-lead section-lead--light" style={{ marginBottom: '3rem' }}>
          From vessel compliance audits to complex cargo claims — TEAL provides the
          Caribbean&apos;s broadest range of specialist marine surveying disciplines.
        </p>

        <div className="services__grid">
          {services.map((s) => (
            <div key={s.number} className="service-card">
              <div className="service-card__image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.image} alt={s.title} />
                <div className="service-card__image-overlay" aria-hidden="true" />
              </div>
              <div className="service-card__content">
                <span className="service-card__number">{s.number}</span>
                <h3 className="service-card__title">{s.title}</h3>
                <ul className="service-card__list">
                  {s.items.map((item) => (
                    <li key={item} className="service-card__item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
