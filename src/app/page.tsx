import Link from "next/link";

const artists = [
  { name: "Craig Brown", days: "Wed – Sat", ig: "https://www.instagram.com/" },
  { name: "Jonathan Vallee", days: "Wed – Sat", ig: "https://www.instagram.com/" },
  { name: "Krystian Schneider", days: "Tue, Wed, Fri, Sat", ig: "https://www.instagram.com/" },
  { name: "Adam DeFiglio", days: "Fri – Mon", ig: "https://www.instagram.com/" },
  { name: "Tony J. Vyeda", days: "Wed – Sat", ig: "https://www.instagram.com/" },
  { name: "Abbie Fitzpatrick", days: "Sun – Tue", ig: "https://www.instagram.com/" },
  { name: "Mishka", days: "By appointment", ig: "https://www.instagram.com/" },
  { name: "Blane", days: "By appointment", ig: "https://www.instagram.com/" },
];

const services = [
  {
    name: "Get What You Get",
    price: "$100",
    description:
      "Buy a token, spin the wheel, and walk out with a classic traditional tattoo. Every outcome is a winner.",
  },
  {
    name: "GWYG Deluxe",
    price: "$200",
    description:
      "Same surprise format, bigger canvas. Larger, bolder traditional flash from our extensive collection.",
  },
  {
    name: "Tattoo Plinko",
    price: "$200",
    description:
      "Drop the puck down our Plinko board and let gravity choose your new tattoo. Guaranteed to be legendary.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16 overflow-hidden">
        {/* Background texture overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #c0392b 0, #c0392b 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-ht-red/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="font-display text-xs tracking-[0.4em] text-ht-gold uppercase mb-6">
            Portland, Oregon · Est. 2007
          </p>

          <h1 className="font-display font-bold uppercase leading-none mb-6">
            <span className="block text-6xl sm:text-8xl md:text-9xl text-ht-cream tracking-tight">
              Historic
            </span>
            <span className="block text-6xl sm:text-8xl md:text-9xl text-ht-red tracking-tight">
              Tattoo
            </span>
          </h1>

          <div className="ornament-divider my-8 max-w-xs mx-auto">
            <span className="font-serif text-ht-gold text-xl italic">&#10040;</span>
          </div>

          <p className="font-body text-ht-cream/70 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed mb-10">
            Traditional American tattooing in the heart of SE Portland.
            Thousands of hand-painted flash designs — plus custom work.
            Walk-ins always welcome.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/get-what-you-get"
              className="px-8 py-4 bg-ht-red text-white font-display text-sm tracking-widest uppercase hover:bg-ht-red-light transition-colors"
            >
              Get What You Get
            </Link>
            <Link
              href="/artists"
              className="px-8 py-4 border border-ht-cream/30 text-ht-cream font-display text-sm tracking-widest uppercase hover:border-ht-red hover:text-ht-red transition-colors"
            >
              Meet the Artists
            </Link>
          </div>

          <p className="mt-10 font-body text-sm text-ht-cream/40 tracking-widest uppercase">
            Open Daily · 11am – 7pm · (503) 236-3440
          </p>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-ht-cream animate-pulse" />
        </div>
      </section>

      {/* ── Signature Services ──────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-display text-xs tracking-[0.4em] text-ht-gold uppercase mb-3">
              Our Signature Experience
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-ht-cream">
              Take Your Chances
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.name}
                className="flash-card border border-ht-red/20 bg-ht-gray p-8 text-center group"
              >
                <p className="font-display text-3xl font-bold text-ht-red mb-2 group-hover:text-ht-red-light transition-colors">
                  {s.price}
                </p>
                <h3 className="font-display text-xl uppercase tracking-wider text-ht-cream mb-4">
                  {s.name}
                </h3>
                <p className="font-body text-sm text-ht-cream/60 leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/get-what-you-get"
              className="inline-block font-display text-sm tracking-widest uppercase text-ht-gold hover:text-ht-red transition-colors border-b border-ht-gold/40 hover:border-ht-red pb-1"
            >
              Learn How It Works →
            </Link>
          </div>
        </div>
      </section>

      {/* ── About Strip ─────────────────────────────────────── */}
      <section className="py-24 px-4 border-y border-ht-red/10 bg-ht-gray">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-display text-xs tracking-[0.4em] text-ht-gold uppercase mb-3">
              Since 2007
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-ht-cream mb-6 leading-tight">
              Portland&apos;s Traditional Tattoo Shop
            </h2>
            <p className="font-body text-ht-cream/70 leading-relaxed mb-4">
              Historic Tattoo has been the home of traditional American tattooing in Portland since
              2007. Our artists carry on the lineage of bold lines, solid color, and timeless imagery
              that defines the art form.
            </p>
            <p className="font-body text-ht-cream/70 leading-relaxed mb-8">
              We offer thousands of hand-painted flash designs alongside fully custom work. Whether
              you know exactly what you want or you&apos;re ready to let fate decide, you&apos;re in
              the right place.
            </p>
            <Link
              href="/about"
              className="inline-block px-6 py-3 border border-ht-red/40 text-ht-cream font-display text-sm tracking-widest uppercase hover:border-ht-red hover:text-ht-red transition-colors"
            >
              Our Story
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { num: "2007", label: "Est." },
              { num: "8+", label: "Artists" },
              { num: "1,000s", label: "Flash Designs" },
              { num: "Daily", label: "Walk-ins Welcome" },
            ].map((s) => (
              <div
                key={s.label}
                className="border border-ht-red/20 p-6 text-center"
              >
                <p className="font-display text-4xl font-bold text-ht-red mb-1">{s.num}</p>
                <p className="font-display text-xs tracking-widest uppercase text-ht-cream/60">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Artists Preview ─────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-display text-xs tracking-[0.4em] text-ht-gold uppercase mb-3">
              The Crew
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-ht-cream">
              Our Artists
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {artists.map((artist) => (
              <a
                key={artist.name}
                href={artist.ig}
                target="_blank"
                rel="noopener noreferrer"
                className="flash-card border border-ht-red/20 bg-ht-gray p-6 text-center group"
              >
                {/* Placeholder avatar */}
                <div className="w-16 h-16 rounded-full bg-ht-black border border-ht-red/30 flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-2xl font-bold text-ht-red/50">
                    {artist.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-display text-sm uppercase tracking-wider text-ht-cream mb-1 group-hover:text-ht-red transition-colors">
                  {artist.name}
                </h3>
                <p className="font-body text-xs text-ht-cream/40">{artist.days}</p>
              </a>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/artists"
              className="inline-block font-display text-sm tracking-widest uppercase text-ht-gold hover:text-ht-red transition-colors border-b border-ht-gold/40 hover:border-ht-red pb-1"
            >
              View All Artists →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Visit CTA ───────────────────────────────────────── */}
      <section className="py-24 px-4 bg-ht-red/10 border-y border-ht-red/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-ht-cream mb-6">
            Come See Us
          </h2>
          <p className="font-body text-ht-cream/70 text-lg mb-10">
            Walk-ins welcome every day. No appointment necessary — just show up
            and our artists will take care of you.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 text-center">
            <div>
              <p className="font-display text-xs tracking-widest uppercase text-ht-gold mb-2">Address</p>
              <p className="font-body text-ht-cream/80 text-sm">
                2001 SE 50th Ave<br />Portland, OR 97215
              </p>
            </div>
            <div>
              <p className="font-display text-xs tracking-widest uppercase text-ht-gold mb-2">Hours</p>
              <p className="font-body text-ht-cream/80 text-sm">
                Open Daily<br />11am – 7pm
              </p>
            </div>
            <div>
              <p className="font-display text-xs tracking-widest uppercase text-ht-gold mb-2">Phone</p>
              <a
                href="tel:5032363440"
                className="font-body text-ht-cream/80 text-sm hover:text-ht-red transition-colors"
              >
                (503) 236-3440
              </a>
            </div>
          </div>

          <a
            href="https://maps.google.com/?q=2001+SE+50th+Ave,+Portland,+OR+97215"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-ht-red text-white font-display text-sm tracking-widest uppercase hover:bg-ht-red-light transition-colors"
          >
            Get Directions
          </a>
        </div>
      </section>
    </>
  );
}
