import Icon from "./Icons.jsx";
import "../styles/history.css";

const timeline = [
  {
    period: "Before the modern province",
    title: "Independent communities of the Cordillera",
    text: "Kalinga communities developed strong kinship networks, local leadership, farming systems, and customary laws while living across the mountain and river valleys of northern Luzon. The Chico River basin became a central landscape for settlement, agriculture, travel, and community life.",
    image: "/images/1.jpg"
  },
  {
    period: "Spanish & American periods",
    title: "Resilience and cultural continuity",
    text: "The mountainous terrain helped Kalinga communities maintain a distinct identity despite outside attempts to extend colonial control. During the American period, schools, health services, and new forms of administration reached the area, while indigenous institutions such as the bodong continued to shape community relations.",
    image: "/images/2.jpg"
  },
  {
    period: "1960s–1980s",
    title: "A turning point for ancestral land",
    text: "The creation of Kalinga-Apayao in 1966 marked an important stage in the province's administrative history. Later, communities became widely known for their resistance to the Chico River Basin Development Project, defending ancestral lands, villages, and rice fields through collective action and traditional leadership.",
    image: "/images/3.png"
  },
  {
    period: "1995–present",
    title: "Kalinga as a province and living heritage",
    text: "Kalinga and Apayao became separate provinces in 1995. Today, Kalinga's heritage remains living rather than simply historical: peace-pact traditions, weaving, tattooing, music, farming knowledge, oral traditions, and local languages continue to connect generations.",
    image: "/images/4.jpg"
  }
];

const heritage = [
  {
    icon: "flame",
    title: "Bodong",
    label: "Peace-pact tradition",
    text: "The bodong is an indigenous peace-pact institution used to establish, renew, and strengthen peaceful relationships between communities. It remains one of the strongest symbols of Kalinga social organization and cooperation."
  },
  {
    icon: "mark",
    title: "Batok / Whatok",
    label: "Living body art",
    text: "Traditional Kalinga tattooing is a visible expression of identity, beauty, experience, and cultural memory. Its practice has become an important part of conversations about preserving indigenous knowledge."
  },
  {
    icon: "weave",
    title: "Weaving & crafts",
    label: "Material heritage",
    text: "Textiles, basketry, pottery, metalwork, and other crafts carry patterns, skills, and knowledge passed between generations. These practices connect everyday life with Kalinga identity."
  },
  {
    icon: "people",
    title: "Oral traditions",
    label: "Knowledge across generations",
    text: "Stories, songs, ceremonies, and community knowledge help transmit values, history, relationships, and practical knowledge. Oral traditions keep heritage active even as communities adapt to modern life."
  }
];

export default function HistoryPage() {
  return (
    <div className="history-page">
      <section className="h-hero">
        <div className="h-hero__image" />
        <div className="h-hero__overlay" />
        <div className="h-hero__content">
          <p className="h-eyebrow"><span>02</span><i /> HISTORY & HERITAGE</p>
          <h1>Roots that<br /><em>Remain.</em></h1>
          <p className="h-lead">A story of resilience, identity, memory, and living tradition.</p>
          <p className="h-copy">
            Explore how Kalinga communities carried their heritage through changing times — from ancestral
            institutions and customary practices to language, art, and the continuing protection of cultural identity.
          </p>
          <a className="btn h-btn" href="#history-story">Begin the story <span className="arrow">→</span></a>
        </div>
      </section>

      <section id="history-story" className="h-intro">
        <div className="h-side-label">THE STORY</div>
        <div className="h-intro__content">
          <p className="h-kicker">A HISTORY OF RESILIENCE</p>
          <h2>More than a place.<br /><em>A living inheritance.</em></h2>
          <p>
            Kalinga's history is closely tied to its ancestral lands, river valleys, kinship networks, and
            customary institutions. Rather than treating heritage as something frozen in the past, this page
            presents culture as something communities continue to practice, adapt, and pass on.
          </p>
        </div>
      </section>

      <section className="h-timeline" aria-labelledby="history-timeline-title">
        <div className="h-section-head">
          <p className="h-kicker">01 · HISTORICAL BACKGROUND</p>
          <h2 id="history-timeline-title">A timeline of <em>continuity</em></h2>
          <p>Key periods that help place Kalinga's present identity in historical context.</p>
        </div>
        <div className="h-timeline__list">
          {timeline.map((item, i) => (
            <article className="h-event" key={item.period}>
              <div className="h-event__number">{String(i + 1).padStart(2, "0")}</div>
              <div className="h-event__period">{item.period}</div>
              <div className="h-event__body">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className={`h-event__media ${i === 2 ? "is-cropped" : ""}`} aria-label={`${item.title} illustration`}>
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="h-heritage" aria-labelledby="heritage-title">
        <div className="h-heritage__image" />
        <div className="h-heritage__content">
          <p className="h-kicker">02 · CULTURAL HERITAGE</p>
          <h2 id="heritage-title">Traditions that<br /><em>still speak.</em></h2>
          <p className="h-heritage__lead">
            Heritage lives through practices, relationships, objects, stories, and skills — not only through monuments.
          </p>
          <div className="h-cards">
            {heritage.map((item) => (
              <article className="h-card" key={item.title}>
                <Icon name={item.icon} size={26} />
                <p>{item.label}</p>
                <h3>{item.title}</h3>
                <span>{item.text}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="h-language" aria-labelledby="language-heritage-title">
        <div className="h-language__art">
          <div className="h-language__glyph">A<br /><small>•</small><br />K</div>
          <span>LANGUAGE IS MEMORY</span>
        </div>
        <div className="h-language__body">
          <p className="h-kicker">03 · LANGUAGE & KNOWLEDGE</p>
          <h2 id="language-heritage-title">Discover the<br /><em>living knowledge.</em></h2>
          <p>
            Language carries memory. Explore the Kalinga language, its varieties, and the knowledge passed through
            words, stories, names, songs, and oral teaching.
          </p>
          <a className="btn h-btn h-language__button" href="#/language">Explore Language & Knowledge <span className="arrow">→</span></a>
        </div>
      </section>

      <section className="h-preserve">
        <div>
          <p className="h-kicker">04 · HERITAGE TODAY</p>
          <h2>Preserve the past.<br /><em>Carry it forward.</em></h2>
        </div>
        <p>
          Kalinga heritage remains strongest when knowledge is practiced, taught, documented, and respected by
          the generations who inherit it. Language, peace-pact traditions, crafts, stories, music, food, and
          community knowledge all form part of a living cultural record.
        </p>
      </section>

      <footer className="h-sources">
        <span>REFERENCE NOTES</span>
        <p>
          Historical context:{" "}
          <a href="https://kalingaprovince.gov.ph/historical-background/" target="_blank" rel="noreferrer">
            Provincial Government of Kalinga — Historical Background
          </a>
          . Language context:{" "}
          <a href="https://en.wikipedia.org/wiki/Kalinga_language" target="_blank" rel="noreferrer">
            Wikipedia — Kalinga language
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
