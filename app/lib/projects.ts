export type Project = {
  id: string;
  slug: string;
  name: string;
  location: string;
  year: string;
  category: "Commercial" | "Residential" | "Institutional" | "Cultural";
  tags: string[];
  color: string;
  image?: string;
  description: string;
  paragraphs: string[];
};

export const projects: Project[] = [
  {
    id: "01",
    slug: "meridian-tower",
    name: "The Meridian Tower",
    location: "Mumbai, India",
    year: "2024",
    category: "Commercial",
    tags: ["High-rise", "Sustainable", "Mixed-use"],
    color: "#c9c4b6",
    image: "/meridian-tower.png",
    description:
      "A 62-storey mixed-use tower redefining Mumbai's skyline. Passive cooling facades reduce energy use by 40%.",
    paragraphs: [
      "MJ Architect was appointed to redefine Mumbai's skyline with a 62-storey mixed-use tower. We combined passive cooling facades with a layered massing strategy, reducing energy use by 40% while giving the city a new civic landmark.",
      "The tower's lower levels open onto a public plaza, blending commercial and residential programs around a shared core. Every facade responds to solar orientation — deep-set apertures to the west, glazed transparency to the harbour view — so the building performs before it decorates.",
    ],
  },
  {
    id: "02",
    slug: "khandala-retreat",
    name: "Khandala Retreat",
    location: "Maharashtra, India",
    year: "2023",
    category: "Residential",
    tags: ["Residential", "Organic", "Landscape"],
    color: "#b9c0b4",
    description:
      "A hillside residence carved into the Western Ghats — stone, timber, and silence. Built to disappear into the landscape.",
    paragraphs: [
      "A hillside residence carved into the Western Ghats. Working closely with local craftspeople, we used stone, timber, and silence as the primary materials — building a home designed to disappear into the landscape rather than dominate it.",
      "The plan steps down the slope in a sequence of terraces, each opening to a different aspect of the valley. Load-bearing stone walls, quarried within a few kilometres of the site, ground the house in its geology; timber screens filter the monsoon light without shutting it out.",
    ],
  },
  {
    id: "03",
    slug: "iitb-innovation-hub",
    name: "IITB Innovation Hub",
    location: "Powai, Mumbai",
    year: "2023",
    category: "Institutional",
    tags: ["Campus", "Biophilic", "Institutional"],
    color: "#bcc2c9",
    description:
      "A collaborative campus for 3,000 researchers. Biophilic design principles applied at every scale.",
    paragraphs: [
      "A collaborative research campus for 3,000 people. Biophilic design principles were applied at every scale — from daylighting strategy to material palette — to create an environment built for focus, collaboration, and wellbeing.",
      "Courtyard gardens thread through the plan, bringing daylight and greenery to every lab and shared workspace. Circulation is deliberately generous, treated as informal meeting space rather than corridor, encouraging the cross-disciplinary exchange the brief asked for.",
    ],
  },
  {
    id: "04",
    slug: "souk-al-mira",
    name: "Souk Al Mira",
    location: "Dubai, UAE",
    year: "2022",
    category: "Cultural",
    tags: ["Cultural", "Heritage", "Urban"],
    color: "#c9b9ae",
    description:
      "A reimagining of the traditional souk for the 21st century — shaded courtyards, water features, and human-scale spaces.",
    paragraphs: [
      "A reimagining of the traditional souk for the 21st century. Shaded courtyards, water features, and human-scale streets were layered together to create a cultural destination rooted in the region's architectural heritage.",
      "Passive cooling drove the massing from the outset: narrow shaded lanes, wind towers, and a canopy of perforated screens keep the public realm usable through the peak of summer, reviving a climatic logic older than air conditioning.",
    ],
  },
  {
    id: "05",
    slug: "floating-pavilion",
    name: "The Floating Pavilion",
    location: "Backwaters, Kerala",
    year: "2022",
    category: "Cultural",
    tags: ["Pavilion", "Water", "Craft"],
    color: "#b8c7c9",
    description:
      "An arts pavilion anchored on Kerala's backwaters. Moves with the tides. Built with local craftspeople.",
    paragraphs: [
      "An arts pavilion anchored on Kerala's backwaters. Moves with the tides. Built with local craftspeople using traditional boat-building joinery, the structure was conceived to sit lightly on water rather than resist it.",
      "A shallow timber deck rises and falls with the tide on a system of pontoons, so the pavilion's relationship to the shoreline changes through the day. The result is less a fixed building than a piece of infrastructure for gathering, performance, and quiet.",
    ],
  },
  {
    id: "06",
    slug: "skybridge-residences",
    name: "Skybridge Residences",
    location: "London, UK",
    year: "2021",
    category: "Residential",
    tags: ["Luxury", "Gardens", "High-rise"],
    color: "#c2bcc9",
    description:
      "Sixteen luxury apartments connected by aerial sky gardens 22 floors above the Thames.",
    paragraphs: [
      "Sixteen luxury apartments connected by aerial sky gardens 22 floors above the Thames. Each residence is paired with a neighbour across a shared planted bridge, turning circulation into amenity rather than afterthought.",
      "The gardens are engineered as much as they are landscaped — wind-screened, irrigated, and planted for year-round interest — so residents inhabit a genuine outdoor room at height rather than a token balcony.",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
