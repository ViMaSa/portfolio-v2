import type { Metadata } from "next";

export const metadata: Metadata = { title: "Experience" };

const roles = [
  { title: "Contract Software Engineer", organization: "HomeSavvyDeals", date: "2025 – Present", body: "Delivering full-stack product-discovery functionality using Next.js, PostgreSQL/Supabase and reusable data workflows." },
  { title: "Software Engineering Intern", organization: "RebelHacks · UNLV Software Engineering Club", date: "2026 – Present", body: "Collaborating on registration and event workflows for a participant-management and judging platform." },
  { title: "Software Engineer", organization: "Silversheet", date: "2019 – 2021", body: "Built production React/Ruby on Rails workflows, supported relational data and cloud storage, and investigated production issues." },
];

export default function ExperiencePage() {
  return <main className="container-wide page narrow-page"><header className="page-header"><p className="eyebrow">THE BACKGROUND</p><h1>My engineering <span className="gradient-text">journey.</span></h1><p>Production software, practical systems thinking, and the work that shaped how I approach engineering.</p></header><div className="timeline">{roles.map(role=><article className="timeline-item" key={role.organization}><div className="timeline-marker"/><div><span className="eyebrow">{role.date}</span><h2>{role.title}</h2><h3>{role.organization}</h3><p>{role.body}</p></div></article>)}</div><section className="detail-panel"><p className="eyebrow">EDUCATION</p><h2>University of Nevada, Las Vegas</h2><p>Bachelor of Science in Computer Science · Expected December 2026</p><p className="muted-copy">Selected work: autonomous racing, operating systems, algorithms, databases and cloud computing.</p></section><section className="detail-panel"><p className="eyebrow">TOOLS AND TECHNOLOGIES</p><h2>What I build with</h2><div className="tech-tags large-tags">{["TypeScript", "JavaScript", "Python", "Ruby", "C++", "React", "Next.js", "Ruby on Rails", "Node.js", "PostgreSQL", "Supabase", "AWS S3", "Git", "CI/CD"].map(t=><span key={t}>{t}</span>)}</div></section></main>;
}
