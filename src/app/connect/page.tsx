import type { Metadata } from "next";

export const metadata: Metadata = { title: "Connect" };

const channels = [
  { name: "Email", label: "Send me a message", url: "mailto:sarmiv07@gmail.com", action: "Write an email ↗" },
  { name: "LinkedIn", label: "Career updates and conversations", url: "https://www.linkedin.com/in/vimasa/", action: "View profile ↗" },
  { name: "GitHub", label: "Projects and source code", url: "https://github.com/ViMaSa", action: "Explore GitHub ↗" },
];

export default function ConnectPage() {
  return <main className="container-wide page narrow-page"><header className="page-header"><p className="eyebrow">SAY HELLO</p><h1>Let&apos;s <span className="gradient-text">connect.</span></h1><p>Whether it&apos;s a job opportunity, a project idea, or a conversation about code and games, I&apos;d be glad to hear from you.</p></header><div className="connect-grid">{channels.map(channel=><a href={channel.url} target={channel.url.startsWith("http")?"_blank":undefined} rel={channel.url.startsWith("http")?"noopener noreferrer":undefined} className="connect-card" key={channel.name}><span className="eyebrow">{channel.name}</span><h2>{channel.label}</h2><span className="text-link">{channel.action}</span></a>)}</div><section className="detail-panel"><p className="eyebrow">UPDATES AND IDEAS</p><h2>What I&apos;ve been up to</h2><p>Coming soon: a curated highlight reel of LinkedIn posts about engineering projects, milestones, and what I&apos;m learning. Rather than slowing down this page with a live feed, featured links will remain fast and reliable.</p></section></main>;
}
