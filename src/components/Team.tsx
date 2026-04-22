const team = [
  {
    initials: 'PT',
    name: 'Paul Taylor',
    role: 'Principal Surveyor & Managing Director',
    bio: 'Paul leads Taylor Engineering Agencies Limited with deep expertise in marine surveying and operations management across the Caribbean region. He continues the firm\'s tradition of hands-on, client-focused service.',
  },
  {
    initials: 'AT',
    name: 'Andrew Taylor',
    role: 'Senior Surveyor & Operations Manager',
    bio: 'Third-generation member of the Taylor family and a UK MCA Master Mariner Unlimited. Andrew brings international maritime credentials and operational leadership to TEAL\'s expanding regional portfolio.',
  },
  {
    initials: 'ST',
    name: 'Survey Team',
    role: '9 Staff Surveyors · 4 Cargo Technicians',
    bio: 'Our experienced team of 13 is 100% composed of nationals of Trinidad and Tobago — highly trained specialists across hull & machinery, cargo operations, P&I surveys, and marine compliance.',
  },
];

export default function Team() {
  return (
    <section id="team" className="team-section section">
      <div className="container">
        <p className="eyebrow">Our People</p>
        <h2 className="section-title">Leadership &amp; Survey Team</h2>
        <div className="divider" />
        <p className="section-lead" style={{ marginBottom: '3rem' }}>
          Three generations of marine expertise, backed by a dedicated team of
          locally-trained survey professionals.
        </p>

        <div className="team__grid">
          {team.map((member) => (
            <div key={member.initials} className="team-card">
              <div className="team-card__avatar-wrap">
                <div className="team-card__avatar-circle">{member.initials}</div>
              </div>
              <div className="team-card__body">
                <h3 className="team-card__name">{member.name}</h3>
                <p className="team-card__role">{member.role}</p>
                <p className="team-card__bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
