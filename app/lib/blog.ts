export type Post = {
  slug: string;
  title: string;
  category: string;
  color: string;
  image?: string;
  date: string;
  readTime: string;
  excerpt: string;
  paragraphs: string[];
};

export const posts: Post[] = [
  {
    slug: "designing-with-light",
    title: "Designing With Light: Notes From the Studio",
    category: "Design Notes",
    color: "#c9c4b6",
    date: "March 2026",
    readTime: "4 min read",
    excerpt:
      "Light is the material we spend the most time designing with and talk about the least. Some notes on how we think about it.",
    paragraphs: [
      "Of all the materials we work with, light is the one clients ask about least and that shapes their experience of a building the most. A room's proportions can be perfect on paper and still feel wrong if the light arrives at the wrong hour, from the wrong angle, at the wrong intensity.",
      "We tend to design light in layers rather than as a single decision. There's the structural layer — orientation, window placement, depth of reveal — that determines how much light enters and when. Then there's the filtering layer — screens, louvres, overhangs — that softens and shapes it. Only after both of those are resolved do we think about artificial light at all.",
      "The rooms people remember are rarely the brightest ones. They're the ones where light does something — falls across a wall at a particular hour, pools in a corner, changes the mood of a space over the course of a day. That's not something you can specify in a lighting schedule. It has to be designed into the section from the beginning.",
    ],
  },
  {
    slug: "material-and-memory",
    title: "Why Material Choice Shapes How We Live",
    category: "Philosophy",
    color: "#b9c0b4",
    date: "January 2026",
    readTime: "5 min read",
    excerpt:
      "Materials aren't finishes. They're part of how a building ages, feels, and is remembered by the people who use it.",
    paragraphs: [
      "It's tempting to treat material selection as one of the last decisions in a project — a finishing layer applied once the real design work is done. We've found the opposite to be true: material is one of the first questions worth asking, because it determines so much of what follows.",
      "Concrete, stone, timber, and brick don't just look different — they behave differently over decades. They weather, patina, and wear at different rates, and in different ways depending on climate and use. A material chosen for how it looks on day one can become a liability by year ten if its aging wasn't considered from the start.",
      "We ask a simple question of every material we specify: how will this look, feel, and perform in twenty years, under the hands and weather of the people who'll actually use it? That question tends to rule out a lot of trend-driven choices, and it's led us toward a fairly consistent, restrained material palette across very different projects.",
    ],
  },
  {
    slug: "architecture-of-slowness",
    title: "The Architecture of Slowness",
    category: "Philosophy",
    color: "#bcc2c9",
    date: "November 2025",
    readTime: "4 min read",
    excerpt:
      "In a culture that rewards speed, there's a case for architecture that asks people to slow down.",
    paragraphs: [
      "Most of the built environment is optimised for speed — for getting people from one place to another as efficiently as possible. There's a place for that. But some of the spaces we remember most clearly are the ones that ask us to slow down: a threshold that takes an extra few seconds to pass through, a courtyard that interrupts a straight line, a window seat that has no obvious purpose beyond sitting in it.",
      "We think of these as deliberate frictions — small interruptions in the plan that create a pause. They're not inefficiencies; they're where a lot of the emotional content of a building lives. A house that gets you from the front door to the kitchen in the shortest possible path is efficient. A house that takes you past a view, a change in material, or a shift in light on the way is memorable.",
      "This isn't an argument for making buildings deliberately inconvenient. It's an argument for being intentional about where speed serves the people who'll live in a space, and where a moment of slowness serves them better.",
    ],
  },
  {
    slug: "passive-cooling-warming-city",
    title: "Passive Cooling in a Warming City",
    category: "Sustainability",
    color: "#c9b9ae",
    date: "September 2025",
    readTime: "6 min read",
    excerpt:
      "Long before mechanical cooling, cities like Mumbai and Dubai developed climatic strategies worth relearning.",
    paragraphs: [
      "Mechanical cooling is a relatively recent solution to a very old problem. For centuries, cities in hot climates developed architectural strategies to stay livable without it — thick thermal mass, shaded courtyards, cross-ventilation, wind towers, and narrow streets that shadow each other through the day.",
      "On recent projects, we've returned to a lot of these strategies not out of nostalgia but because they work, and because they reduce a building's dependence on mechanical systems that are expensive to run and vulnerable to grid failure. Passive strategies won't replace mechanical cooling entirely in every climate, but they can meaningfully reduce the load — often by 30–40% — before a single compressor turns on.",
      "The bigger shift is in sequencing: designing the passive strategy first, then sizing mechanical systems to cover what's left, rather than the reverse. It changes the massing, orientation, and facade of a building from the earliest sketches, which is exactly where that thinking needs to happen.",
    ],
  },
  {
    slug: "building-on-water",
    title: "What We Learned Building on Water",
    category: "Case Study",
    color: "#b8c7c9",
    date: "July 2025",
    readTime: "5 min read",
    excerpt:
      "Notes from designing a floating pavilion on Kerala's backwaters, and what it taught us about permanence.",
    paragraphs: [
      "Designing a structure that moves with the tide forces a different relationship with the idea of a foundation. Most buildings are designed to resist movement; the Floating Pavilion was designed to accommodate it, rising and falling on a system of pontoons rather than fighting the water beneath it.",
      "That constraint changed how we thought about permanence more broadly. A fixed foundation implies a fixed relationship with a site — the ground doesn't move, so the building doesn't need to. Water refuses that assumption. Everything about the pavilion's structure, from the joinery to the services, had to accept ongoing, daily movement as a normal condition rather than a failure state.",
      "We came away from the project with a broader question we now ask on every site, water or not: what does this place actually ask the building to accommodate, rather than resist? It's rarely as literal as tidal movement, but there's almost always something — subsidence, seasonal flooding, extreme heat — that a building is better off designed with than against.",
    ],
  },
  {
    slug: "concrete-weathering-time",
    title: "Concrete, Weathering, and the Beauty of Time",
    category: "Design Notes",
    color: "#c2bcc9",
    date: "May 2025",
    readTime: "3 min read",
    excerpt:
      "Exposed concrete is often treated as a finish to be protected from weather. We think its weathering is the point.",
    paragraphs: [
      "Exposed concrete has a reputation problem. It's often specified for its clean, precise appearance on the day of completion, then maintained — at real cost — to try to keep it looking that way indefinitely. We think this misunderstands what makes the material interesting.",
      "Left to weather naturally, concrete develops streaking, staining, and tonal variation that no amount of formwork precision can fake. Rather than treating that as a defect to be sealed against, we've started designing with it in mind — detailing drip edges and reveals so that weathering happens in a controlled, intentional pattern rather than randomly.",
      "The result is a material that looks different in year fifteen than it did on completion day, and looks better for it. That's a difficult thing to show a client in a rendering, which is probably why it's still a hard sell — but it's one of the more honest relationships a building can have with time.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}
