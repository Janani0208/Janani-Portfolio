const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Internships",
    link: "#Internships",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Achievements",
    link: "#Achievements",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Industry Internships Completed" },
  { value: 20, suffix: "+", label: "Completed Projects" },
  { value: 7, suffix: "+", label: "Certifications Earned" },
  { value: 100, suffix: "%", label: "Commitment to Learning & Innovation" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Precision in Code",
    desc: "Writing clean, efficient, and scalable code that brings complex ideas to life.",
  },
  {
    imgPath: "/images/chat.png",
    title: "AI-Powered Thinking",
    desc: "Blending intelligence with technology to build smarter digital experiences.",
  },
  {
    imgPath: "/images/time.png",
    title: "Seamless Design",
    desc: "Crafting interactive, user-friendly interfaces that enhance engagement and usability.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "AI/Python  Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Version Control",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "AI/Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Version Control",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Janani brought both clarity and technical depth to our AI initiatives. The internal AI assistant she deployed improved workflow speed and information accessibility, quickly becoming a valuable tool for the team.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "AI Developer",
    date: "Support Studio Technologies | Jun 2025 – Aug 2025",
    responsibilities: [
      "Deployed an internal AI assistant using FastAPI, LangChain, LangGraph, MongoDB, and React, cutting manual lookup time by 40% through RAG-based retrieval.",
      "Introduced automated query handling for frequently accessed data, improving information accessibility by 35%.",
      "Strengthened long-term scalability via persistent storage and modular architecture.",
    ],
  },
  {
    review: "Janani demonstrated strong backend engineering fundamentals and attention to system reliability. Her optimizations for API performance and refactoring work improved overall stability and reduced response latency across services.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Back-End Developer",
    date: "Valvenet Technologies | Mar 2024",
    responsibilities: [
      "Tuned Java-based backend services and REST APIs, lowering response latency and accelerating throughput by 25%.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Collaborated on structured refactoring to stabilize backend logic, cutting production defects by 20%.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Vice President",
    mentions: "@LiteratureClubRGCET",
    review:
      "Encouraged creative expression and teamwork through events, debates, and writing contests. Led the club's core team, mentored junior members, and coordinated inter-department literary activities that boosted student participation and collaboration across the campus.",
    imgPath: "/images/client1.png",
  },
  {
  name: "Sports Coordinator – Women’s Carrom",
  mentions: "@Sparta 2K25",
  review:
    "Coordinated the women’s carrom division during Sparta 2K25, managing scheduling, match lineup, and participation for 50+ players. Also represented the event as a participant and secured awards through performance.",
  imgPath: "/images/client3.png",
  },
  {
    name: "Overall Coordinator",
    mentions: "@Comfiesta'23",
    review:
      "Managed the entire college technical symposium, overseeing 20+ events and 50+ volunteers. Handled end-to-end planning, sponsorships, and execution ensuring smooth operations and high engagement from 500+ participants.",
    imgPath: "/images/client2.png",
  },
  {
  name: "Sports Coordinator – Women’s Chess",
  mentions: "@Sparta 2K24",
  review:
    "Coordinated the women’s chess event during Sparta 2K24, managing scheduling and participation for 30+ players. Additionally competed in both chess and carrom, securing 1st place finishes in the intra-college tournament.",
  imgPath: "/images/client4.png",
  },
  {
  name: "Technical Event Winner – Test Your Memory",
  mentions: "@Christ Tech-2K23",
  review:
    "Represented the college at Christ Tech 2K23 and secured 1st place in the 'Test Your Memory' technical event. Demonstrated quick recall, analytical focus, and competitive performance in an inter-college setting.",
  imgPath: "/images/client5.png",
  },
  {
  name: "Event Lead – Squid Game",
  mentions: "@ReCofes 2K25",
  review:
    "Served as Event Lead for the Squid Game challenge at ReCofes 2K25, handling both planning and on-ground execution. Managed 100+ participants, ensuring smooth coordination, fair play, and high engagement throughout the event.",
  imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
