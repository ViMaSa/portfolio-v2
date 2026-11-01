import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, findProject } from "@/data/projects";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);
  return { title: project?.title || "Project" };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) notFound();

  return <main className="container-wide page narrow-page"><Link className="text-link" href="/projects">← All projects</Link><header className="page-header"><p className="eyebrow">{project.eyebrow} · {project.status}</p><h1>{project.title}</h1><p>{project.summary}</p><div className="tech-tags">{project.stack.map(tech=><span key={tech}>{tech}</span>)}</div></header><section className="detail-panel"><p className="eyebrow">OVERVIEW</p><h2>Why this exists</h2><p>{project.details}</p><h2>Engineering highlights</h2><ul className="bullet-list">{project.highlights.map(item=><li key={item}>{item}</li>)}</ul><div className="actions">{project.demo && <a className="button-primary" href={project.demo} target="_blank" rel="noopener noreferrer">Visit live site ↗</a>}{project.repo && <a className="button-outline" href={project.repo} target="_blank" rel="noopener noreferrer">View repository ↗</a>}</div></section><div className="note">Case-study starter: add technical architecture diagrams, your role, tradeoffs, screenshots and verified outcomes as you expand the portfolio.</div></main>;
}
