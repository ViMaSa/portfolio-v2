import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "About Me" };
const interests = [
  { symbol: "◈", title: "Hockey", desc: "Vegas Golden Knights fan and a big believer in team chemistry." },
  { symbol: "◎", title: "Gaming", desc: "Competition, creativity, late-night squad sessions, and a lot of learning." },
  { symbol: "✧", title: "Anime", desc: "Stories and characters that inspire conversation and imagination." },
  { symbol: "↑", title: "Fitness", desc: "Showing up, getting a little better, and enjoying the process." },
];

export default function AboutPage() {
  return <main className="container-wide page"><header className="page-header"><p className="eyebrow">MORE THAN CODE</p><h1>Beyond the <span className="gradient-text">editor.</span></h1><p>There&apos;s more to me than my GitHub profile. Here&apos;s the human behind the work.</p></header><section className="feature-split about-split"><div><h2>A winding path, on purpose.</h2><p>I took a break from school, spent time supporting people who mattered to me, and returned with a clearer sense of what I wanted to build. That experience changed the way I see learning, success, and growth.</p><p>Today I&apos;m finishing my Computer Science degree at UNLV while working on projects that solve real problems. I value curiosity, teamwork, and engineering that holds up in the real world.</p><Link className="button-outline" href="/experience">Explore my experience ↗</Link></div><div className="story-art"><span className="eyebrow">MY WORKING PHILOSOPHY</span><blockquote>Build with intention.<br/>Stay curious.<br/><span className="gradient-text">Keep showing up.</span></blockquote><p>Every project is a chance to learn something new.</p></div></section><section className="section"><div className="section-heading"><div><p className="eyebrow">OUTSIDE THE IDE</p><h2>Things I&apos;m into</h2><p className="section-subtitle">The interests that keep life interesting.</p></div></div><div className="interest-grid">{interests.map(item=><div key={item.title} className="interest-card"><span>{item.symbol}</span><h3>{item.title}</h3><p>{item.desc}</p></div>)}</div></section><section className="cta-panel"><div><p className="eyebrow">JUST FOR FUN</p><h2>Curious what else I&apos;m building?</h2><p>The Playground is where games, data, and experiments meet.</p></div><Link className="button-primary" href="/playground">Explore the playground ↗</Link></section></main>;
}
