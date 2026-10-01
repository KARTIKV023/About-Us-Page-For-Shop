
import type { Metadata } from "next";
import { Anton, Poppins } from "next/font/google";
import { company, seo } from "@/content/about";
import Hero from "@/components/about/Hero";
import WhyExists from "@/components/about/WhyExists";
import Idea from "@/components/about/Idea";
import Need from "@/components/about/Need";
import Partner from "@/components/about/Partner";
import Belief from "@/components/about/Belief";
import Future from "@/components/about/Future";
import PromisePanel from "@/components/about/Promise";

const heading = Anton({ weight: "400", subsets: ["latin"], variable: "--font-heading", display: "swap" });
const body = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  alternates: { canonical: seo.url },
  openGraph: { title: seo.title, description: seo.description, url: seo.url, siteName: company.name, type: "website", images: [{ url: seo.ogImage, width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: seo.title, description: seo.description, images: [seo.ogImage] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "AboutPage", name: seo.title, url: seo.url, description: seo.description },
    { "@type": "Organization", name: company.name, url: company.url, logo: `${company.url}${company.logo}`, foundingDate: company.founded, slogan: company.tagline, address: { "@type": "PostalAddress", addressLocality: "Kanpur", addressCountry: "IN" } },
  ],
};

export default function AboutPage() {
  return (
    <main className={`${heading.variable} ${body.variable} font-[family-name:var(--font-body)] text-ink antialiased`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <WhyExists />
      <Idea />
      <Need />
      <Partner />
      <Belief />
      <Future />
      <PromisePanel />
    </main>
  );
}
