import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import { projects } from "@/data/projects";

export default function HomePage() {
  return <main>
    <section className="hero container-wide">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow"><span className="status-dot"/> SOFTWARE ENGINEER · BUILDING WHAT&apos;S NEXT</p>
        <h1>Software engineer.<br/>Curious <span className="gradient-text">builder.</span><br/>Lifelong learner.</h1>
        <p className="hero-description">I&apos;m Victor. I build practical software across web applications, APIs, and data workflows—and I like turning interesting ideas into things people can actually use.</p>
        <div className="actions"><Link className="button-primary" href="/projects">View my work <span aria-hidden="true">↗</span></Link><Link className="button-outline" href="/about">Get to know me</Link></div>
        <div className="social-links"><a href="https://github.com/ViMaSa" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/vimasa/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><Link href="/connect">Contact ↗</Link></div>
      </div>
      <div className="hero-visual" aria-label="Stylized preview of Victor's engineering work">
        <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
        <div className="floating-panel panel-code"><div className="code-dots"><i/><i/><i/></div><code><span className="muted">// What I'm building</span><br/><span className="blue">const</span> work = &#123;<br/>  focus: <span className="green">&quot;real problems&quot;</span>,<br/>  approach: <span className="green">&quot;keep learning&quot;</span>,<br/>  mindset: <span className="green">&quot;ship it&quot;</span><br/>&#125;;</code></div>
        <div className="floating-panel panel-stats"><span className="eyebrow">CURRENTLY</span><strong>Building & learning</strong><span>Next.js · APIs · Systems</span></div>
        <div className="hero-orbit-label">ViMaSa.dev / 2026</div>
      </div>
    </section>

    <div className="container-wide highlights"><div><strong>3+ years</strong><span>Production engineering</span></div><div><strong>Full-stack</strong><span>UI · API · Data</span></div><div><strong>UNLV</strong><span>B.S. Computer Science · Dec 2026</span></div><div><strong>Always building</strong><span>Professional work and side projects</span></div></div>

    <section className="section container-wide"><SectionHeader eyebrow="01 / THE WORK" title="Selected projects" description="Real software, real decisions, and some interesting experiments." href="/projects" linkLabel="View all projects"/><div className="project-grid">{projects.slice(0,3).map(project=><ProjectCard key={project.slug} project={project}/>)}</div></section>

    <section className="section container-wide"><div className="feature-split"><div><p className="eyebrow">02 / BEYOND THE CODE</p><h2>More than a <span className="gradient-text">résumé.</span></h2><p>Software is what I build. Hockey, gaming, anime, fitness, and time with the people I care about are part of what makes me me.</p><Link className="button-outline" href="/about">Read my story ↗</Link></div><div className="feature-cards"><Link href="/playground"><span className="feature-symbol">✦</span><strong>My playground</strong><span>Interactive ideas, stats, and games. Coming together one experiment at a time.</span></Link><Link href="/connect"><span className="feature-symbol">↗</span><strong>Stay connected</strong><span>Professional updates, LinkedIn highlights and ways to reach me.</span></Link></div></div></section>

    <section className="container-wide section"><div className="cta-panel"><div><p className="eyebrow">HAVE SOMETHING IN MIND?</p><h2>Let&apos;s build something good.</h2><p>Open to engineering opportunities, collaborations, and thoughtful conversations.</p></div><Link href="/connect" className="button-primary">Get in touch ↗</Link></div></section>
  </main>;
}
