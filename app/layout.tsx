import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tekover — Freelance Data & AI Studio",
  description: "Tekover builds data analytics, machine learning, and Gen AI solutions for startups and enterprises. Based in Pune, India.",
  keywords: ["data analytics", "machine learning", "gen ai", "data science", "freelance", "tekover"],
  openGraph: {
    title: "Tekover — Freelance Data & AI Studio",
    description: "Turn your data into decisions. Expert freelance analytics, ML, and AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
