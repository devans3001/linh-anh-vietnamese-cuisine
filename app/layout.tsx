import type { Metadata } from "next";
import { Be_Vietnam_Pro, Space_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { business } from "@/lib/data";

const display = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-display",
});
const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Linh Anh Vietnamese Cuisine — Phở Đặc Biệt, Scarborough",
  description:
    "Northern Vietnamese from Ha Long City, on Midland Avenue. The house special pho with bone marrow that Scarborough lines up for. Open every day 11 AM – 11 PM.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: business.fullName,
  servesCuisine: "Vietnamese",
  telephone: business.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    streetAddress: "3290 Midland Ave Unit 1",
    addressLocality: "Scarborough",
    addressRegion: "ON",
    postalCode: "M1V 4W8",
    addressCountry: "CA",
  },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.6", reviewCount: "3998" },
  openingHours: "Mo-Su 11:00-23:00",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
