import Arrow from "./Arrow.jsx";
import Icon from "./Icons.jsx";
import { pageHero, profile, geography, demographics, closing } from "../data/community.js";
import "../styles/community.css";

// Number + short rule that opens each content section.
const Marker = ({ n }) => (
  <div className="c-marker" aria-hidden="true">
    <span>{n}</span>
    <i />
  </div>
);

const Tags = ({ items }) => <p className="c-tags">{items.join(" · ")}</p>;

export default function CommunityPage() {
  return (
    <>
      {/* Page hero */}
      <section className="c-hero" aria-labelledby="c-hero-title">
        <div className="c-hero__image" style={{ "--img": `url("${pageHero.image}")` }} />
        <div className="c-ornament c-ornament--corner" aria-hidden="true" />
        <div className="c-hero__content">
          <p className="c-hero__eyebrow">
            <span>01</span>
            <i />
            <span>{pageHero.eyebrow}</span>
          </p>
          <h1 id="c-hero-title" className="c-hero__title">
            {pageHero.title[0]}
            <br />
            <em>{pageHero.title[1]}</em>
          </h1>
          <p className="c-hero__lead">{pageHero.lead}</p>
          <p className="c-hero__text">{pageHero.text}</p>
        </div>
      </section>

      {/* 01 Profile and Identity */}
      <section id="profile" className="c-sec c-profile">
        <div className="c-ornament c-ornament--edge" aria-hidden="true" />
        <div className="c-sec__text">
          <Marker n="01" />
          <div className="c-sec__body">
            <h2>{profile.title}</h2>
            <Tags items={profile.tags} />
            <p>{profile.text}</p>
            <a className="btn c-btn" href="#profile">
              {profile.cta} <Arrow />
            </a>
          </div>
        </div>
        <ul className="c-tiles">
          {profile.tiles.map((t) => (
            <li key={t.label} className="c-tile" style={{ "--img": `url("${t.image}")`, "--pos": t.pos }}>
              <div className="c-tile__info">
                <span className="c-tile__label">
                  <Icon name={t.icon} size={18} /> {t.label}
                </span>
                <span className="c-tile__caption">{t.caption}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* 02 Geographic Location */}
      <section id="location" className="c-sec c-geo">
        <div className="c-ornament c-ornament--edge" aria-hidden="true" />
        <div className="c-sec__text">
          <Marker n="02" />
          <div className="c-sec__body">
            <h2>{geography.title}</h2>
            <Tags items={geography.tags} />
            {geography.text.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
            <a className="btn c-btn" href="#location">
              {geography.cta} <Arrow />
            </a>
          </div>
        </div>
        <div className="c-geo__image" style={{ "--img": `url("${geography.image}")` }} role="img" aria-label="Terraced river valley in the Kalinga highlands" />
      </section>

      {/* 03 Map — use the finalized Kalinga map artwork as the exact visual reference. */}
      <section id="map" className="c-map c-map--artboard" aria-labelledby="community-map-title">
        <h2 id="community-map-title" className="sr-only">Map — Kalinga in the Cordillera Region</h2>
        <img
          className="c-map__artwork"
          src="/images/kalinga-map-infographic.png"
          alt="Kalinga in the Cordillera Region map showing the province, Tabuk City, neighboring provinces, and location in the Philippines"
          loading="lazy"
          decoding="async"
        />
      </section>

      {/* 04 Demographic Information */}
      <section id="demographics" className="c-sec c-demo">
        <div className="c-ornament c-ornament--edge" aria-hidden="true" />
        <div className="c-sec__text">
          <Marker n="04" />
          <div className="c-sec__body">
            <h2>{demographics.title}</h2>
            <p className="c-tags">{demographics.tag}</p>
            <p>{demographics.text}</p>
            <ul className="c-stats">
              {demographics.stats.map((s) => (
                <li key={s.label}>
                  <Icon name={s.icon} size={28} />
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                  <small>{s.note}</small>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="c-demo__image" style={{ "--img": `url("${demographics.image}")` }} role="img" aria-label="Kalinga men in traditional dress with tattoos" />
      </section>
    </>
  );
}
