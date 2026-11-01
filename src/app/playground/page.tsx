import type { Metadata } from "next";

export const metadata: Metadata = { title: "Playground" };

const modules = [
  { symbol: "⚽", title: "Car Soccer Challenge", status: "Planned", desc: "A short, original car-soccer-inspired mini-game. Try to beat my score in 30 seconds." },
  { symbol: "▤", title: "Gaming Profile", status: "Planned", desc: "Compare public supported-game statistics and discover what we have in common." },
  { symbol: "🏈", title: "Fantasy Football", status: "Planned", desc: "Season stats and selected Sleeper league highlights, displayed from cached data." },
  { symbol: "✦", title: "Anime Shelf", status: "Planned", desc: "Favorite shows, personal rankings, and a watchlist worth talking about." },
  { symbol: "◇", title: "DriftSync", status: "Future separate app", desc: "Are we drift compatible? A squad-chemistry project with invited groups and playstyle matching." },
];

export default function PlaygroundPage() {
  return <main className="container-wide page"><header className="page-header"><p className="eyebrow">THE EXPERIMENTS</p><h1>My digital <span className="gradient-text">playground.</span></h1><p>A slightly less serious corner of the internet, where gaming, data, and interesting engineering ideas come together.</p></header><div className="playground-grid">{modules.map(item=><article className="playground-card" key={item.title}><div className="playground-symbol" aria-hidden="true">{item.symbol}</div><div><span className="status-chip">{item.status}</span><h2>{item.title}</h2><p>{item.desc}</p></div></article>)}</div><div className="note">These are planned integrations and experiments, not live features yet. The professional pages work independently of third-party APIs.</div></main>;
}
