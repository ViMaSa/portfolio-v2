import Link from "next/link";

export default function NotFound() {
  return <main className="container-wide page narrow-page"><header className="page-header"><p className="eyebrow">404</p><h1>Lost in the <span className="gradient-text">source.</span></h1><p>That page doesn&apos;t exist. Let&apos;s get you back on track.</p><Link className="button-primary" href="/">Back to homepage ↗</Link></header></main>;
}
