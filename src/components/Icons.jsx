// Small outline icons used on the Community page. Usage: <Icon name="pin" />
const paths = {
  people: (
    <>
      <circle cx="12" cy="7.5" r="2.8" />
      <circle cx="4.8" cy="9.5" r="2.1" />
      <circle cx="19.2" cy="9.5" r="2.1" />
      <path d="M6.5 20v-3.2a5.5 5.5 0 0 1 11 0V20zM1.5 18v-2.2a3.4 3.4 0 0 1 4.2-3.3M22.5 18v-2.2a3.4 3.4 0 0 0-4.2-3.3" />
    </>
  ),
  weave: (
    <>
      <path d="M12 2 22 12 12 22 2 12Z" />
      <path d="M12 7 17 12 12 17 7 12Z" />
      <path d="M12 10.5 13.5 12 12 13.5 10.5 12Z" fill="currentColor" />
    </>
  ),
  mark: (
    <>
      <path d="M12 3c-3.5 0-6 2.6-6 6.2 0 4.600 2.600 8.300 6 11.800 3.400-3.500 6-7.200 6-11.800C18 5.600 15.500 3 12 3Z" />
      <path d="M9 9h6M9.500 12h5M10.500 15h3" />
    </>
  ),
  flame: (
    <>
      <path d="M12 2.500c1 3.500 5 5.500 5 10a5 5 0 0 1-10 0c0-2 1-3.200 2-4.200.2 1.500 1 2.200 1.800 2.500C10.500 8 11 5 12 2.500Z" />
      <path d="M12 21.500v-4" />
    </>
  ),
  pin: (
    <>
      <path d="M12 22s7-6.200 7-12a7 7 0 0 0-14 0c0 5.800 7 12 7 12Z" />
      <circle cx="12" cy="10" r="2.600" />
    </>
  ),
  book: (
    <>
      <path d="M3 5.500 9 4l6 1.500L21 4v14.500L15 20l-6-1.500L3 20Z" />
      <path d="M9 4v14.500M15 5.500V20" />
    </>
  ),
  peaks: (
    <>
      <path d="M1.500 20 9 6l4 7 2.500-4L22.500 20Z" />
      <path d="m7 10 2 1.500L11 10" />
    </>
  ),
  house: (
    <>
      <path d="M2.500 11.500 12 3l9.500 8.500" />
      <path d="M5 10v10.500h14V10" />
      <path d="M10 20.500v-6h4v6" />
    </>
  ),
  man: (
    <>
      <circle cx="12" cy="4.500" r="2.500" />
      <path d="M8 21v-7H6.500V10a2.500 2.500 0 0 1 2.500-2.500h6A2.500 2.500 0 0 1 17.500 10v4H16v7" />
    </>
  ),
  woman: (
    <>
      <circle cx="12" cy="4.500" r="2.500" />
      <path d="M9 21v-5H6.500L9 8.500h6L17.500 16H15v5" />
    </>
  ),
};

export default function Icon({ name, size = 24, className = "" }) {
  return (
    <svg className={`icon ${className}`} viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
