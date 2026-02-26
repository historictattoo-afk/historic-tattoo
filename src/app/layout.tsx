import type { Metadata } from "next";
import { Oswald, Inter, UnifrakturCook } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500"],
});

const unifraktur = UnifrakturCook({
  subsets: ["latin"],
  variable: "--font-blackletter",
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Historic Tattoo | Traditional American Tattoo Shop — Portland, OR",
  description:
    "Portland's #1 traditional American tattoo shop since 2007. Walk-ins welcome daily 11am–7pm at 2001 SE 50th Ave, SE Portland. Home of Get What You Get, Tattoo Plinko, and 1,000s of hand-painted flash designs.",
  keywords: [
    "tattoo shop Portland Oregon",
    "traditional American tattoo Portland",
    "get what you get tattoo",
    "tattoo plinko Portland",
    "historic tattoo Portland",
    "SE Portland tattoo shop",
    "walk-in tattoo Portland",
    "flash tattoo Portland",
    "best tattoo shop Portland",
    "tattoo near me Portland",
  ],
  openGraph: {
    title: "Historic Tattoo | Traditional American Tattoos — Portland, OR",
    description:
      "Portland's home of traditional American tattooing since 2007. Walk-ins welcome daily 11am–7pm. Home of Get What You Get & Tattoo Plinko.",
    url: "https://historictattoo.com",
    siteName: "Historic Tattoo",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1494189325899-CI4BWN033NVOAAPGTGM5/Historic+Tattoo?format=1500w",
        width: 1200,
        height: 630,
        alt: "Historic Tattoo — Portland, OR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Historic Tattoo | Traditional American Tattoos — Portland, OR",
    description: "Portland's home of traditional American tattooing since 2007. Walk-ins welcome daily 11am–7pm.",
  },
  alternates: {
    canonical: "https://historictattoo.com",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  name: "Historic Tattoo",
  alternateName: "Historic Tattoo Portland",
  description:
    "Portland's home of traditional American tattooing since 2007. Over 17 years in business with 109 years of combined artist experience. Home of the Get What You Get and Tattoo Plinko experiences. Thousands of hand-painted flash designs plus custom work. Walk-ins welcome daily.",
  url: "https://historictattoo.com",
  logo: "https://historictattoo.com/logo.png",
  image: "https://historictattoo.com/logo.png",
  telephone: "+15032363440",
  email: "historictattoo@gmail.com",
  foundingDate: "2007",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2001 SE 50th Ave",
    addressLocality: "Portland",
    addressRegion: "OR",
    postalCode: "97215",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.5056,
    longitude: -122.6082,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "11:00",
      closes: "19:00",
    },
  ],
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card",
  sameAs: [
    "https://www.instagram.com/historictattoo/",
    "https://www.yelp.com/biz/historic-tattoo-portland",
    "https://historictattoopdx.wordpress.com/",
  ],
  hasMap: "https://maps.google.com/?q=2001+SE+50th+Ave,+Portland,+OR+97215",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    reviewCount: "86",
    bestRating: "5",
    worstRating: "1",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Walk-ins Welcome", value: true },
    { "@type": "LocationFeatureSpecification", name: "Appointments Available", value: true },
    { "@type": "LocationFeatureSpecification", name: "Flash Tattoos", value: true },
    { "@type": "LocationFeatureSpecification", name: "Custom Tattoos", value: true },
  ],
  areaServed: [
    { "@type": "City", name: "Portland", "@id": "https://en.wikipedia.org/wiki/Portland,_Oregon" },
    { "@type": "State", name: "Oregon" },
  ],
  knowsAbout: [
    "Traditional American Tattoo",
    "Flash Tattoo",
    "Get What You Get Tattoo",
    "Tattoo Plinko",
    "Custom Tattoo Design",
  ],
  makesOffer: [
    {
      "@type": "Offer",
      name: "Get What You Get Tattoo",
      price: "100.00",
      priceCurrency: "USD",
      description: "Buy a token, spin the wheel, walk out with a traditional American tattoo. Every result is a winner.",
    },
    {
      "@type": "Offer",
      name: "Get What You Get Deluxe",
      price: "200.00",
      priceCurrency: "USD",
      description: "Same game, bigger canvas. A larger, bolder traditional piece from our extended flash collection.",
    },
    {
      "@type": "Offer",
      name: "Tattoo Plinko",
      price: "200.00",
      priceCurrency: "USD",
      description: "Drop the puck, let physics decide. Portland's most dramatic tattoo experience.",
    },
  ],
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sarah M." },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      reviewBody: "Got a walk-in traditional rose from Craig and it's the best tattoo I own. The shop has incredible energy — everyone is welcoming and professional. Will be back.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Jake T." },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      reviewBody: "Did the Get What You Get on a whim and got an anchor. Couldn't be happier. The whole experience is just fun — these guys clearly love what they do.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Megan R." },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      reviewBody: "Historic Tattoo is a Portland institution. I've gotten three tattoos here and every single one is exactly what traditional American tattooing should look like. Go here.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable} ${unifraktur.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
