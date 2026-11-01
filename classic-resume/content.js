/* ============================================================
   EDIT THIS FILE ONLY — every word, link and colour of the site
   lives here. Save, refresh the page, done.
   (Also change <title> and the description in index.html <head>
   so link previews on WhatsApp/LinkedIn show the right name.)
   Tip: the page also prints as a clean resume (Print button).
   ============================================================ */
window.SITE = {
  // ---- Colours ----
  colors: {
    accent: "#0f5e57",      // headings, lines, buttons
    page: "#f3f1ec",        // background around the resume sheet
  },

  // ---- Basics ----
  name: "Priya Nair",
  title: "MBA (Finance & Marketing) · Fresher",
  photo: "assets/photo.jpg",          // or "" to hide
  resume: "assets/Priya_Nair_Resume.pdf", // or "" to hide the button
  contacts: [
    { label: "priya.nair.demo@example.com", url: "mailto:priya.nair.demo@example.com", icon: "mail" },
    { label: "Bengaluru, India", url: "", icon: "pin" },
    { label: "LinkedIn", url: "demo", icon: "link" },
  ],
  email: "priya.nair.demo@example.com",

  summary: "MBA graduate (Finance & Marketing) with two internships in financial analysis and digital marketing. Comfortable with Excel models, dashboards and talking to customers. Looking for an analyst or management trainee role where numbers drive decisions.",
  highlights: [
    { value: "2", label: "internships" },
    { value: "8.4", label: "MBA CGPA" },
    { value: "₹12L", label: "budget tracked" },
  ],

  experience: [
    { role: "Finance Intern", org: "Example Capital Advisors (fictional)", when: "Apr – Jun 2026", place: "Bengaluru",
      points: ["Built Excel models to compare 3 mid-cap companies on 12 ratios; used in a client pitch.",
               "Automated a weekly MIS report with Power Query, saving the team about 4 hours a week."] },
    { role: "Digital Marketing Intern", org: "Example D2C Brand (fictional)", when: "May – Jul 2025", place: "Remote",
      points: ["Planned 20+ Instagram posts and two ad campaigns with a ₹1.5L budget.",
               "Raised the campaign click-through rate from 1.1% to 1.9% by testing creatives."] },
  ],

  projects: [
    { title: "Mutual fund performance study", text: "Compared 25 equity funds on risk-adjusted returns (Sharpe, Sortino) for the final-year project." },
    { title: "Café market entry plan", text: "Consumer survey of 180 students and a break-even plan for a campus café." },
  ],

  education: [
    { degree: "MBA, Finance & Marketing", school: "Example School of Business, Bengaluru", when: "2024 – 2026", note: "CGPA 8.4 / 10" },
    { degree: "B.Com (Honours)", school: "Example College of Commerce", when: "2021 – 2024", note: "82%" },
  ],

  skills: ["Financial modelling", "Excel & Power Query", "Power BI", "Market research", "Digital marketing", "Presentations"],
  certifications: ["NISM Series V-A: Mutual Fund Distributors", "Google Digital Marketing (online)", "Financial Modelling Basics (online)"],
  achievements: ["1st place, inter-college case study contest 2025", "Finance club coordinator, 2025–26"],
  languages: ["English", "Hindi", "Malayalam", "Kannada (basic)"],

  footerNote: "Demo resume website. Priya Nair is a fictional person.",
};
