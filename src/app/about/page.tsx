import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Historic Tattoo — Portland, OR",
  description:
    "Historic Tattoo has been Portland's home of traditional American tattooing since 2007. Learn about our shop, our artists, and our commitment to the craft.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 px-4 text-center border-b border-ht-red/10">
        <p className="font-display text-xs tracking-[0.4em] text-ht-gold uppercase mb-3">
          Est. 2007
        </p>
        <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase text-ht-cream">
          About
        </h1>
      </section>

      {/* Story */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold uppercase text-ht-cream mb-8">
            Our Story
          </h2>
          <div className="space-y-6 font-body text-ht-cream/80 leading-relaxed text-lg">
            <p>
              Historic Tattoo opened its doors in Portland, Oregon in 2007 with one mission: keep
              traditional American tattooing alive and thriving. We&apos;re a shop built on a deep
              respect for the craft — bold lines, solid color, and classic imagery that stands the
              test of time.
            </p>
            <p>
              Located in the heart of SE Portland at 2001 SE 50th Ave, we&apos;ve spent nearly two
              decades building a family of artists who share a commitment to quality and authenticity.
              From flash off the wall to fully custom work, every tattoo that leaves our shop
              represents the best of the American tradition.
            </p>
            <p>
              We&apos;re also the home of Portland&apos;s most beloved tattoo experience: Get What
              You Get. Buy a token, take your chances, and walk away with a hand-painted traditional
              tattoo. Every spin is a winner.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 bg-ht-gray border-y border-ht-red/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-ht-cream">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                title: "The Tradition",
                body: "We honor the lineage of traditional American tattooing — the sailors, the carnies, the old-school artists who built this art form.",
              },
              {
                title: "The Craft",
                body: "Bold lines that hold, colors that last, and designs that look as good in 20 years as they do on day one. No shortcuts.",
              },
              {
                title: "The Community",
                body: "Historic Tattoo is a Portland institution. We&apos;re proud to be part of this city&apos;s culture and to welcome artists and collectors from everywhere.",
              },
            ].map((v) => (
              <div key={v.title} className="border-t-2 border-ht-red pt-6">
                <h3 className="font-display text-xl uppercase tracking-wider text-ht-cream mb-3">
                  {v.title}
                </h3>
                <p className="font-body text-ht-cream/60 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit info */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold uppercase text-ht-cream mb-8">
            Visit Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 font-body text-ht-cream/80">
            <div>
              <p className="font-display text-xs tracking-widest uppercase text-ht-gold mb-3">
                Location
              </p>
              <address className="not-italic leading-relaxed">
                2001 SE 50th Ave<br />
                Portland, OR 97215
              </address>
            </div>
            <div>
              <p className="font-display text-xs tracking-widest uppercase text-ht-gold mb-3">
                Hours
              </p>
              <p>Open daily, 11am – 7pm</p>
              <p className="mt-2 text-ht-cream/50 text-sm">Walk-ins always welcome.</p>
            </div>
            <div>
              <p className="font-display text-xs tracking-widest uppercase text-ht-gold mb-3">
                Phone
              </p>
              <a href="tel:5032363440" className="hover:text-ht-red transition-colors">
                (503) 236-3440
              </a>
            </div>
            <div>
              <p className="font-display text-xs tracking-widest uppercase text-ht-gold mb-3">
                Email
              </p>
              <a
                href="mailto:historictattoo@gmail.com"
                className="hover:text-ht-red transition-colors break-all"
              >
                historictattoo@gmail.com
              </a>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              href="/artists"
              className="px-6 py-3 bg-ht-red text-white font-display text-sm tracking-widest uppercase hover:bg-ht-red-light transition-colors text-center"
            >
              Meet the Artists
            </Link>
            <Link
              href="/get-what-you-get"
              className="px-6 py-3 border border-ht-red/40 text-ht-cream font-display text-sm tracking-widest uppercase hover:border-ht-red hover:text-ht-red transition-colors text-center"
            >
              Get What You Get
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
