import Arrow from "./Arrow.jsx";

// Introduction: full-bleed photo with a brown blend, text on the right.
export default function Section({ id, eyebrow, title, text, cta, image }) {
  return (
    <section id={id} className="intro">
      <div className="intro__image" style={{ "--img": `url("${image}")` }} />
      <div className="intro__content">
        <div className="intro__body" data-reveal>
          <p className="intro__eyebrow">{eyebrow}</p>
          <h2 className="intro__title">
            {title[0]}
            <br />
            {title[1]}
          </h2>
          <p className="intro__text">{text}</p>
          <a className="btn btn--mono" href="#topics">
            {cta} <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
