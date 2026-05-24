export const navItems = [
  { name: "Top", link: "#top" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

export const aboutMe = {
  name: "Marwen Rabai",
  title: "Serial Entrepreneur | Founder of Cristi Labs, Cristi Aura & TEMF | Digital Marketing & SEO Strategist",
  description: "Marwen Rabai is a visionary serial entrepreneur and Digital Marketing & SEO Strategist with over 14 years of experience building transformative ventures across North Africa and beyond. He is the Founder of Cristi Labs (cristilabs.net), an innovation-driven technology lab pushing the boundaries of digital creation, and the Founder of Cristi Aura (dealroom.cristilabs.net), a next-generation platform redefining personal branding and user experience. As Founder & CEO of Uber Sand Food, Marwen pioneered a bold food delivery concept tailored to the North African market. He is also the Founder and Organizer of the Tunisia Electronic Music Festival (TEMF), one of North Africa's most celebrated electronic music events, bridging culture, technology, and entertainment on an international stage. As General Manager at Oasis of Artis in Tunis, Marwen has consistently demonstrated executive-level leadership — combining creative vision with strategic execution. His expertise spans SEO, content creation, event production, app development, and brand strategy, all anchored by a deep passion for innovation and a relentless commitment to excellence. Fluent in English, French, and Arabic, he connects with global audiences while remaining deeply rooted in North African culture.",
  experience: "14+ years",
  location: "North Africa",
  languages: ["English", "French", "Arabic"],
  hobbies: ["Swimming", "Football", "Golfing"]
};

export const gridItems = [
  {
    id: 1,
    title: "DIGITAL MARKETING SPECIALIST",
    description: "14+ years of experience in SEO, content creation, and digital strategy",
    className: "lg:col-span-3 md:col-span-6 md:row-span-2 lg:min-h-[60vh]",
    ImageClassName: "w-full h-full",
    titleClassName: "justify-end",
    Image: "/premium/modern-office.jpg",
    spareImage: "",
  },
  {
    id: 2,
    title: "EVENT ORGANIZER",
    description: "Crafting impactful events and experiences with innovative strategies",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    ImageClassName: "",
    titleClassName: "justify-start",
    Image: "",
    spareImage: "",
  },
  {
    id: 3,
    title: "SEO EXPERT",
    description: "Advanced SEO techniques and digital visibility optimization",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    ImageClassName: "",
    titleClassName: "justify-center",
    Image: "",
    spareImage: "",
  },
  {
    id: 4,
    title: "LEADERSHIP & MANAGEMENT",
    description: "General Manager at Oasis of Artis, Founder & CEO of Uber Sand Food",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 object-cover",
    ImageClassName: "",
    titleClassName: "justify-start",
    Image: "/premium/analytics-dashboard.jpg",
    spareImage: "",
  },

  {
    id: 5,
    title: "CONTENT CREATION",
    description: "Strategic content development and user-centric digital experiences",
    className: "md:col-span-3 md:row-span-2",
    ImageClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    Image: "/premium/luxurious-abstract.jpg",
    spareImage: "",
  },
];

export const icons = {
  // Digital Marketing & SEO
  "Google Analytics": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  "SEMrush": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  "Google Ads": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  
  // Programming Languages
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",

  // Frameworks & Libraries
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "React Native": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "WordPress": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  
  // AI & Cloud
  "OpenAI": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg",
  "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  
  // Tools
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  NPM: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
};

export const projects = [
  {
    id: 1,
    title: "NecibNexus.com",
    des: "A transformative web platform revolutionizing digital engagement with advanced SEO and a user-centric interface. NecibNexus drives unparalleled online visibility and interaction for businesses.",
    src: "/premium/tech-devices.jpg",
    iconLists: [
      icons["React"],
      icons["Node.js"],
      icons["SEMrush"],
    ],
    link: "https://necibnexus.com",
  },
  {
    id: 2,
    title: "CRIST-Aura",
    des: "A revolutionary app redefining user interaction through AI-driven personalization and cutting-edge UX. CRIST-Aura sets a new benchmark for intelligent mobile experiences and the art of being seen.",
    src: "/premium/Cr7 Cristi Aura Logo.jpg",
    iconLists: [
      icons["React Native"],
      icons["OpenAI"],
      icons["Firebase"],
    ],
    link: "https://crist-aura.com",
  },
  {
    id: 3,
    title: "Oasis of Artis Event Platform",
    des: "Designed a dynamic event management platform for Oasis of Artis, streamlining logistics and boosting attendance by 40%. The platform offers seamless user experiences for large-scale events.",
    src: "/premium/event-setup.jpg",
    iconLists: [
      icons["WordPress"],
      icons["Google Analytics"],
      icons["JavaScript"],
    ],
    link: "https://oasisofartis.com",
  },
  {
    id: 4,
    title: "Uber Sand Food Marketing Campaign",
    des: "Led a digital marketing campaign for Uber Sand Food, increasing brand reach by 50% through targeted SEO and content strategies. The campaign elevated customer engagement across North Africa.",
    src: "/premium/uber sand food.jpg",
    iconLists: [
      icons["SEMrush"],
      icons["Google Ads"],
      icons["Google Analytics"],
    ],
    link: "https://ubersandfood.com",
  },
];

export const skills = [
  {
    category: "Digital Marketing & SEO",
    items: ["Google Analytics", "SEMrush", "Google Ads", "Content Strategy", "SEO Optimization"]
  },
  {
    category: "Content Creation & Strategy",
    items: ["Content Marketing", "Copywriting", "Social Media Management", "Brand Strategy"]
  },
  {
    category: "Event Planning & Management",
    items: ["Event Coordination", "Logistics Management", "Venue Selection", "Attendee Engagement"]
  },
  {
    category: "Programming Languages",
    items: ["JavaScript", "Python", "HTML/CSS", "React", "React Native"]
  },
  {
    category: "Leadership & Team Management",
    items: ["Team Leadership", "Project Management", "Strategic Planning", "Client Relations"]
  },
  {
    category: "UI/UX Design",
    items: ["User Experience Design", "Interface Design", "Wireframing", "Prototyping"]
  },
  {
    category: "WordPress & CMS",
    items: ["WordPress Development", "Content Management", "Plugin Development", "Theme Customization"]
  },
  {
    category: "Problem Solving",
    items: ["Analytical Thinking", "Creative Solutions", "Data Analysis", "Performance Optimization"]
  }
];

export const Drawings = [
  {
    src: "/premium/modern-office.jpg",
  },
  {
    src: "/premium/analytics-dashboard.jpg"
  },
  {
    src: "/premium/tech-devices.jpg"
  },
  {
    src: "/premium/app-interface.jpg"
  },
  {
    src: "/premium/event-setup.jpg"
  }
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    Image: "/cloud.svg",
    nameImage: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    Image: "/app.svg",
    nameImage: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    Image: "/host.svg",
    nameImage: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    Image: "/s.svg",
    nameImage: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    Image: "/dock.svg",
    nameImage: "/dockerName.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    Image: "/git.svg",
    link: "https://github.com/Marwen-Rabai/"
  },
  {
    id: 2,
    Image: "/link.svg",
    link: "https://www.linkedin.com/in/marwen-rabai/"
  },
  {
    id: 3,
    Image: "/wha.svg",
    link: "tel:213794236519"
  },
  {
    id: 4,
    Image: "/insta.svg",
    link: "https://www.instagram.com/marwen_rabai?igsh=bmsybW5za2Y1Ynl2"
  },
];

// Update the hero description
export const heroDescription = "Crafting premium digital experiences and unforgettable events with 14+ years of expertise spanning the globe";
