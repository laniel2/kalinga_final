import "../styles/explore.css";

const pages = {
  today: {
    eyebrow: "04 · COMMUNITY TODAY",
    title: ["Culture in", "the present."],
    lead: "Kalinga communities continue to carry heritage into contemporary life.",
    image: "/images/a%20living%20heritage.jpeg",
    intro: "A living culture is not only remembered. It is practiced, taught, adapted, and shared by people in everyday life.",
    features: [
      { number: "01", title: "Education & transmission", text: "Schools, families, elders, cultural workers, and community organizations help pass knowledge to younger generations.", image: "/images/education-transmission.jpg" },
      { number: "02", title: "Livelihood & community life", text: "Farming, local enterprise, crafts, public service, and other livelihoods continue to shape community life.", image: "/images/livelihood-community-life.jpg" },
      { number: "03", title: "Living heritage", text: "Language, customary practices, music, food, weaving, stories, and community relationships remain expressions of identity.", image: "/images/Living%20heritage.jpg" },
      { number: "04", title: "Looking forward", text: "Preserving culture means giving communities space to practice, teach, document, and carry heritage forward.", image: "/images/Looking%20forward.jpg" },
    ],
    quote: "Heritage remains alive when it remains part of life.",
  },
  digital: {
    eyebrow: "05 · DIGITAL HERITAGE",
    title: ["Preserving", "memory digitally."],
    lead: "Digital tools can help document, organize, teach, and share Kalinga heritage responsibly.",
    image: "/images/digital-heritage.jpg",
    intro: "A digital archive can become a doorway into stories, knowledge, sounds, places, and cultural expressions—without replacing the people who keep them alive.",
    features: [
      ["01", "Stories & oral histories", "Recorded memories, community narratives, and first-hand accounts can create a richer record for future learners."],
      ["02", "Music & cultural expression", "Digital recordings can help preserve songs, performances, and other forms of cultural expression for learning and reference."],
      ["03", "Crafts & material culture", "Photographs and documentation can make objects, techniques, patterns, and creative practices easier to study and remember."],
      ["04", "Responsible preservation", "Digitization should respect community ownership, consent, cultural protocols, attribution, and the context in which knowledge is shared."],
    ],
    quote: "Technology can preserve a record; people keep heritage alive.",
  },
  identity: {
    eyebrow: "COMMUNITY · IDENTITY",
    title: ["The people", "behind the heritage."],
    lead: "Explore Kalinga identity through people, culture, tradition, and community memory.",
    image: "/images/community.jpg",
    intro: "Identity is shaped by relationships, shared memory, language, land, and living cultural practice.",
    features: [
      ["01", "People", "Kalinga communities are connected through kinship, shared histories, local relationships, and strong community ties."],
      ["02", "Culture", "Distinctive practices in tattooing, weaving, oral traditions, music, food, and ceremonies express identity and belonging."],
      ["03", "Tradition", "Customary knowledge is transmitted through practice and participation, allowing heritage to remain active across generations."],
      ["04", "Identity", "Identity is built through relationships with land, community, language, history, and living cultural practice."],
    ],
    quote: "Identity is lived, shared, and carried across generations.",
  },
  land: {
    eyebrow: "COMMUNITY · THE LAND",
    title: ["Land, rivers", "and belonging."],
    lead: "Kalinga's geography is deeply connected to settlement, livelihood, travel, and cultural memory.",
    image: "/images/intro-landscape.jpg",
    intro: "The landscape is not simply a backdrop. It is part of how communities live, remember, and understand belonging.",
    features: [
      ["01", "Mountain landscape", "The province's mountainous terrain has shaped settlement patterns, movement, agriculture, and relationships among communities."],
      ["02", "River valleys", "River systems and valleys have supported farming, travel, and community life while becoming important parts of local memory."],
      ["03", "Ancestral connection", "Land can carry histories, names, stories, responsibilities, and relationships that connect generations."],
      ["04", "Protecting place", "Understanding Kalinga heritage also means understanding why land and community decisions matter to cultural continuity."],
    ],
    quote: "To understand heritage, we also have to understand place.",
  },
};

