import Image from 'next/image';

const regions = [
  {
    name: 'Trinidad & Tobago',
    desc: 'Headquarters & primary operating base',
    isHQ: true,
  },
  {
    name: 'Guyana',
    desc: 'FPSO operations & offshore oil sector',
    isHQ: false,
  },
  {
    name: 'Suriname',
    desc: 'Active southern Caribbean coverage',
    isHQ: false,
  },
  {
    name: 'Barbados',
    desc: 'Eastern Caribbean port coverage',
    isHQ: false,
  },
  {
    name: 'St. Maarten',
    desc: 'Northernmost point of active coverage',
    isHQ: false,
  },
  {
    name: 'Eastern Caribbean',
    desc: 'Full regional reach on request',
    isHQ: false,
  },
];

export default function Coverage() {
  return (
    <section id="coverage" className="coverage section">
      <div className="container">
        <div className="coverage__grid">
          {/* Left column */}
          <div>
            <p className="eyebrow">Where We Operate</p>
            <h2 className="section-title">Caribbean-Wide Reach</h2>
            <div className="divider" />
            <p className="section-lead" style={{ marginBottom: '2rem' }}>
              Based in Port of Spain, Trinidad and Tobago, our survey teams operate across
              the Eastern Caribbean — from Suriname and Guyana in the south to St. Maarten
              in the north.
            </p>

            <div className="callout">
              <div className="callout__title">Offshore & FPSO Coverage</div>
              <div className="callout__text">
                TEAL supports Trinidad oil majors and the growing Guyana FPSO sector,
                providing specialist offshore vessel and cargo surveys.
              </div>
            </div>

            <div className="callout callout--blue">
              <div className="callout__title">Rapid Response</div>
              <div className="callout__text">
                Our T&T-based team is available around the clock for emergency callouts
                across the region, with established contacts throughout the Eastern Caribbean.
              </div>
            </div>

            {/* Aerial photo accent */}
            <Image
              src="/assets/coverage-aerial.jpg"
              alt="Aerial view of container ship at sea"
              width={560}
              height={280}
              style={{
                width: '100%',
                height: '220px',
                objectFit: 'cover',
                borderRadius: 'var(--radius)',
                marginTop: '1.5rem',
                border: '1px solid var(--border)',
                display: 'block',
              }}
            />
          </div>

          {/* Right column — region list */}
          <div className="coverage__regions">
            {regions.map((r) => (
              <div key={r.name} className="coverage__region">
                <div
                  className={`coverage__region-dot${r.isHQ ? ' coverage__region-dot--hq' : ''}`}
                />
                <div>
                  <div className="coverage__region-name">{r.name}</div>
                  <div className="coverage__region-desc">{r.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
