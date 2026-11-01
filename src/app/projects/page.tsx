import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return <main className="container-wide page"><header className="page-header"><p className="eyebrow">THE WORK</p><h1>Things I&apos;ve <span className="gradient-text">built.</span></h1><p>Professional work, academic challenges, and independent projects. Select one to see the problem, approach and engineering decisions.</p></header><div className="project-grid">{projects.map(project=><ProjectCard key={project.slug} project={project}/>)}</div></main>;
}
