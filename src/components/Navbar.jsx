import Logo from "./Logo.jsx";
import { navLinks } from "../data/content.js";

export default function Navbar({ route = "home" }) {
  return (
    <header className="navbar" id="top">
      <Logo />
      <nav className="navbar__links" aria-label="Primary">
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} aria-current={l.href === `#/${route}` ? "page" : undefined}>
            {l.label}
          </a>
        ))}
      </nav>
      <button className="navbar__search" aria-label="Search">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m15.5 15.5 5 5" />
        </svg>
      </button>
    </header>
  );
}
