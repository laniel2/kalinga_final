import Arrow from "./Arrow.jsx";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__image" style={{ "--img": 'url("/images/hero.jpg")' }} />
      <div className="hero__content">
        <span className="rule" />
        <h1 className="hero__title">
          Digital
          <br />
          <em>Kabilin</em>
        </h1>
        <p className="hero__subtitle">Kalinga Heritage, in every detail</p>
        <p className="hero__text">
          Explore the Kalinga people of the Cordillera – their history, culture, language, and
          contemporary life through a digital journey.
        </p>
        <a className="btn" href="#introduction">
          Begin the Journey <Arrow />
        </a>
      </div>
    </section>
  );
}
