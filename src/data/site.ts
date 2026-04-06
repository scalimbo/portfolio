export const site = {
  name: "Sophia A. Calimbo",
  location: "Butuan City, Philippines",
  tagline: "Backend Developer | Web Developer | 3d Modeler",
  /** Optional: URL to profile image (e.g. /avatar.jpg). Leave empty for initials placeholder. */
  avatarUrl: "" as string | undefined,
  /** Show verified checkmark next to name */
  verified: true,
  /** Optional: Facebook profile URL – verified badge links here when set */
  facebookUrl: "https://www.facebook.com/sophia.acebes" as string | undefined,
  email: "sophiacalimbo@email.com",
  calendlyUrl: "https://calendly.com/sophiacalimbo/30min",
  blogUrl: "https://blog.yoursite.com",
  linkedin: "https://www.linkedin.com/in/s-calimbo-63a231328/",
  github: "https://github.com/scalimbo",
  instagram: "https://www.instagram.com/sophiacalimbo/",
};

export const heroBadges: { label: string; href: string; subtitle?: string }[] =
  [];

export const about = `We am a full-stack software engineer with hands-on experience in end-to-end product development, from requirements gathering and system planning to implementation, optimization, and long-term maintenance. I am currently part of ISySS-CDM, a three-year project where I work as a senior programmer and take on key responsibilities in data gathering, software development, architecture design, and making sure the codebase remains efficient, scalable, and maintainable as the project grows.

Beyond full-stack engineering, I also have a strong interest in immersive technologies and have previously contributed to a DOST-funded initiative, MARVELTechnologies, which focused on building AR/VR solutions through mining simulation use cases. That experience expanded my perspective on simulation-driven learning and interactive environments, and it strengthened my ability to design solutions across both traditional and emerging platforms.

I also work on mobile development using React Native and Flutter, and I continue to broaden my technical focus through DevOps automation, workflow improvement, and AI-powered solutions that help teams deliver faster, smarter, and with greater consistency.`;

export const experience = [
  {
    role: "BS Information Technology",
    company: "Caraga State University",
    year: "2019",
  },
  { role: "Hello World", company: "Started my coding journey", year: "2019" },
];

export const techStack = {
  frontend: [
    "JavaScript",
    "TypeScript",
    "Next.js",
    "Vue.js",
    "Flutter",
    "Dart",
  ],
  backend: ["Python", "PostgreSQL"],
  devops: ["GitHub Actions"],
  modeling: [
    "3D Modeling",
    "Blender",
    "Animation",
    "Texture Editing",
    "Rigging",
  ],
};

export const projects = [
  {
    name: "Trash Detector",
    description:
      "Detects different types of trash using AI and computer vision",
    url: "https://trash-detector.vercel.app/",
    domain: "trash-detector.vercel.app",
  },
  {
    name: "Taskhub",
    description: "Web-based task management application",
    url: "https://task-hub-two.vercel.app/",
    domain: "task-hub-two.vercel.app",
  },
  {
    name: "Rice Leaf Detector",
    description:
      "A mobile-based application that detects rice crop diseases from its leaf using AI and computer vision",
    url: "https://github.com/cindycariate/rice_detector",
    domain: "github.com/cindycariate/rice_detector",
  },
];

export const certifications: {
  name: string;
  issuer: string;
  href: string;
  year?: string;
}[] = [
  {
    name: "Course Completion Certificate in Introduction to HTML",
    issuer: "SoloLearn",
    href: "https://www.sololearn.com/certificates/CC-0QLK7ZKK",
  },
  {
    name: "Course Completion Certificate in Introduction to CSS",
    issuer: "SoloLearn",
    href: "#",
  },
  {
    name: "Course Completion Certificate in Introduction to SQL",
    issuer: "SoloLearn",
    href: "#",
  },
  {
    name: "Course Completion Certificate in Introduction to JavaScript",
    issuer: "SoloLearn",
    href: "https://www.sololearn.com/certificates/CC-LRWD1R1N",
  },
  {
    name: "Course Completion Certificate in Introduction to C",
    issuer: "SoloLearn",
    href: "https://www.sololearn.com/certificates/CC-ZBUWTXRX",
  },
  {
    name: "Course Completion Certificate in Introduction to Java",
    issuer: "SoloLearn",
    href: "https://www.sololearn.com/certificates/CC-XJUA2AHI",
  },
];

export const recommendations = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    author: "Cris Lawrence Adrian Militante",
    title: "ICT Director at GCM",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    author: "Ken Gorro",
    title: "Senior Developer at Fullscale",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    author: "Patrick Vince Velasco",
    title: "Software Engineer, YNS",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    author: "John Edmerson Pizarra",
    title: "Jr. Full-stack Developer, PocketDevs",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    author: "Glenn Pepito",
    title: "Professor at University of San Carlos",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    author: "Van Honoridez",
    title: "Application Development Analyst at Accenture",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    author: "Zinia Ma. Consuelo R. Trinidad",
    title: "Web Developer, Quickway Holdings Inc.",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    author: "Jomar Neri",
    title: "Full-stack Developer, Freelance",
  },
];

export const memberships = [
  {
    name: "Philippine Society of IT Educators – Caraga Chapter",
    href: "https://psite.org/",
  },
];
