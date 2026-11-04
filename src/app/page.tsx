import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import { projects } from "@/data/projects";
import ProfileHero from "@/components/ProfileHero";
import TechStack from "@/components/TechStack";

export default function HomePage() {
  return <main>
    <section className="hero container-wide">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow"><span className="status-dot"/> SOFTWARE ENGINEER · BUILDING WHAT&apos;S NEXT</p>
        <h1>Software engineer.<br/>Curious <span className="gradient-text">builder.</span><br/>Lifelong learner.</h1>
        <p className="hero-description">I&apos;m Victor. I build practical software across web applications, APIs, and data workflows—and I like turning interesting ideas into things people can actually use.</p>
        <div className="actions">
          <Link className="button-primary" href="/projects">
            View my work
            <span aria-hidden="true">↗</span>
          </Link>

          <Link className="button-outline" href="/about">
            Get to know me
          </Link>

          <a
            className="button-outline"
            href="/resume/Victor_Sarmiento_Resume.pdf"
            download="Victor_Sarmiento_Resume.pdf"
          >
            ↓ Download Résumé
          </a>
        </div>
        <div className="social-links">
          <a href="https://github.com/ViMaSa" target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
          <a href="https://www.linkedin.com/in/vimasa/" target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
          <Link href="/connect">
            Contact ↗
          </Link>
        </div>
        <div className="social-links"><a href="https://github.com/ViMaSa" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/vimasa/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><Link href="/connect">Contact ↗</Link></div>
      </div>
      <div className="hero-visual hero-photo-layout">
        <ProfileHero />

        <aside className="profile-side-info">
          <div className="profile-intro-card">
            <span className="profile-code-icon" aria-hidden="true">
              {"</>"}
            </span>

            <p>
              Building better solutions for tomorrow.
            </p>
          </div>

          <ul className="profile-details">
            <li>
              <span aria-hidden="true">🎓</span>
              UNLV Computer Science
            </li>

            <li>
              <span aria-hidden="true">📍</span>
              Las Vegas, NV
            </li>

            <li>
              <span aria-hidden="true">💻</span>
              Open to software engineering opportunities
            </li>
          </ul>
        </aside>
      </div>
    </section>

    <div className="container-wide highlights">
      <div>
        <strong>3+ years</strong>
        <span>Production engineering</span>
      </div>
      <div>
        <strong>Full-stack</strong>
        <span>UI · API · Data</span>
      </div>
      <div>
        <strong>UNLV</strong>
        <span>B.S. Computer Science · Dec 2026</span>
      </div>
      <div>
        <strong>Always building</strong>
        <span>Professional work and side projects</span>
      </div>
    </div>

    <TechStack />

    <section className="section container-wide">
      <SectionHeader
        eyebrow="01 / THE WORK"
        title="Selected projects"
        description="Real software, real decisions, and some interesting experiments."
        href="/projects"
        linkLabel="View all projects"
      />

      <div className="project-grid">
        {projects.slice(0,3).map(project=><ProjectCard key={project.slug} project={project}/>)}
      </div>
    </section>

    <section className="section container-wide">
      <div className="feature-split">
        <div>
          <p className="eyebrow">02 / BEYOND THE CODE</p>
          <h2>More than a <span className="gradient-text">résumé.</span></h2>
          <p>Software is what I build. Hockey, gaming, anime, fitness, and time with the people I care about are part of what makes me me.</p>
          <Link className="button-outline" href="/about">
            Read my story ↗
          </Link>
        </div>
        <div className="feature-cards">
          <Link href="/playground">
            <span className="feature-symbol">✦</span>
            <strong>My playground</strong>
            <span>Interactive ideas, stats, and games. Coming together one experiment at a time.</span>
          </Link>
          <Link href="/connect">
            <span className="feature-symbol">↗</span>
            <strong>Stay connected</strong>
            <span>Professional updates, LinkedIn highlights and ways to reach me.</span>
          </Link>
        </div>
      </div>
    </section>

    <section className="container-wide section">
      <div className="cta-panel">
        <div>
          <p className="eyebrow">
            HAVE SOMETHING IN MIND?
          </p>
          <h2>
            Let&apos;s build something good.
          </h2>
          <p>
            Open to engineering opportunities, collaborations, and thoughtful conversations.
          </p>
        </div>
      <Link href="/connect" className="button-primary">
        Get in touch ↗
      </Link>
      </div>
    </section>
  </main>;
}
