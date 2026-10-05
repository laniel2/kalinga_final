// Content for "The Community" page. Edit text, numbers and images here.
// Images live in /public/images.

export const pageHero = {
  eyebrow: "The Community",
  title: ["The", "Community"],
  lead: "The people, land, and living culture of Kalinga.",
  text: "Discover the identity, homeland, and people of Kalinga — their deep connection to the land, strong community values, and resilience that continue to shape their lives today.",
  image: "/images/community.jpg",
};

export const profile = {
  title: "Profile and Identity",
  tags: ["People", "Culture", "Identity", "Tradition"],
  text: "The Kalinga are an indigenous cultural community in the Cordillera Administrative Region, known for their rich traditions, resilience, and strong sense of identity. They are recognized for their distinctive tattoos (batok), intricate weaving, oral traditions, and deep spiritual connection to the land, rivers, and mountains.",
  cta: "Explore Their Identity",
  tiles: [
    { icon: "people", label: "People", caption: "A resilient community", image: "/images/com-people.jpg", pos: "72% 35%" },
    { icon: "weave", label: "Culture", caption: "Rich traditions and practices", image: "/images/com-culture.jpg", pos: "62% 50%" },
    { icon: "mark", label: "Identity", caption: "Unique tattoos and heritage", image: "/images/com-identity.jpg", pos: "88% 40%" },
    { icon: "flame", label: "Tradition", caption: "A living legacy to generations", image: "/images/com-tradition.jpg", pos: "52% 40%" },
  ],
};

export const geography = {
  title: "Geographic Location",
  tags: ["Mountains", "Rivers", "Communities"],
  text: [
    "Kalinga is located in the northeastern part of the Cordillera Administrative Region (CAR) in the northern Philippines. It is bordered by the provinces of Apayao (north), Cagayan (east), Isabela (southeast), Mountain Province (south), and Abra (west).",
    "The province is characterized by mountainous terrain, river valleys, and fertile areas where communities have thrived for generations.",
  ],
  cta: "Explore the Land",
  image: "/images/intro-landscape.jpg",
};

export const mapFacts = {
  title: "Map",
  tag: "Kalinga in the Cordillera Region",
  facts: [
    { icon: "pin", label: "Region", value: "Cordillera Administrative Region (CAR)" },
    { icon: "book", label: "Capital", value: "Tabuk City" },
    { icon: "peaks", label: "Neighboring Provinces", value: "Apayao, Cagayan, Isabela, Mountain Province, Abra" },
    { icon: "house", label: "Component Cities and Municipalities", value: "1 city and 7 municipalities" },
    { icon: "people", label: "Barangays", value: "153 barangays" },
  ],
};

// Population: PSA 2024 Census of Population (POPCEN), as of July 1, 2024.
// Households and the male/female split come from the original design mockup. Verify before launch.
export const demographics = {
  title: "Demographic Information",
  tag: "People of Kalinga today",
  text: "Based on the latest available data from the Philippine Statistics Authority (PSA), the province of Kalinga has a population of 235,391 (2024 Census). The Kalinga people continue to live in close-knit communities, preserving their culture and traditions while embracing opportunities in modern society.",
  image: "/images/hero.jpg",
  stats: [
    { icon: "people", value: "235,391", label: "Total Population", note: "(2024 Census)" },
    { icon: "house", value: "47,450", label: "Households", note: "(2024 Census)" },
    { icon: "man", value: "118,564", label: "Male", note: "(50.4%)" },
    { icon: "woman", value: "116,827", label: "Female", note: "(49.6%)" },
  ],
};

export const closing = {
  title: ["A People Connected", "to Their Land and Future"],
  text: "The Kalinga people continue to keep their culture alive — honoring their roots, strengthening their communities, and inspiring future generations.",
  image: "/images/intro-landscape.jpg",
};
