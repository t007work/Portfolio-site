export const contact = {
  email: "siripochareddy@gmail.com",
  linkedin: "https://linkedin.com/in/pochareddysiri",
  location: "Singapore",
};

export const aboutText =
  "Hi, I am Siri, a Year 2 Business Administration student at Singapore Polytechnic with distinctions in Accounting and A's in Economics, Statistics, and Data Analytics. I work hard and strive for perfection in every task I'm given, whether it's balancing complex accounting entries or designing social media content that actually gets people to stop scrolling.
I'm meticulous and detail-oriented, always looking over and beyond to achieve successful outcomes. My failures don't discourage me – they show me exactly where I went wrong so I can improve and do better the next time. That cycle of learning and improving is what keeps me motivated.
I take constructive criticism well and use it as motivation to do better. Whether it's feedback from professors on my projects or insights from teammates during group work, I use every piece of input to refine my approach and deliver stronger results.
My experience in leadership roles has taught me that responsibility isn't just about completing your own tasks – it's about ensuring the entire team succeeds. I combine analytical thinking with creative problem-solving, making me effective at both number-crunching and coming up with fresh ideas for projects and presentations.
  ";

export const skills = {
  // Logo wall (original brand SVGs in /public/icons)
  technicalLogos: [
    { src: "/icons/Excel.svg", alt: "Microsoft Excel", href: "https://www.microsoft.com/excel" },
    { src: "/icons/powerpoint.svg", alt: "Microsoft PowerPoint", href: "https://www.microsoft.com/powerpoint" },
    { src: "/icons/word.svg", alt: "Microsoft Word", href: "https://www.microsoft.com/word" },

    { src: "/icons/teams.svg", alt: "Microsoft Teams", href: "https://www.microsoft.com/microsoft-teams" },
    { src: "/icons/canva.svg", alt: "Canva", href: "https://www.canva.com" },
    { src: "/icons/photoshop.svg", alt: "Adobe Photoshop", href: "https://www.adobe.com/products/photoshop.html" },

    { src: "/icons/abss.webp", alt: "ABSS Accounting", href: "https://www.abss.com.sg/" }, // this will become the centered "1"
  ],

  // Detailed technical skills with per-item icon (used by <TechnicalSkills/>)
  technicalDetailed: [
    { label: "Excel — VLOOKUP, PivotTables, complex formulas", icon: "/icons/excel.svg" },
    { label: "PowerPoint — executive decks, visual structure", icon: "/icons/powerpoint.svg" },
    { label: "Word — reports & documentation", icon: "/icons/word.svg" },
    { label: "Teams — collaboration & meetings", icon: "/icons/teams.svg" },
    { label: "Canva — advanced layouts & social content", icon: "/icons/canva.svg" },
    { label: "Photoshop — intermediate image editing", icon: "/icons/photoshop.svg" },
    { label: "ABSS — accounting entry & reconciliation", icon: "/icons/abss.webp" },
  ],

  // Marketing / Creative
  marketing_creative: [
    "Content Strategy — Planning, Visual Storytelling, Brand Consistency",
    "Campaign Development — Research, Audience Targeting, ROI",
    "Event Coordination — Pop-up Planning, Vendor & Customer Engagement",
    "Visual Design — Posters, Digital Graphics, Brand Identity",
    "Video — Promotional Content, BTS Documentation",
  ],

  // Soft Skills
  soft: [
    "Leadership & Mentoring — Guidance, Conflict Resolution, Performance",
    "Communication — Public Speaking, Client Relations, Cross-cultural",
    "Creative Problem-Solving — Innovation, Adaptability, Strategy",
    "Professional Diplomacy — Stakeholders, Feedback, Coordination",
    "Organizational — Multitasking, Deadlines, Process Optimization",
  ],
};


export const academics = [
  {
    school: "Singapore Polytechnic — Business Administration (2024–2027)",
    bullets: [
      "Accounting: Distinction",
      "Economics: A",
      "Statistics: A",
      "Data Analytics: A",
      "Current: Year 2 | Expected Graduation: 2027",
    ],
  },
  {
    school: "Changkat Changi Secondary School — O-Level (2020–2023)",
    bullets: ["O-Level Certification (Dec 2023)", "Duration: 4 Years"],
  },
];

export const certifications = [
  "Learning LinkedIn for Students — LinkedIn Learning",
  "[Additional Marketing/Analytics Certifications — To be added]",
];

export const awards = [
  "Edusave Character Award (2022)",
  "Edusave Achievement Award (2022)",
  "Outstanding Service Award — Modern Dance (2022)",
  "Class Committee Member",
  "Accounting Distinction — Singapore Polytechnic",
];

export const experience = [
  {
    title: "Student Care Programme Staff (Teacher)",
    org: "Little Professors Learning Centre",
    time: "Feb 2024 — Present",
    summary:
      "Manage 25+ primary students daily, developing calm discipline, engaging study routines, and professional parent communication; adapt strategies to diverse personalities, building leadership, patience, and composure.",
  },
];

export const projects = [
  {
    title: "Business Essentials in Action (BETA) — Marketing Lead & 2IC",
    subtitle: "Launched a real gift bundle micro-business (6 months)",
    bullets: [
      "Designed social campaigns (Canva) that converted to pop-up sales (sold out inventory)",
      "Balanced creative vision with budgets; coordinated with department leads",
      "Handled vendor invoices, tracked spend, and iterated on messaging based on feedback",
    ],
    skills: [
      "Invoice & Vendor Coordination",
      "Social Media Strategy",
      "Visual Design",
      "Customer Engagement",
      "Team Management",
    ],
    takeaway:
      "Real-world business required diplomacy, adaptability, and turning feedback into action — beyond classroom theory.",
  },
  {
    title: "Financial Systems Analysis Project — Team Lead",
    subtitle: "Processed realistic messy accounting docs in ABSS",
    bullets: [
      "Specialized in invoice reconciliation; ensured every transaction had a clear trail",
      "Led multiple review cycles until trial balance was perfect",
      "Achieved A grade for accuracy & process discipline",
    ],
    skills: [
      "Invoice Management",
      "ABSS Proficiency",
      "Attention to Detail",
      "Quality Assurance",
      "Collaborative Problem-Solving",
    ],
    takeaway:
      "Precision in finance isn’t perfectionism — it’s professional necessity.",
  },
];
export const heroImage = {
  src: "/hero.jpg", // put your photo at public/hero.jpg (1200x1500+ looks great)
  alt: "Siri Pochareddy portrait",
};

