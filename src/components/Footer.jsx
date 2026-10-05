import Logo from "./Logo.jsx";

const quick = [
  { label: "The Community", href: "#/community" },
  { label: "History & Heritage", href: "#history" },
  { label: "Language & Knowledge", href: "#language" },
  { label: "Community Today", href: "#today" },
  { label: "Digital Heritage", href: "#digital" },
];

const Facebook = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.900V12h3.400l-.5 3.500h-2.900v8.400A12 12 0 0 0 24 12Z" /></svg>
);
const Instagram = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.500" cy="6.500" r="1" fill="currentColor" stroke="none" /></svg>
);
const YouTube = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M23 7.200a3 3 0 0 0-2.100-2.100C19 4.600 12 4.600 12 4.600s-7 0-8.900.5A3 3 0 0 0 1 7.200C.5 9 .5 12 .5 12s0 3 .5 4.800a3 3 0 0 0 2.100 2.100c1.900.5 8.900.5 8.900.5s7 0 8.900-.5a3 3 0 0 0 2.100-2.100c.5-1.800.5-4.800.5-4.800s0-3-.5-4.800ZM9.800 15.200V8.800l5.800 3.200-5.800 3.200Z" /></svg>
);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__brand">
          <Logo />
          <p>
            Preserving the stories, people, and traditions
            <br />
            of the Kalinga people for generations to come.
          </p>
        </div>
        <div className="footer__col">
          <h3>Quick Links</h3>
          <ul>
            {quick.map((q) => (
              <li key={q.label}>
                <a href={q.href}>{q.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__col footer__connect">
          <h3>Connect</h3>
          <div className="footer__social">
            <a href="#top" aria-label="Facebook"><Facebook /></a>
            <a href="#top" aria-label="Instagram"><Instagram /></a>
            <a href="#top" aria-label="YouTube"><YouTube /></a>
          </div>
          <p className="footer__motto">
            Preserving Culture.
            <br />
            Connecting Generations.
          </p>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© 2026 Digital Kabilin. All rights reserved.</span>
        <span className="footer__region">
          Kalinga <i>/</i> Cordillera Administrative Region <i>/</i> Northern Philippines
        </span>
      </div>
    </footer>
  );
}
