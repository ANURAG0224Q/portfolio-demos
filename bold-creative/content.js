/* ============================================================
   EDIT THIS FILE ONLY — every word, link, image and colour of
   the site lives here. Save, refresh the page, done.
   (Also change <title> and the description in index.html <head>
   so link previews on WhatsApp/LinkedIn show the right name.)
   ============================================================ */
window.SITE = {
  // ---- Colours ----
  colors: {
    bg: "#0a0a0c",          // page background
    text: "#f4f4f5",        // main text
    accent1: "#ff5c35",     // gradient start (also buttons)
    accent2: "#ffb347",     // gradient end
  },
  animations: true,         // false turns off scroll / text animations

  // ---- Basics ----
  name: "Mira Kapoor",
  shortName: "Mira",
  role: "Visual & UI Designer",
  headline: ["I design brands,", "apps and posters", "people remember."],
  intro: "Final-year Communication Design student. I mix bold type, colour and clean UI to help small brands and startups look like they mean it.",
  photo: "assets/photo.jpg",
  location: "Bengaluru, India",
  email: "mira.kapoor.demo@example.com",
  available: "Available for freelance & internships",
  resume: "", // e.g. "assets/resume.pdf" to show a resume button

  socials: [
    { label: "Behance", url: "demo" },
    { label: "Dribbble", url: "demo" },
    { label: "Instagram", url: "demo" },
    { label: "LinkedIn", url: "demo" },
  ],

  marquee: ["Branding", "UI / UX", "Posters", "Illustration", "Packaging", "Editorial", "Motion"],

  // filters are built automatically from the 'category' of each work item
  work: [
    { title: "Chai & Co.", category: "Branding", year: "2026", image: "assets/work-1.svg",
      desc: "Logo, colours and cup design for a small tea café. Warm, local and easy to spot from across the street." },
    { title: "FitTrack App", category: "UI / UX", year: "2026", image: "assets/work-2.svg",
      desc: "A habit-tracking app concept: onboarding, daily dashboard and dark mode, tested with 8 classmates." },
    { title: "Shape · Form · Space", category: "Posters", year: "2025", image: "assets/work-3.svg",
      desc: "A three-poster series for a college design exhibition, built only from basic shapes and heavy type." },
    { title: "Western Ghats", category: "Illustration", year: "2025", image: "assets/work-4.svg",
      desc: "Flat vector landscape series for a travel club's social media." },
    { title: "Bloom Skincare", category: "Branding", year: "2025", image: "assets/work-5.svg",
      desc: "Packaging concept for a small skincare label: bottle, box and label system." },
    { title: "Slow Cities", category: "Editorial", year: "2024", image: "assets/work-6.svg",
      desc: "Magazine spread layout about walkable cities, with a custom grid and type pairing." },
  ],

  about: [
    "I'm Mira, a design student who loves the moment a messy idea turns into something clear and beautiful.",
    "I've worked with college clubs, two local cafés and a student startup. My tools: Figma, Illustrator, Photoshop and a lot of paper sketches first.",
  ],
  tools: ["Figma", "Illustrator", "Photoshop", "After Effects", "Procreate", "Canva"],
  numbers: [
    { value: "20+", label: "projects" },
    { value: "6", label: "happy clients" },
    { value: "3", label: "design awards" },
  ],

  process: [
    { title: "Listen", text: "A short call to understand your goal, audience and taste." },
    { title: "Sketch", text: "Two or three directions as quick sketches or moodboards." },
    { title: "Design", text: "The chosen direction, polished in Figma with your feedback." },
    { title: "Deliver", text: "Final files for print and web, plus a mini style guide." },
  ],

  testimonials: [
    { quote: "Mira gave our café a look that customers actually talk about.", by: "Owner, a local café (demo)" },
    { quote: "Fast, thoughtful and always one step ahead on details.", by: "Founder, a student startup (demo)" },
  ],

  contact: {
    heading: "Got a project?",
    text: "Tell me what you need. I usually reply within a few hours.",
  },
  footerNote: "Demo portfolio template. Mira Kapoor is a fictional person; artwork is placeholder.",
};