const sectionMeta = {
  today: {
    glyph: "C",
    glyphLabel: "COMMUNITY TODAY",
    intro: { label: "A LIVING COMMUNITY", title: ["Culture that", "keeps moving."] },
    features: { kicker: "01 · TODAY'S EXPRESSIONS", title: ["How heritage", "lives today."] },
    preserve: { kicker: "A LIVING HERITAGE" },
  },
  digital: {
    glyph: "D",
    glyphLabel: "DIGITAL HERITAGE",
    intro: { label: "THE DIGITAL ARCHIVE", title: ["Explore the", "archive."] },
    features: { kicker: "01 · ARCHIVE COLLECTIONS", title: ["What the", "archive holds."] },
    preserve: { kicker: "DIGITAL MEMORY" },
  },
  identity: {
    glyph: "I",
    glyphLabel: "IDENTITY",
    intro: { label: "A PEOPLE'S IDENTITY", title: ["The people", "of Kalinga."] },
    features: { kicker: "01 · IDENTITY", title: ["What makes", "a people."] },
    preserve: { kicker: "SHARED IDENTITY" },
  },
  land: {
    glyph: "L",
    glyphLabel: "THE LAND",
    intro: { label: "THE LAND", title: ["Land, rivers", "and belonging."] },
    features: { kicker: "01 · LANDSCAPE", title: ["What grounds", "a people."] },
    preserve: { kicker: "PLACE & MEMORY" },
  },
};

export default function ExplorePage({ type }) {
  const data = pages[type] || pages.today;
  const meta = sectionMeta[type] || sectionMeta.today;

  return (
    <div className={`explore-page explore-page--${type}`}>
      <section className="explore-hero" style={{ "--explore-img": `url("${data.image}")` }}>
        <div className="explore-hero__image" aria-hidden="true" />
        <div className="explore-hero__art" aria-hidden="true">
          <span>{meta.glyph}</span>
          {type === "digital" && <i className="explore-hero__dot" aria-hidden="true" />}
          <small>{meta.glyphLabel}</small>
        </div>
        <div className="c-ornament c-ornament--corner" aria-hidden="true" />
        <div className="explore-hero__content">
          <p className="explore-kicker">{data.eyebrow}</p>
          <h1>{data.title[0]}<br /><em>{data.title[1]}</em></h1>
          <p className="explore-lead">{data.lead}</p>
        </div>
      </section>

      <section className="explore-intro">
        <p className="explore-kicker">{meta.intro.label}</p>
        <h2>{meta.intro.title[0]}<br /><em>{meta.intro.title[1]}</em></h2>
        <p>{data.intro}</p>
      </section>

      <section className="explore-features" aria-labelledby="explore-features-title">
        <div className="explore-section-head">
          <p className="explore-kicker">{meta.features.kicker}</p>
          <h2 id="explore-features-title">{meta.features.title[0]}<br /><em>{meta.features.title[1]}</em></h2>
        </div>
        <div className="explore-feature-grid">
          {data.features.map(({ number, title, text, image, collage }) => (
            <article key={title} className="explore-feature">
              <strong>{number}</strong>
              <div className="explore-feature__body">
                {collage ? (
                  <div className="explore-feature__mosaic" aria-label={title}>
                    <img className="explore-feature__image explore-feature__image--mosaic" src={image} alt={title} />
                    <img className="explore-feature__image explore-feature__image--mosaic explore-feature__image--mosaic-alt" src={image} alt={title} />
                  </div>
                ) : (
                  <img className="explore-feature__image" src={image} alt={title} />
                )}
                <div className="explore-feature__copy">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="explore-preserve">
        <p className="explore-kicker">{meta.preserve.kicker}</p>
        <h2>{data.quote}</h2>
      </section>

      <footer className="explore-sources">
        <span>REFERENCE</span>
        <p>
          Cultural context:{" "}
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
