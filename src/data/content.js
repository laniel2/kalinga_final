// Image files live in /public/images. Cite every photo on the Digital Heritage page.
// bw: true  -> photo is low-resolution/soft, so it is shown in black and white.

export const navLinks = [
  { label: "The Community", href: "#/community" },
  { label: "History & Heritage", href: "#history" },
  { label: "Language & Knowledge", href: "#language" },
  { label: "Community Today", href: "#today" },
  { label: "Digital Heritage", href: "#digital" },
];

export const intro = {
  id: "introduction",
  image: "/images/intro-landscape.jpg",
  eyebrow: "The Kalinga People",
  title: ["Introduction", "to Kalinga"],
  text: "Kalinga is an indigenous cultural community in the Cordillera Administrative Region of the Philippines. Known for their rich traditions, resilience, and deep connection to the land, the Kalinga people continue to preserve their unique identity in the modern world.",
  cta: "Learn More",
};

export const topics = [
  {
    id: "community",
    number: "01",
    image: "/images/community.jpg",
    bw: true,
    title: "The Community",
    text: "Meet the Kalinga people and learn about their way of life, values, social structure, and strong sense of identity. Their deep connection to the land and to each other continues to shape their community today.",
    cta: "Explore the Community",
    href: "#/community",
  },
  {
    id: "history",
    number: "02",
    image: "/images/history.jpg",
    title: "History & Heritage",
    text: "Discover the history, beliefs, and cultural practices of the Kalinga people. From ancient traditions to important heritage sites, explore how their past continues to influence their identity today.",
    cta: "Explore History",
  },
  {
    id: "language",
    number: "03",
    image: "/images/language.jpg",
    bw: true,
    title: "Language & Knowledge",
    text: "Discover the Kalinga language, indigenous knowledge, and traditional practices passed down through generations. From oral traditions to symbols and textiles, their knowledge reflects a deep understanding of nature, community, and life.",
    cta: "Explore Language & Knowledge",
  },
  {
    id: "today",
    number: "04",
    image: "/images/community-today.jpg",
    title: "Community Today",
    text: "Learn about the modern Kalinga community and how they continue to keep their culture alive. Explore their current initiatives, education, livelihoods, and efforts to pass on their heritage to future generations.",
    cta: "Explore Community Today",
  },
  {
    id: "digital",
    number: "05",
    image: "/images/digital-heritage.jpg",
    bw: true,
    title: "Digital Heritage",
    text: "Access digital resources, references, and initiatives that help document and preserve the Kalinga people's heritage. Through technology and collaboration, we ensure their stories, culture, and knowledge remain accessible for generations to come.",
    cta: "Explore Digital Heritage",
  },
];
