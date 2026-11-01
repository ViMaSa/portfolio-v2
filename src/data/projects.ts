export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  details: string;
  highlights: string[];
  stack: string[];
  status: "Shipped" | "In progress" | "Academic";
  category: "Professional" | "Academic" | "Independent";
  repo?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "homesavvydeals",
    title: "HomeSavvyDeals",
    eyebrow: "Production product engineering",
    summary: "Search and product-discovery workflows for a live affiliate-commerce application.",
    details: "Full-stack contract work connecting product-selection UI to search-intent classification, relational data and reusable database operations.",
    highlights: ["Developed a configurable Next.js product-selection pipeline", "Implemented database-backed search and product-discovery workflows", "Shipped production changes across UI, data and deployment layers"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Vercel"],
    status: "Shipped",
    category: "Professional",
    demo: "https://homesavvydeals.com",
  },
  {
    slug: "rebelhacks",
    title: "RebelHacks Portal",
    eyebrow: "Software engineering internship",
    summary: "Contributing to a participant-management and hackathon workflow platform.",
    details: "Collaborative work for the UNLV RebelHacks event, including registration and workflows that support participants and organizers. Ongoing work should be presented as in progress.",
    highlights: ["Collaborating within a student engineering team", "Working on participant registration and university-email validation", "Contributing to a PHP/Symfony application"],
    stack: ["PHP", "Symfony", "Twig", "MariaDB", "Git"],
    status: "In progress",
    category: "Professional",
  },
  {
    slug: "host",
    title: "H.O.S.T.",
    eyebrow: "Hotel Operations Service Ticketing",
    summary: "Role-based service-ticket management inspired by hotel operations.",
    details: "A web application for recording, assigning, tracking and resolving service tickets with authentication and workflow modeling.",
    highlights: ["Built role-aware service-ticket workflows", "Designed REST APIs and relational ticket data", "Implemented JWT-based authentication"],
    stack: ["Node.js", "Express", "PostgreSQL", "JWT", "Web UI"],
    status: "Shipped",
    category: "Independent",
    repo: "https://github.com/ViMaSa/hotel-operations-service-ticketing",
  },
  {
    slug: "f1tenth",
    title: "Autonomous Racing (F1TENTH)",
    eyebrow: "UNLV autonomous systems",
    summary: "ROS 2 autonomous-driving algorithms and sensor-driven vehicle control.",
    details: "Academic autonomous racing work using LiDAR sensor processing, waypoint tracking and control-parameter tuning.",
    highlights: ["Implemented and tuned autonomous-driving behaviors", "Worked with ROS 2 and sensor processing", "Reduced fastest lap time by 27% between recorded trials"],
    stack: ["Python", "ROS 2", "LiDAR", "Control Systems"],
    status: "Academic",
    category: "Academic",
  },
];

export function findProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
