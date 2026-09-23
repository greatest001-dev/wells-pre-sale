import { siteData } from '../data/siteData';

export default function BonusTiers({ activeValue }) {
  const activeTier =
    activeValue >= 5
      ? 3
      : activeValue >= 3
        ? 2
        : activeValue >= 1
          ? 1
          : activeValue >= 0.5
            ? 0
            : null;

  return (
    <section className="tiers section-shell">
      <div className="container">
        <div className="section-head">
          <p className="section-tag">Tiered bonus structure</p>
          <h2>Rewarding early support.</h2>
        </div>

        <div className="tier-grid">
          {siteData.bonusTiers.map((tier, index) => (
            <article
              key={tier.range}
              className={`tier-card ${activeTier === index ? 'active' : ''}`}
            >
              <span className="tier-range">{tier.range}</span>
              <h3>{tier.label}</h3>
              <strong>{tier.special ? `${tier.bonus}% + ${tier.special}` : `${tier.bonus}%`}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
