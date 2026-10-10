import "../styles/language.css";

const varieties = [
  ["01", "Butbut", "A Kalinga variety associated with communities in the northern part of the province."],
  ["02", "Limos", "One of the varieties identified in descriptions of the Kalinga language continuum."],
  ["03", "Lubuagan", "A documented Kalinga variety with an established writing system."],
  ["04", "Mabaka Valley", "A variety connected to communities and settlements within the Kalinga cultural landscape."],
  ["05", "Madukayang", "A named variety that forms part of the wider Kalinga language continuum."],
  ["06", "Southern Kalinga", "A southern variety reflecting the geographic diversity of Kalinga speech communities."],
  ["07", "Tanudan", "A variety associated with the Tanudan area of Kalinga."],
  ["08", "Banao Itneg", "A related variety identified in the source's description of the Kalinga language area."]
];

const knowledge = [
  ["Words", "Local words and expressions preserve ways of describing land, relationships, everyday life, and community identity."],
  ["Stories", "Oral narratives help transmit history, values, places, experiences, and lessons from one generation to another."],
  ["Songs & chants", "Music and spoken performance can carry memory and cultural meaning beyond written records."],
  ["Names & places", "Names can connect people to ancestors, landscapes, communities, and remembered events."],
  ["Teaching", "Elders, families, and community members keep knowledge alive by practicing and teaching it in daily life."],
  ["Writing", "Written documentation can support preservation while respecting the living communities who own and continue the language."]
];

export default function LanguagePage() {
  return (
    <div className="language-page">
      <section className="language-hero">
        <div className="language-hero__art"><span>K</span><small>LANGUAGE · MEMORY · KNOWLEDGE</small></div>
        <div className="language-hero__content">
          <a className="language-back" href="#/history">← Back to History & Heritage</a>
          <p className="language-kicker">03 · LANGUAGE & KNOWLEDGE</p>
          <h1>Words that<br /><em>carry memory.</em></h1>
          <p>Language is more than communication. It can carry stories, identity, place, relationships, and knowledge from one generation to the next.</p>
        </div>
      </section>

      <section className="language-intro">
        <p className="language-kicker">THE KALINGA LANGUAGE</p>
        <h2>A landscape of <em>many voices.</em></h2>
        <p>The Kalinga language is described as a dialect continuum spoken primarily in Kalinga and neighboring areas of northern Luzon. Its varieties reflect the province's geography and the distinct communities that have developed across its valleys and uplands.</p>
      </section>

      <section className="language-varieties">
        <div className="language-section-head">
          <p className="language-kicker">01 · LANGUAGE VARIETIES</p>
          <h2>Different voices.<br /><em>Connected heritage.</em></h2>
        </div>
        <div className="language-variety-grid">
          {varieties.map(([n, title, text]) => (
            <article key={title} className="language-variety">
              <strong>{n}</strong><div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="knowledge-section">
        <div className="knowledge-copy">
          <p className="language-kicker">02 · CULTURAL KNOWLEDGE</p>
          <h2>What a language<br /><em>helps us remember.</em></h2>
          <p>Knowledge is not only stored in books. It can live in conversations, stories, songs, names, practices, and the relationships through which people learn from one another.</p>
        </div>
        <div className="knowledge-grid">
          {knowledge.map(([title, text]) => (
            <article key={title}><span>•</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="language-preserve">
        <p className="language-kicker">03 · KEEPING KNOWLEDGE ALIVE</p>
        <h2>Preservation begins<br /><em>with use.</em></h2>
        <p>Supporting indigenous language means listening to speakers, respecting community knowledge, documenting responsibly, and creating opportunities for younger generations to hear, learn, speak, and pass the language forward.</p>
        <a className="btn language-button" href="#/history">Return to History & Heritage <span>→</span></a>
      </section>

      <footer className="language-sources">
        <span>REFERENCE</span>
        <p>Language information: <a href="https://en.wikipedia.org/wiki/Kalinga_language" target="_blank" rel="noreferrer">Kalinga language — Wikipedia</a>. Historical and cultural context: <a href="https://kalingaprovince.gov.ph/historical-background/" target="_blank" rel="noreferrer">Provincial Government of Kalinga — Historical Background</a>.</p>
      </footer>
    </div>
  );
}
