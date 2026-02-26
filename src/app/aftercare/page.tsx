import type { Metadata } from "next";
import Link from "next/link";
import { OrnamentalDivider, StampBadge } from "@/components/Decorations";
import { business } from "@/data/business";
import { breadcrumbSchema, howToSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Tattoo Aftercare Guide | Historic Tattoo — Portland, OR",
  description:
    "Step-by-step tattoo aftercare instructions from Historic Tattoo in Portland, OR. Learn how to care for your new tattoo with our healing timeline, do's and don'ts, and expert tips.",
  openGraph: {
    title: "Tattoo Aftercare Guide — Historic Tattoo Portland, OR",
    description:
      "Complete aftercare instructions for your new tattoo. Healing timeline, do's and don'ts, and when to contact us.",
    url: `${business.url}/aftercare`,
    siteName: "Historic Tattoo",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tattoo Aftercare Guide — Historic Tattoo Portland, OR",
    description: "Everything you need to know to heal your new tattoo properly.",
  },
  alternates: {
    canonical: `${business.url}/aftercare`,
  },
};

const aftercareSteps = [
  {
    name: "Leave the bandage on",
    text: "Keep the bandage your artist applied for 2-4 hours. This protects the fresh tattoo from bacteria and irritation.",
  },
  {
    name: "Wash gently",
    text: "After removing the bandage, wash the tattoo gently with lukewarm water and a mild, fragrance-free soap. Pat dry with a clean paper towel — never rub.",
  },
  {
    name: "Apply a thin layer of moisturizer",
    text: "Once clean and dry, apply a very thin layer of unscented moisturizer or a tattoo-specific aftercare product like Aquaphor or Hustle Butter. Less is more — don't suffocate the tattoo.",
  },
  {
    name: "Wash and moisturize 2-3 times daily",
    text: "For the first 2 weeks, gently wash your tattoo 2-3 times per day and apply a thin layer of moisturizer after each wash. Keep the area clean and hydrated.",
  },
  {
    name: "Let it peel naturally",
    text: "Your tattoo will start to flake and peel after about a week. This is completely normal. Do not pick, scratch, or peel the flaking skin — let it fall off naturally.",
  },
  {
    name: "Protect from sun and water",
    text: "Avoid direct sunlight, swimming pools, hot tubs, and soaking in baths for at least 2-3 weeks. Once healed, always apply SPF 30+ sunscreen to keep your tattoo looking sharp.",
  },
];

const healingTimeline = [
  { period: "Day 1–3", title: "Fresh & Sensitive", description: "Your tattoo will be red, slightly swollen, and may ooze a small amount of ink and plasma. This is normal. Keep it clean and moisturized." },
  { period: "Week 1", title: "Peeling Begins", description: "The tattoo will start to feel tight and begin flaking, similar to a sunburn. Do not pick or scratch — let it peel naturally." },
  { period: "Week 2–3", title: "Itchy Phase", description: "The tattoo may itch as the deeper layers heal. Resist the urge to scratch. A light slap or cool compress can help relieve itching." },
  { period: "Month 1+", title: "Fully Healed", description: "The surface is healed and the colors have settled. The deeper layers may continue healing for up to 3 months. Apply sunscreen to protect your investment." },
];

const dos = [
  "Wash gently with mild, fragrance-free soap",
  "Pat dry with a clean paper towel",
  "Apply thin layers of unscented moisturizer",
  "Wear loose, breathable clothing over the tattoo",
  "Keep the tattoo out of direct sunlight",
  "Stay hydrated and eat well during healing",
];

const donts = [
  "Don't soak in baths, pools, or hot tubs",
  "Don't pick, scratch, or peel flaking skin",
  "Don't apply thick layers of ointment",
  "Don't expose to direct sunlight",
  "Don't wear tight clothing that rubs the tattoo",
  "Don't use products with fragrances or alcohol",
];

const howTo = howToSchema(aftercareSteps);
const crumbs = breadcrumbSchema([
  { name: "Home", url: business.url },
  { name: "Aftercare", url: `${business.url}/aftercare` },
]);

