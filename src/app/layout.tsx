import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Victor Sarmiento | Software Engineer", template: "%s | ViMaSa.dev" },
  description: "Software engineer building practical, full-stack software and exploring the ideas behind it.",
  metadataBase: new URL("https://vimasa.dev"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader />{children}<SiteFooter /></body></html>;
}
