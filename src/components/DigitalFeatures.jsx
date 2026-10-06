import { digitalFeatures } from "../data/content.js";

export default function DigitalFeatures() {
  return (
    <section id="digital-features" className="digital-features" data-reveal>
      <div className="digital-features__head">
        <p className="topics__eyebrow">
          <span>Digital Features</span>
          <i aria-hidden="true" />
        </p>
        <h2>
          Built for <em>digital heritage</em>
        </h2>
      </div>

      <div className="digital-features__grid">
        {digitalFeatures.map((feature) => (
          <article key={feature.title} className="feature-card">
            <span className="feature-card__icon" aria-hidden="true">
              {feature.icon}
            </span>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
