export const site = {
  name: "Sophia A. Calimbo",
  location: "Butuan City, Philippines",
  tagline: "Backend Developer | Web Developer | 3d Modeler",
  /** Optional: URL to profile image (e.g. /avatar.jpg). Leave empty for initials placeholder. */
  avatarUrl: "/gallery/profile.jpg" as string | undefined,
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

export const about = `I am a full-stack web developer with hands on experience in live website projects, planning necessities to implementation. I have also dabbled in mobile development using Flutter and Dart, and machine learning. 

Aside from coding, I am also interested and has minor experience in 3d modeling with Blender, 2d animation and drawing. These interests and experience helps me make better designs. And can be incorporated in my future goal of learning game development. 

I am eager to learn new and novel tech an apply it to my learning and projects.
`;

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
    name: "Society of Information Technology Students – Caraga State University (SITS-CSU)",
    href: "https://www.facebook.com/sites.csu",
  },
];

export const galleryImages: { src: string; alt: string }[] = [
  { src: "/gallery/c.png", alt: "C Programming" },
  { src: "/gallery/css.png", alt: "CSS" },
  { src: "/gallery/html.png", alt: "HTML" },
  { src: "/gallery/java.png", alt: "Java" },
  { src: "/gallery/Javascript.png", alt: "JavaScript" },
  { src: "/gallery/sql.png", alt: "SQL" },
  { src: "/gallery/thesis.jpg", alt: "Thesis Project" },
];