export default function AftercarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />

      {/* Header */}
      <section className="pt-32 pb-16 px-4 text-center border-b-2 border-ht-red/20 diagonal-stripes relative">
        <div className="relative z-10">
          <StampBadge className="mb-4">Heal It Right</StampBadge>
          <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase text-ht-cream mb-4 mt-4">
            Tattoo Aftercare
            <span className="sr-only"> Guide — Historic Tattoo Portland, OR</span>
          </h1>
          <p className="font-body text-ht-cream/60 max-w-xl mx-auto">
            Proper aftercare is just as important as the tattoo itself. Follow these steps to ensure your new tattoo heals beautifully.
          </p>
          <OrnamentalDivider className="mt-4" />
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl uppercase tracking-wider text-ht-cream mb-2">Step-by-Step Aftercare</h2>
          <div className="w-16 h-0.5 bg-ht-red mb-10" />

          <div className="space-y-6">
            {aftercareSteps.map((step, i) => (
              <div key={i} className="parchment-card p-6 sm:p-8 flex gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-ht-red flex items-center justify-center">
                  <span className="font-display text-lg font-bold text-white">{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-display text-base uppercase tracking-wide text-ht-cream mb-2">{step.name}</h3>
                  <p className="font-body text-sm text-ht-cream/70 leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section className="py-24 px-4 bg-ht-gray border-y-2 border-ht-red/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl uppercase tracking-wider text-ht-cream mb-2 text-center">Do&apos;s & Don&apos;ts</h2>
          <OrnamentalDivider className="mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Do's */}
            <div className="parchment-card p-6 sm:p-8">
              <h3 className="font-display text-lg uppercase tracking-wider text-ht-green mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Do
              </h3>
              <ul className="space-y-3">
                {dos.map((item) => (
                  <li key={item} className="font-body text-sm text-ht-cream/70 flex items-start gap-2">
                    <span className="text-ht-green mt-0.5 flex-shrink-0">+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Don'ts */}
            <div className="parchment-card p-6 sm:p-8">
              <h3 className="font-display text-lg uppercase tracking-wider text-ht-red mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                Don&apos;t
              </h3>
              <ul className="space-y-3">
                {donts.map((item) => (
                  <li key={item} className="font-body text-sm text-ht-cream/70 flex items-start gap-2">
                    <span className="text-ht-red mt-0.5 flex-shrink-0">&times;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Healing Timeline */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl uppercase tracking-wider text-ht-cream mb-2">Healing Timeline</h2>
          <div className="w-16 h-0.5 bg-ht-red mb-10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {healingTimeline.map((phase) => (
              <div key={phase.period} className="parchment-card p-6">
                <span className="font-display text-xs tracking-widest uppercase text-ht-gold">{phase.period}</span>
                <h3 className="font-display text-base uppercase tracking-wide text-ht-cream mt-1 mb-2">{phase.title}</h3>
                <p className="font-body text-sm text-ht-cream/70 leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Contact */}
      <section className="py-16 px-4 bg-ht-gray border-y-2 border-ht-red/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl font-bold uppercase text-ht-cream mb-4">When to Contact Us</h2>
          <OrnamentalDivider className="mb-6" />
          <p className="font-body text-ht-cream/70 leading-relaxed mb-4">
            Some redness and swelling is normal during the first few days. However, contact us if you experience:
          </p>
          <ul className="font-body text-sm text-ht-cream/70 space-y-2 mb-8 text-left max-w-md mx-auto">
            <li className="flex items-start gap-2"><span className="text-ht-red flex-shrink-0">&bull;</span> Excessive swelling, redness, or warmth after 3+ days</li>
            <li className="flex items-start gap-2"><span className="text-ht-red flex-shrink-0">&bull;</span> Pus or unusual discharge (clear fluid is normal)</li>
            <li className="flex items-start gap-2"><span className="text-ht-red flex-shrink-0">&bull;</span> Red streaks extending from the tattoo</li>
            <li className="flex items-start gap-2"><span className="text-ht-red flex-shrink-0">&bull;</span> Fever or chills</li>
            <li className="flex items-start gap-2"><span className="text-ht-red flex-shrink-0">&bull;</span> Any signs of allergic reaction</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={business.phoneHref} className="btn-primary">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Call {business.phone}
            </a>
            <Link href="/contact" className="btn-secondary">
              Contact & Directions
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
