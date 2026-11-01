import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container-wide footer-inner">
        <div><strong>ViMaSa.dev</strong><p>Built with curiosity, for people and for the web.</p></div>
        <div className="footer-links">
          <Link href="/projects">Projects</Link>
          <Link href="/playground">Playground</Link>
          <a href="https://github.com/ViMaSa" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/vimasa/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        </div>
        <small>© {new Date().getFullYear()} Victor Sarmiento</small>
      </div>
    </footer>
  );
}
