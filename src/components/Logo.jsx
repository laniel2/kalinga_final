export default function Logo({ tagline = true }) {
  return (
    <a className="logo" href="#top" aria-label="Digital Kabilin home">
      <svg className="logo__mark" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M24 4 44 24 24 44 4 24Z" />
        <path d="M24 12 36 24 24 36 12 24Z" />
        <path d="M24 19 29 24 24 29 19 24Z" />
        <path d="M14 14 34 34M34 14 14 34" strokeWidth="1" opacity=".6" />
      </svg>
      <span className="logo__text">
        <span className="logo__name">Digital Kabilin</span>
        {tagline && <span className="logo__tag">Kalinga heritage, in every detail</span>}
      </span>
    </a>
  );
}
