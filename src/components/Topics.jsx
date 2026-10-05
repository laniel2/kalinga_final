import { useState } from "react";
import Arrow from "./Arrow.jsx";
import { topics } from "../data/content.js";

// Topics 01-05 sit together in one block. Hover, focus or tap a panel to open it.
export default function Topics() {
  const [active, setActive] = useState(0);

  return (
    <section id="topics" className="topics">
      <header className="topics__head" data-reveal>
        <p className="topics__eyebrow">
          <span>Explore</span>
          <i aria-hidden="true" />
        </p>
        <h2>
          Explore <em>Kalinga</em>
        </h2>
        <p className="topics__sub">Five ways into the history, culture, language and living community of the Kalinga people.</p>
      </header>

      <div className="topics__row" data-reveal>
        {topics.map((t, i) => (
          <article
            key={t.id}
            id={t.id}
            className={`topic ${active === i ? "is-active" : ""} ${t.bw ? "is-bw" : ""}`}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            tabIndex={0}
          >
            <div className="topic__image" style={{ "--img": `url("${t.image}")` }} />
            <div className="topic__body">
              <span className="topic__number">
                {t.number}
                <i aria-hidden="true" />
              </span>
              <div className="topic__content">
                <h3 className="topic__title">{t.title}</h3>
                <div className="topic__more">
                  <p>{t.text}</p>
                  <a className="btn" href={t.href || `#${t.id}`}>
                    {t.cta} <Arrow />
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
