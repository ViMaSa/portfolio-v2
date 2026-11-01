"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/playground", label: "Playground" },
  { href: "/connect", label: "Connect" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container-wide header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)} aria-label="ViMaSa.dev home">
          <span className="brand-mark" aria-hidden="true">&lt;/&gt;</span>
          <span>ViMaSa<span className="brand-dot">.</span>dev</span>
        </Link>
        <button className="menu-button" type="button" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
        <nav id="main-navigation" aria-label="Primary navigation" className={`main-nav ${open ? "nav-open" : ""}`}>
          {links.map(({ href, label }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return <Link key={href} href={href} onClick={() => setOpen(false)} aria-current={active ? "page" : undefined} className={active ? "nav-link active" : "nav-link"}>{label}</Link>;
          })}
        </nav>
        <Link className="header-cta" href="/connect">Let&apos;s connect <span aria-hidden="true">↗</span></Link>
      </div>
    </header>
  );
}
