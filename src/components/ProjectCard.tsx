import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-art" aria-hidden="true"><span>{project.title === "H.O.S.T." ? "HOST" : project.title === "RebelHacks Portal" ? "RH" : project.title === "HomeSavvyDeals" ? "HSD" : "F1"}</span><div className="project-art-ring"/></div>
      <div className="project-card-body">
        <div className="card-heading"><span className="eyebrow">{project.eyebrow}</span><span className="status-chip">{project.status}</span></div>
        <h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3>
        <p>{project.summary}</p>
        <div className="tech-tags">{project.stack.slice(0, 4).map(tech => <span key={tech}>{tech}</span>)}</div>
        <Link className="text-link" href={`/projects/${project.slug}`}>View case study <span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  );
}
