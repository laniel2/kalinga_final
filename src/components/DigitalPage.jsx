import { useState } from "react";
import Arrow from "./Arrow.jsx";

const Marker = ({ n }) => (
  <div className="c-marker" aria-hidden="true">
    <span>{n}</span>
    <i />
  </div>
);

const gallery = [
  { title: "Community Life", image: "/images/community.jpg", caption: "Everyday routines and shared traditions" },
  { title: "Heritage Sites", image: "/images/history.jpg", caption: "Sacred places and ancestral memory" },
  { title: "Craft and Textile", image: "/images/language.jpg", caption: "Knowledge carried through making" },
  { title: "Community Today", image: "/images/community-today.jpg", caption: "Continuity in contemporary life" },
];

const mapPins = [
  {
    label: "Tabuk City",
    x: "56%",
    y: "38%",
    title: "Tabuk City",
    description: "The regional center where culture, trade, and local leadership meet in everyday community life.",
  },
  {
    label: "Mountain Communities",
    x: "68%",
    y: "58%",
    title: "Mountain Communities",
    description: "Highland settlements preserve indigenous traditions, ancestral memory, and ritual practice.",
  },
  {
    label: "Rice Terraces",
    x: "42%",
    y: "67%",
    title: "Rice Terraces",
    description: "Terraced fields reflect agricultural wisdom, labor, and a deep attachment to the land.",
  },
  {
    label: "River Valleys",
    x: "60%",
    y: "75%",
    title: "River Valleys",
    description: "Valley communities support livelihood, food systems, and storytelling networks across generations.",
  },
];

const timeline = [
  { year: "Ancient", title: "Oral Traditions", text: "Stories, rituals, and social memory were preserved through spoken knowledge." },
  { year: "Colonial Era", title: "Adaptation", text: "Communities responded to shifting systems while maintaining cultural identity." },
  { year: "Postwar", title: "Heritage Renewal", text: "Education and local initiative strengthened pride in Kalinga culture and language." },
  { year: "Today", title: "Digital Memory", text: "Heritage is now archived through media, storytelling, and public access." },
];

const stats = [
  { label: "Community Stories", value: "120+", detail: "Recorded oral narratives and cultural memories" },
  { label: "Heritage Sites", value: "18", detail: "Places, landmarks, and memory spaces mapped" },
  { label: "Language Records", value: "35%", detail: "of living traditions documented digitally" },
  { label: "Digital Access", value: "24/7", detail: "Open access to heritage archive" },
];

const culturalFeatures = [
  {
    name: "Weaving Knowledge",
    tag: "Craft & Identity",
    text: "Learn how fabrics carry meaning, clan identity, and cultural continuity.",
    image: "/images/craftandidentity2.jpg",
  },
  {
    name: "Ritual Practice",
    tag: "Belief & Memory",
    text: "Explore localized traditions and how they shape social values and belonging.",
    image: "/images/ritual.jpg",
  },
  {
    name: "Place & Landscape",
    tag: "Geography",
    text: "Connect the land, memory, and community through the terrain that shaped life.",
    image: "/images/placesandlandscape.jpg",
  },
  {
    name: "Language & Voice",
    tag: "Oral History",
    text: "Hear language as a living archive of stories, values, and lived experience.",
    image: "/images/languageandvoice.jpg",
  },
];

const storytelling = [
  {
    headline: "From field to memory",
    text: "A visual transcription of how daily life becomes heritage, and heritage becomes community memory.",
    story: "Before sunrise, the fields are already alive with movement. Families tend rice terraces, water channels, and seed stories that are passed down like a map of belonging. In Kalinga life, labor and memory are closely linked—every task carries the rhythm of ancestors, and every harvest becomes a chapter in a larger cultural archive.",
    image: "/images/fromfieldtomemory.jpg",
  },
  {
    headline: "The land remembers",
    text: "Places, routes, and seasonal cycles give structure to identity and belonging.",
    story: "The mountains do not simply hold communities—they tell their histories. Trails connect homes to sacred grounds, riverbanks to burial places, and farms to rituals that mark the turning of time. To walk the land is to remember where one comes from, and to understand that memory is carried in stones, terraces, and stories that outlast any single generation.",
    image: "/images/thelandremembers.jpg",
  },
  {
    headline: "The next generation",
    text: "Digital tools help preserve knowledge while inviting young people into cultural stewardship.",
    story: "Young people are not only inheritors of tradition—they are becoming its caretakers. Through digital archives, oral recordings, and shared storytelling, they translate language, rituals, and place into living knowledge. In this way, heritage becomes participatory: a bridge between elders and youth, between memory and innovation, and between community identity and the future.",
    image: "/images/nextgeneration.jpeg",
  },
];

