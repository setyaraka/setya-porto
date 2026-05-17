import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Setya Pangga Raka Pangestu | Frontend-Focused Software Engineer",
  description:
    "Premium portfolio for a frontend-focused fullstack software engineer building fintech, B2B SaaS, AI-powered applications, and secure file-sharing systems.",
  openGraph: {
    title: "Setya Pangga Raka Pangestu | Frontend-Focused Software Engineer",
    description:
      "Scalable software architecture, secure SaaS systems, fintech platforms, and AI-integrated applications.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
