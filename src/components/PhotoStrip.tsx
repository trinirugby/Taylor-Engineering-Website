const photos = [
  {
    src: '/assets/about-ship.jpg',
    alt: 'Vessel in drydock — hull inspection',
    caption: 'Hull & Drydock Surveys',
  },
  {
    src: '/assets/services-bg.jpg',
    alt: 'Offshore cargo loading operation at night',
    caption: 'Offshore Cargo Operations',
  },
  {
    src: '/assets/services-cargo.jpg',
    alt: 'Industrial cargo storage tanks',
    caption: 'Bulk & Liquid Cargo',
  },
  {
    src: '/assets/coverage-aerial.jpg',
    alt: 'Aerial view of container ship at sea',
    caption: 'Caribbean-Wide Coverage',
  },
];

export default function PhotoStrip() {
  return (
    <section className="photo-strip section">
      <div className="container">
        <p className="eyebrow">Operations in Focus</p>
        <h2 className="section-title">Marine Surveying Across the Caribbean</h2>
        <div className="divider" />
        <div className="photo-strip__grid">
          {photos.map((p) => (
            <div key={p.src} className="photo-strip__item">
              <img src={p.src} alt={p.alt} className="photo-strip__img" />
              <div className="photo-strip__caption">{p.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
