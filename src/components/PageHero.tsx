interface PageHeroProps {
  eyebrow: string;
  title: string;
  lead?: string;
  backgroundImage: string;
  backgroundPosition?: string;
}

export default function PageHero({
  eyebrow,
  title,
  lead,
  backgroundImage,
  backgroundPosition = 'center',
}: PageHeroProps) {
  return (
    <section
      className="page-hero"
      style={{ backgroundImage: `url('${backgroundImage}')`, backgroundPosition }}
    >
      <div className="page-hero__overlay" aria-hidden="true" />
      <div className="container">
        <div className="page-hero__content">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="page-hero__title">{title}</h1>
          {lead && <p className="hero__lead">{lead}</p>}
        </div>
      </div>
    </section>
  );
}
