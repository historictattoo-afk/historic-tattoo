import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get What You Get | Historic Tattoo — Portland, OR",
  description:
    "Portland's most adventurous tattoo experience. Buy a token, spin the wheel, and walk out with a classic traditional tattoo. $100, $200, or Plinko.",
};

const options = [
  {
    name: "Get What You Get",
    price: "$100",
    tag: "The Classic",
    description:
      "Buy a token, get what you get. You'll walk out with a traditional American tattoo chosen by fate — and you'll love it. Every result is a winner.",
    details: [
      "Traditional American flash design",
      "Smaller to medium size",
      "Placed where it looks best",
      "Results are non-negotiable (and always great)",
    ],
  },
  {
    name: "Get What You Get Deluxe",
    price: "$200",
    tag: "Go Big",
    description:
      "Same game, bigger prize. The Deluxe gives you a larger, bolder traditional tattoo from our extended collection of hand-painted flash.",
    details: [
      "Larger traditional American flash",
      "More complex designs available",
      "Placed where it looks best",
      "Still completely up to fate",
    ],
  },
  {
    name: "Tattoo Plinko",
    price: "$200",
    tag: "Let It Drop",
    description:
      "Drop the puck down our custom Plinko board and let physics decide your new tattoo. It's the most dramatic way to get inked in Portland.",
    details: [
      "Plinko board determines your design",
      "Traditional American flash",
      "Comparable to GWYG Deluxe in size",
      "The best story to tell about your tattoo",
    ],
  },
];

export default function GWYGPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 px-4 text-center border-b border-ht-red/10">
        <p className="font-display text-xs tracking-[0.4em] text-ht-gold uppercase mb-3">
          Our Signature Experience
        </p>
        <h1 className="font-display font-bold uppercase leading-none">
          <span className="block text-4xl sm:text-6xl text-ht-cream tracking-tight">
            Get What
          </span>
          <span className="block text-4xl sm:text-6xl text-ht-red tracking-tight">
            You Get
          </span>
        </h1>
      </section>

      {/* Intro */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-ht-cream/70 text-xl leading-relaxed mb-8">
            Here&apos;s the deal: you buy a token, you get what you get. We choose a traditional
            American tattoo from our collection of thousands of hand-painted designs, and you walk
            out with something classic.
          </p>
          <p className="font-body text-ht-cream/50 text-base leading-relaxed">
            No picking, no deliberating, no anxiety. Just you, a token, and a great tattoo. Every
            result is a genuine winner — we&apos;ve been doing this long enough to guarantee it.
          </p>
        </div>
      </section>

      {/* Options */}
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {options.map((opt) => (
            <div
              key={opt.name}
              className="flash-card border border-ht-red/20 bg-ht-gray flex flex-col"
            >
              <div className="border-b border-ht-red/20 p-8">
                <p className="font-display text-xs tracking-widest uppercase text-ht-gold mb-2">
                  {opt.tag}
                </p>
                <h2 className="font-display text-2xl font-bold uppercase text-ht-cream mb-1">
                  {opt.name}
                </h2>
                <p className="font-display text-4xl font-bold text-ht-red">{opt.price}</p>
              </div>

              <div className="p-8 flex-1 flex flex-col gap-6">
                <p className="font-body text-ht-cream/70 text-sm leading-relaxed">
                  {opt.description}
                </p>
                <ul className="space-y-2 mt-auto">
                  {opt.details.map((d) => (
                    <li key={d} className="flex items-start gap-3 font-body text-sm text-ht-cream/60">
                      <span className="text-ht-red mt-0.5 flex-shrink-0">&#9670;</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 bg-ht-gray border-y border-ht-red/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold uppercase text-ht-cream mb-12 text-center">
            Common Questions
          </h2>

          <div className="space-y-8">
            {[
              {
                q: "Can I choose where it goes?",
                a: "We have some flexibility on placement, but ultimately it goes where it looks best for the design.",
              },
              {
                q: "Can I veto a design?",
                a: "No — that's the whole point. Trust the process. We have thousands of designs and they're all great.",
              },
              {
                q: "Do I need an appointment?",
                a: "Nope. Just walk in any day between 11am and 7pm, buy a token at the front, and we'll take care of the rest.",
              },
              {
                q: "What style are the designs?",
                a: "All traditional American — bold lines, classic motifs, solid color. The real deal.",
              },
              {
                q: "What if I don't like the result?",
                a: "You will. But if you really can't get past it, come talk to us. We're reasonable people who want you to leave happy.",
              },
            ].map((faq) => (
              <div key={faq.q} className="border-b border-ht-red/10 pb-8">
                <h3 className="font-display text-lg uppercase tracking-wider text-ht-cream mb-3">
                  {faq.q}
                </h3>
                <p className="font-body text-ht-cream/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-ht-cream mb-6">
            Ready to Take Your Chances?
          </h2>
          <p className="font-body text-ht-cream/60 mb-10">
            Walk in any day. Bring $100 or $200. Leave with a tattoo you&apos;ll tell stories about.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://maps.google.com/?q=2001+SE+50th+Ave,+Portland,+OR+97215"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-ht-red text-white font-display text-sm tracking-widest uppercase hover:bg-ht-red-light transition-colors"
            >
              Get Directions
            </a>
            <Link
              href="/artists"
              className="px-8 py-4 border border-ht-red/40 text-ht-cream font-display text-sm tracking-widest uppercase hover:border-ht-red hover:text-ht-red transition-colors"
            >
              Meet the Artists
            </Link>
          </div>
          <p className="mt-8 font-body text-sm text-ht-cream/40">
            2001 SE 50th Ave · Portland, OR · Open Daily 11am–7pm
          </p>
        </div>
      </section>
    </>
  );
}
