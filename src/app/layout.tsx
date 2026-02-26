import type { Metadata } from "next";
import { Oswald, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Historic Tattoo | Traditional American Tattoos — Portland, OR",
  description:
    "Portland's home of traditional American tattooing since 2007. Walk-ins welcome daily 11am–7pm at 2001 SE 50th Ave.",
  keywords: [
    "tattoo shop Portland",
    "traditional American tattoo",
    "get what you get tattoo",
    "historic tattoo",
    "Portland tattoo",
    "SE Portland tattoo",
  ],
  openGraph: {
    title: "Historic Tattoo | Traditional American Tattoos — Portland, OR",
    description:
      "Portland's home of traditional American tattooing since 2007. Walk-ins welcome daily 11am–7pm.",
    url: "https://historictattoo.com",
    siteName: "Historic Tattoo",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable} ${playfair.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
