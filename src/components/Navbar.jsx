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
    </header>
  );
}
