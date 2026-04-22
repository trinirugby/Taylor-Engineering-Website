import Image from 'next/image';

const stats = [
  { number: '40+', label: 'Years in Operation' },
  { number: '9', label: 'Staff Surveyors' },
  { number: '3rd', label: 'Generation Leadership' },
  { number: '13', label: 'Team Members' },
];

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about__grid">
          {/* Text column */}
          <div className="about__text">
            <p className="eyebrow">About TEAL</p>
            <h2 className="section-title">Three Generations of Marine Expertise</h2>
            <div className="divider" />

            <p>
              Taylor Engineering Agencies Limited is a family-owned firm of marine surveyors
              operating since 1984. Founded by Liston Taylor, a Chief Engineer with two decades
              of experience in dockyards, TEAL has grown into the most diversified marine
              surveying and consultancy company in the Caribbean.
            </p>
            <p>
              Now in its third generation under the leadership of Managing Director Paul Taylor
              and Senior Surveyor &amp; Operations Manager Andrew Taylor — a UK MCA Master
              Mariner Unlimited — the firm continues to set the standard for professionalism,
              technical rigour, and client responsiveness across the region.
            </p>
            <p>
              Headquartered in Port of Spain, Trinidad and Tobago, TEAL is 100% locally owned
              and staffed by nationals of Trinidad and Tobago. Our clients include P&amp;I clubs,
              oil majors, container lines, underwriters, shipowners, and charterers who trust
              us to deliver accurate, timely, and independent survey reports.
            </p>

            <div style={{ marginTop: '2rem' }}>
              <a href="/contact" className="btn btn-outline-navy">
                Work With Us
              </a>
            </div>
          </div>

          {/* Image + stat cards column */}
          <div className="about__image-col">
            <Image
              src="/assets/about-ship.jpg"
              alt="Ship bow in drydock with anchor chains"
              width={600}
              height={750}
              className="about__photo"
            />
            <div className="about__stats-row">
              {stats.map((s) => (
                <div key={s.number} className="about__stat-card">
                  <div className="about__stat-card-number">{s.number}</div>
                  <div className="about__stat-card-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
