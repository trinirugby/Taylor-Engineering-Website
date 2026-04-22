const reasons = [
  {
    num: '01',
    title: '40 Years of Proven Experience',
    text: 'Founded in 1984, TEAL has operated continuously through every era of Caribbean maritime commerce — from traditional cargo trades to modern FPSO and offshore oil operations.',
  },
  {
    num: '02',
    title: 'Broadest Caribbean Reach',
    text: 'The only firm with active survey coverage from Suriname and Guyana in the south to St. Maarten in the north — a single-source solution for multi-port Caribbean operations.',
  },
  {
    num: '03',
    title: 'Specialist P&I Expertise',
    text: 'Over 15 years of specialist DRI/HBI/Fines loading experience. Our teams are trusted by leading P&I clubs, underwriters, and oil majors for complex claims and dispute resolution.',
  },
  {
    num: '04',
    title: '100% Local Ownership & Staffing',
    text: 'Entirely owned and staffed by nationals of Trinidad and Tobago. Our deep regional knowledge and local relationships translate directly into faster mobilisation and more accurate reports.',
  },
];

export default function WhyUs() {
  return (
    <section className="why section">
      <div className="container">
        <p className="eyebrow">Why TEAL</p>
        <h2 className="section-title">What Sets Us Apart</h2>

        <div className="why__grid">
          {reasons.map((r) => (
            <div key={r.num} className="why-card">
              <div className="why-card__num">{r.num}</div>
              <h3 className="why-card__title">{r.title}</h3>
              <p className="why-card__text">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
