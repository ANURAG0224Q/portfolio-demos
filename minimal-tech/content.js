/* ============================================================
   EDIT THIS FILE ONLY — every word, link and colour of the site
   lives here. Save, refresh the page, done.
   (Also change <title> and the description in index.html <head>
   so link previews on WhatsApp/LinkedIn show the right name.)
   ============================================================ */
window.SITE = {
  // ---- Colours (any CSS colour: "#2563eb", "teal", "rgb(…)") ----
  colors: {
    accent: "#2563eb",      // buttons, links, highlights
    accentSoft: "#e8efff",  // light tint of the accent (light mode)
  },
  darkModeToggle: true,     // false hides the sun/moon button

  // ---- Basics ----
  name: "Rohan Verma",
  role: "Computer Science Student · Aspiring Software Engineer",
  location: "Bengaluru, India",
  photo: "assets/photo.jpg",          // square photo, or "" for initials
  resume: "assets/Rohan_Verma_Resume.pdf", // or "" to hide the button
  email: "rohan.verma.demo@example.com",
  intro: "3rd-year B.Tech CSE student who likes turning ideas into small, useful apps. Looking for a Summer 2027 software engineering internship.",
  openToWork: "Open to internships · Summer 2027",

  // Social links. url: "demo" shows a 'demo link' note instead of opening.
  socials: [
    { label: "GitHub", url: "demo" },
    { label: "LinkedIn", url: "demo" },
    { label: "LeetCode", url: "demo" },
  ],

  about: [
    "I'm a third-year Computer Science student who enjoys building practical things: web apps, small tools and the occasional hardware project.",
    "I care about clean code, fast pages and interfaces that just work. Right now I'm going deeper into backend development and data structures, and I'm looking for an internship where I can ship real features.",
  ],
  stats: [
    { value: "8.7", label: "CGPA" },
    { value: "12+", label: "Projects" },
    { value: "350+", label: "DSA problems" },
  ],

  skills: [
    { group: "Languages", items: ["Java", "Python", "JavaScript", "C", "SQL"] },
    { group: "Web", items: ["HTML", "CSS", "React", "Node.js", "Express"] },
    { group: "Tools", items: ["Git & GitHub", "Linux", "VS Code", "Figma", "Postman"] },
    { group: "Core CS", items: ["Data Structures", "Algorithms", "DBMS", "OOP", "Operating Systems"] },
  ],

  projects: [
    { title: "CampusCart", tag: "Full-stack web app",
      desc: "A buy-and-sell marketplace for students on one campus: listings with photos, chat between buyer and seller, and search by category.",
      tech: ["React", "Node.js", "MongoDB"], color: "#2563eb", code: "demo", live: "demo" },
    { title: "StudyBuddy Bot", tag: "Python · Automation",
      desc: "A Telegram bot that reminds a class group about assignment deadlines and shares notes from a shared folder.",
      tech: ["Python", "Telegram API", "SQLite"], color: "#0d9488", code: "demo", live: "" },
    { title: "Smart Attendance", tag: "Computer vision",
      desc: "Marks attendance from a single classroom photo using face recognition, then exports a clean Excel sheet for the teacher.",
      tech: ["Python", "OpenCV", "Pandas"], color: "#7c3aed", code: "demo", live: "" },
    { title: "Expense Splitter", tag: "Web app",
      desc: "Split trip and hostel expenses with friends; it works out who owes whom in the fewest payments.",
      tech: ["JavaScript", "HTML", "CSS"], color: "#ea580c", code: "demo", live: "demo" },
  ],

  experience: [
    { when: "May – Jul 2026", title: "Web Development Intern", org: "Demo Tech Solutions (fictional)",
      points: ["Built 6 responsive pages for a client dashboard in React.", "Cut page load time by 40% by compressing images and lazy-loading."] },
    { when: "2025 – now", title: "Tech Lead, Coding Club", org: "College coding club",
      points: ["Run weekly DSA sessions for 60+ juniors.", "Organised a 24-hour campus hackathon with 30 teams."] },
  ],
  education: [
    { when: "2024 – 2028", title: "B.Tech, Computer Science & Engineering", org: "Example Institute of Technology, Bengaluru", note: "CGPA 8.7 / 10" },
    { when: "2022 – 2024", title: "Class XII (PCM)", org: "Example PU College", note: "92%" },
  ],
  achievements: [
    "Finalist, Smart City Hackathon 2025 (team of 4)",
    "Top 5% in a national coding contest, 2025",
    "Certified: Python for Everybody (online course)",
  ],

  contact: {
    heading: "Let's talk",
    text: "Have an internship, project or question? Send me a message and I'll reply within a day.",
  },
  footerNote: "Demo portfolio template. Rohan Verma is a fictional person.",
};