export default function DigitalPage() {
  const [activePin, setActivePin] = useState(mapPins[0]);
  const [activeFeature, setActiveFeature] = useState(culturalFeatures[0]);
  const [activeStory, setActiveStory] = useState(null);

  return (
    <>
      <section className="d-hero" aria-labelledby="d-hero-title">
        <div className="d-hero__video" aria-hidden="true">
          <video className="d-hero__media" autoPlay muted loop playsInline preload="auto">
            <source src="/images/alan.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="d-hero__overlay" aria-hidden="true" />
        <div className="d-hero__content">
          <p className="c-hero__eyebrow">
            <span>05</span>
            <i />
            <span>Digital Heritage</span>
          </p>
          <h1 id="d-hero-title" className="c-hero__title">
            Digital
            <br />
            <em>Heritage</em>
          </h1>
          <p className="c-hero__lead">A living archive of stories, people, and place.</p>
          <p className="c-hero__text">
            Explore Kalinga culture through digital memory tools, from visual archives and maps to oral history and interactive storytelling.
          </p>
        </div>
      </section>

      <section className="d-section d-section--gallery">
        <div className="d-section__head">
          <Marker n="01" />
          <h2>Photo Gallery</h2>
        </div>
        <div className="d-gallery">
          {gallery.map((item) => (
            <article key={item.title} className="d-gallery__card">
              <div className="d-gallery__image" style={{ backgroundImage: `url("${item.image}")` }} />
              <div className="d-gallery__body">
                <h3>{item.title}</h3>
                <p>{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="d-section d-section--map">
        <div className="d-section__head">
          <Marker n="02" />
          <h2>Interactive Map</h2>
        </div>
        <div className="d-map">
          <div
            className="d-map__frame"
            role="img"
            aria-label="Interactive Kalinga map visualization"
            style={{ backgroundImage: 'url("/images/GeneratedInteractiveMap.jpg")', backgroundSize: "cover", backgroundPosition: "center" }}
          >
            {mapPins.map((pin) => (
              <button
                key={pin.label}
                type="button"
                className={`d-map__pin ${activePin.label === pin.label ? "is-active" : ""}`}
                style={{ left: pin.x, top: pin.y }}
                aria-label={pin.label}
                aria-pressed={activePin.label === pin.label}
                onMouseEnter={() => setActivePin(pin)}
                onFocus={() => setActivePin(pin)}
                onClick={() => setActivePin(pin)}
              >
                <span>{pin.label}</span>
              </button>
            ))}
          </div>
          <div className="d-map__legend">
            <h3>{activePin.title}</h3>
            <p>{activePin.description}</p>
          </div>
        </div>
      </section>

      <section className="d-section d-section--timeline">
        <div className="d-section__head">
          <Marker n="03" />
          <h2>Digital Timeline</h2>
        </div>
        <div className="d-timeline">
          {timeline.map((item) => (
            <article key={item.year} className="d-timeline__item">
              <span>{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="d-section d-section--stats">
        <div className="d-section__head">
          <Marker n="04" />
          <h2>AI Infographics</h2>
        </div>
        <div className="d-infographic">
          <img
            src="/images/GeneratedInfographicsAlan.jpg"
            alt="AI-generated Kalinga infographic"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <section className="d-section d-section--video">
        <div className="d-section__head">
          <Marker n="05" />
          <h2>Video / Audio</h2>
        </div>
        <div className="d-video-wrap">
          <video className="d-video" autoPlay muted loop playsInline preload="auto">
            <source src="/images/alan.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="d-section d-section--features">
        <div className="d-section__head">
          <Marker n="06" />
          <h2>Interactive Cultural Features</h2>
        </div>
        <div className="d-feature-focus">
          <div className="d-feature-focus__image">
            <img src={activeFeature.image} alt={activeFeature.name} loading="lazy" decoding="async" />
          </div>
          <div className="d-feature-focus__content">
            <span>{activeFeature.tag}</span>
            <h3>{activeFeature.name}</h3>
            <p>{activeFeature.text}</p>
          </div>
        </div>
        <div className="d-features">
          {culturalFeatures.map((feature) => (
            <article
              key={feature.name}
              className={`d-feature ${activeFeature.name === feature.name ? "is-active" : ""}`}
              onMouseEnter={() => setActiveFeature(feature)}
              onFocus={() => setActiveFeature(feature)}
              onClick={() => setActiveFeature(feature)}
              tabIndex={0}
            >
              <div className="d-feature__image">
                <img src={feature.image} alt={feature.name} loading="lazy" decoding="async" />
              </div>
              <div className="d-feature__body">
                <span>{feature.tag}</span>
                <h3>{feature.name}</h3>
                <p>{feature.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="d-section d-section--stories">
        <div className="d-section__head">
          <Marker n="07" />
          <h2>Digital Storytelling</h2>
        </div>
        <div className="d-story-grid">
          {storytelling.map((story) => (
            <article key={story.headline} className="d-story">
              <div className="d-story__image">
                <img src={story.image} alt={story.headline} loading="lazy" decoding="async" />
              </div>
              <div className="d-story__body">
                <h3>{story.headline}</h3>
                <p>{story.text}</p>
                {activeStory === story.headline && <blockquote className="d-story__quote">{story.story}</blockquote>}
              </div>
              <button
                type="button"
                className="btn c-btn"
                onClick={() => setActiveStory(activeStory === story.headline ? null : story.headline)}
              >
                {activeStory === story.headline ? "Hide Story" : "Read Story"} <Arrow />
              </button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
