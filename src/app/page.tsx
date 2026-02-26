import Link from "next/link";
import Image from "next/image";
import {
  BannerRibbon,
  OrnamentalDivider,
  StampBadge,
  AnchorIcon,
  RoseIcon,
  EagleIcon,
  HeartIcon,
  DiceIcon,
  LightningIcon,
  TradStar,
  CornerFrameSVG,
  PinAccent,
} from "@/components/Decorations";

const trustStats = [
  { num: "17+", label: "Years in Business", icon: "anchor" },
  { num: "109", label: "Years Combined Experience", icon: "star" },
  { num: "8+", label: "Artists on Staff", icon: "eagle" },
  { num: "1,000s", label: "Hand-Painted Designs", icon: "rose" },
];

const services = [
  {
    name: "Get What You Get",
    price: "$100",
    tag: "The Classic",
    icon: "dice",
    description:
      "Buy a token, spin the wheel, walk out with a traditional American tattoo. Every result is a winner — no exceptions.",
    cta: "Learn More",
  },
  {
    name: "GWYG Deluxe",
    price: "$200",
    tag: "Go Big",
    icon: "dice",
    description:
      "Same game, bigger canvas. Let fate choose a bolder, larger traditional piece from our extended flash collection.",
    cta: "Learn More",
  },
  {
    name: "Tattoo Plinko",
    price: "$200",
    tag: "Let It Drop",
    icon: "lightning",
    description:
      "Drop the puck, let physics decide. Portland's most dramatic tattoo experience — guaranteed to be a story.",
    cta: "Learn More",
  },
];

const artists = [
  {
    name: "Craig Brown",
    days: "Wed – Sat",
    ig: "https://www.instagram.com/historictattoo/",
    photo: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752260914078-GP6VEZ0QUIHLSBNVQ9VD/image0+%283%29.jpeg",
  },
  {
    name: "Jonathan Vallee",
    days: "Wed – Sat",
    ig: "https://www.instagram.com/historictattoo/",
    photo: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1533674774480-KW5OU5BVXB2DQ0ON3951/Screen+Shot+2018-08-07+at+1.21.22+PM.png",
  },
  {
    name: "Krystian Schneider",
    days: "Tue, Wed, Fri, Sat",
    ig: "https://www.instagram.com/historictattoo/",
    photo: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752153066661-XCKV7C47MASE3QH8V23O/Screenshot%2B2025-07-10%2Bat%2B6.10.25%25E2%2580%25AFAM.jpg",
  },
  {
    name: "Adam DeFiglio",
    days: "Fri – Mon",
    ig: "https://www.instagram.com/historictattoo/",
    photo: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752154031208-0211B5W3OOSB6L1EDEFZ/IMG_1250.jpeg",
  },
  {
    name: "Tony J. Vyeda",
    days: "Wed – Sat",
    ig: "https://www.instagram.com/historictattoo/",
    photo: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752260696730-T41YHUXASE5MA2MH3ZMQ/image0.jpeg",
  },
  {
    name: "Abbie Fitzpatrick",
    days: "Sun – Tue",
    ig: "https://www.instagram.com/historictattoo/",
    photo: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752153767790-VGSGPM17EFWTG09CORM9/unnamed.jpg",
  },
];

const portfolioGrid = [
  "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752260914078-GP6VEZ0QUIHLSBNVQ9VD/image0+%283%29.jpeg",
  "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752153066661-XCKV7C47MASE3QH8V23O/Screenshot%2B2025-07-10%2Bat%2B6.10.25%25E2%2580%25AFAM.jpg",
  "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752154031208-0211B5W3OOSB6L1EDEFZ/IMG_1250.jpeg",
  "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752260696730-T41YHUXASE5MA2MH3ZMQ/image0.jpeg",
  "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752153767790-VGSGPM17EFWTG09CORM9/unnamed.jpg",
  "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752260917349-BJ3M63BOOWGVAC35OGPP/image4+%282%29.jpeg",
  "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752153794631-H86G5RKEWRJXQLRAO3FA/IMG_4755.jpeg",
  "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752154040779-FZOEPCI40Z7LJEEMY6RF/IMG_6676.jpeg",
  "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752260696744-G183ZP02TIQ015UKBRTH/image2.jpeg",
];

const reviews = [
  {
    author: "Sarah M.",
    rating: 5,
    text: "Got a walk-in traditional rose from Craig and it's the best tattoo I own. The shop has incredible energy — everyone is welcoming and professional. Will be back.",
    source: "Google",
  },
  {
    author: "Jake T.",
    rating: 5,
    text: "Did the Get What You Get on a whim and got an anchor. Couldn't be happier. The whole experience is just fun — these guys clearly love what they do.",
    source: "Yelp",
  },
  {
    author: "Megan R.",
    rating: 5,
    text: "Historic Tattoo is a Portland institution. I've gotten three tattoos here and every single one is exactly what traditional American tattooing should look like. Go here.",
    source: "Google",
  },
];

function ServiceIcon({ type, className }: { type: string; className?: string }) {
  if (type === "lightning") return <LightningIcon className={className} />;
  return <DiceIcon className={className} />;
}

function TrustIcon({ type, className }: { type: string; className?: string }) {
  switch (type) {
    case "anchor": return <AnchorIcon className={className} />;
    case "eagle": return <EagleIcon className={className} />;
    case "rose": return <RoseIcon className={className} />;
    default: return <TradStar className={className} />;
  }
}

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-[75vh] sm:min-h-[92vh] flex flex-col items-center justify-center text-center px-4 py-16 sm:pt-8 overflow-hidden diagonal-stripes">
        {/* Background watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-[0.03]">
          <AnchorIcon className="w-full h-full text-ht-cream" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-ht-red/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Typographic hero */}
          <div className="flex justify-center mb-6">
            <StampBadge>Est. 2007 · Portland, OR</StampBadge>
          </div>

          <h1 className="font-display font-bold uppercase leading-none mb-4">
            <span className="block text-5xl sm:text-7xl md:text-8xl text-ht-cream tracking-wide">Historic</span>
            <span className="block text-5xl sm:text-7xl md:text-8xl text-ht-red tracking-wide">Tattoo</span>
          </h1>

          <p className="font-body text-ht-cream/70 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed mb-3">
            17+ years of traditional American tattooing. 109 years of combined artist experience.
            Thousands of hand-painted flash designs — walk-ins welcome every day.
          </p>

          <p className="font-display text-sm tracking-widest text-ht-gold uppercase mb-8">
            <TradStar className="w-3 h-3 inline text-ht-gold mr-1" />
            <TradStar className="w-3 h-3 inline text-ht-gold mr-1" />
            <TradStar className="w-3 h-3 inline text-ht-gold mr-1" />
            <TradStar className="w-3 h-3 inline text-ht-gold mr-1" />
            <TradStar className="w-3 h-3 inline text-ht-gold mr-2" />
            Rated on Google & Yelp
          </p>

          {/* Stamp-style CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <a
              href="tel:5032363440"
              className="stamp-btn w-full sm:w-auto px-8 py-4 bg-ht-red text-white font-display text-sm tracking-widest uppercase hover:bg-ht-red-light transition-colors"
            >
              Call (503) 236-3440
            </a>
            <Link
              href="/get-what-you-get"
              className="stamp-btn w-full sm:w-auto px-8 py-4 border-2 border-ht-cream/30 text-ht-cream font-display text-sm tracking-widest uppercase hover:border-ht-red hover:text-ht-red transition-colors"
            >
              Get What You Get
            </Link>
            <a
              href="https://maps.google.com/?q=2001+SE+50th+Ave,+Portland,+OR+97215"
              target="_blank"
              rel="noopener noreferrer"
              className="stamp-btn w-full sm:w-auto px-8 py-4 border-2 border-ht-cream/30 text-ht-cream font-display text-sm tracking-widest uppercase hover:border-ht-red hover:text-ht-red transition-colors"
            >
              Get Directions
            </a>
          </div>

          <p className="font-body text-xs text-ht-cream/40 tracking-widest uppercase">
            2001 SE 50th Ave · Open Daily 11am–7pm · Walk-ins Always Welcome
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-30">
          <div className="w-px h-12 bg-ht-cream animate-pulse mx-auto" />
        </div>
      </section>

      {/* ── Trust Bar ────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-ht-gold/90 via-ht-gold to-ht-gold/90 py-8 px-4 border-y-2 border-ht-gold/50">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {trustStats.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <TrustIcon type={s.icon} className="w-6 h-6 text-ht-black/60 mb-2" />
              <p className="font-display text-3xl font-bold text-ht-black">{s.num}</p>
              <p className="font-display text-xs tracking-widest uppercase text-ht-black/60">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Signature Services ───────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-display text-xs tracking-[0.4em] text-ht-gold uppercase mb-4">
              Portland&apos;s Most Unique Tattoo Experience
            </p>
            <BannerRibbon className="w-72 sm:w-96 h-14 mx-auto mb-6">
              Take Your Chances
            </BannerRibbon>
            <p className="font-body text-ht-cream/60 max-w-xl mx-auto mt-4">
              No deliberating. No anxiety. Just you, a token, and a guaranteed great traditional tattoo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {services.map((s, i) => (
              <div
                key={s.name}
                className="flash-sheet relative p-8 text-center flex flex-col group"
                style={{ transform: `rotate(${i === 0 ? -1 : i === 2 ? 1 : 0}deg)` }}
              >
                <PinAccent />
                {/* Service icon */}
                <ServiceIcon type={s.icon} className="w-10 h-10 text-ht-red mx-auto mb-3" />
                <p className="font-display text-xs tracking-widest uppercase text-ht-green mb-2">{s.tag}</p>
                {/* Price badge */}
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-ht-red flex items-center justify-center border-2 border-ht-black">
                  <span className="font-display text-lg font-bold text-white">{s.price}</span>
                </div>
                <h3 className="font-display text-xl uppercase tracking-wider text-ht-black mb-4">{s.name}</h3>
                <p className="font-body text-sm text-ht-black/60 leading-relaxed mb-6 flex-1">{s.description}</p>
                <Link
                  href="/get-what-you-get"
                  className="block px-4 py-2 bg-ht-red text-white font-display text-xs tracking-widest uppercase hover:bg-ht-red-light transition-colors border-2 border-ht-black"
                >
                  {s.cta}
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center font-body text-ht-cream/40 text-sm">
            Just show up — no appointment needed. Open daily 11am–7pm.
          </p>
        </div>
      </section>

      {/* ── Portfolio / Work ─────────────────────────────── */}
      <section className="py-24 px-4 bg-ht-gray border-y-2 border-ht-red/20 relative">
        <CornerFrameSVG />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-display text-xs tracking-[0.4em] text-ht-gold uppercase mb-4">The Work</p>
            <BannerRibbon className="w-80 sm:w-[28rem] h-14 mx-auto mb-4">
              Traditional Done Right
            </BannerRibbon>
            <p className="font-body text-ht-cream/60 max-w-xl mx-auto mt-4">
              Bold lines, solid color, timeless imagery. Every tattoo that leaves our shop is built to last a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-1 sm:gap-2 mb-10">
            {portfolioGrid.map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden bg-ht-black group warm-glow">
                <Image
                  src={`${src}?format=500w`}
                  alt={`Traditional tattoo work from Historic Tattoo Portland`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 33vw, 20vw"
                />
                <div className="absolute inset-0 border border-ht-gold/10 pointer-events-none" />
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://www.instagram.com/historictattoo/"
              target="_blank"
              rel="noopener noreferrer"
              className="stamp-btn inline-block px-8 py-4 bg-ht-red text-white font-display text-sm tracking-widest uppercase hover:bg-ht-red-light transition-colors"
            >
              See More on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ── Why Historic Tattoo ──────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-display text-xs tracking-[0.4em] text-ht-gold uppercase mb-3">Why We&apos;re Different</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-ht-cream mb-6 leading-tight">
              Portland&apos;s Traditional Tattoo Institution
            </h2>
            <div className="space-y-4 font-body text-ht-cream/70 leading-relaxed">
              <p>
                Historic Tattoo has been the home of traditional American tattooing in Portland since 2007 — that&apos;s over 17 years of bold lines, solid color, and timeless imagery.
              </p>
              <p>
                Our eight artists bring 109 years of combined experience to every tattoo. Whether it&apos;s flash off the wall or a fully custom piece, you&apos;re getting the real deal.
              </p>
              <p>
                We&apos;re also the only shop in Portland with Get What You Get and Tattoo Plinko — two of the most fun ways to get tattooed anywhere in the country.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/about"
                className="stamp-btn px-6 py-3 bg-ht-red text-white font-display text-sm tracking-widest uppercase hover:bg-ht-red-light transition-colors text-center"
              >
                Our Story
              </Link>
              <Link
                href="/artists"
                className="stamp-btn px-6 py-3 border-2 border-ht-red/40 text-ht-cream font-display text-sm tracking-widest uppercase hover:border-ht-red hover:text-ht-red transition-colors text-center"
              >
                Meet the Artists
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { Icon: AnchorIcon, title: "Walk-Ins Always Welcome", desc: "No appointment needed. Come in any day between 11am and 7pm." },
              { Icon: RoseIcon, title: "Traditional American Style", desc: "Bold lines, solid color, classic imagery that lasts a lifetime." },
              { Icon: EagleIcon, title: "17+ Years of Excellence", desc: "Portland's most trusted traditional tattoo shop since 2007." },
              { Icon: HeartIcon, title: "109 Years Experience", desc: "Our team's combined experience means world-class tattooing every time." },
            ].map((f) => (
              <div key={f.title} className="parchment-card p-5 relative">
                <f.Icon className="w-8 h-8 text-ht-red mb-3" />
                <h3 className="font-display text-sm uppercase tracking-wider text-ht-cream mb-2">{f.title}</h3>
                <p className="font-body text-xs text-ht-cream/50 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Artists ──────────────────────────────────────── */}
      <section className="py-24 px-4 bg-ht-gray border-y-2 border-ht-red/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-display text-xs tracking-[0.4em] text-ht-gold uppercase mb-4">109 Years Combined Experience</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-ht-cream">Our Artists</h2>
            <OrnamentalDivider className="mt-4" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {artists.map((artist) => (
              <a
                key={artist.name}
                href={artist.ig}
                target="_blank"
                rel="noopener noreferrer"
                className="flash-card parchment-card p-4 text-center group"
              >
                {/* Ornate circular frame */}
                <div className="relative w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 border-[3px] border-ht-red group-hover:border-ht-gold transition-colors">
                  <div className="absolute inset-[3px] rounded-full border border-dashed border-ht-red/30 z-10 pointer-events-none" />
                  <Image
                    src={`${artist.photo}?format=300w`}
                    alt={artist.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <h3 className="font-display text-xs uppercase tracking-wider text-ht-cream mb-1 group-hover:text-ht-red transition-colors leading-tight">
                  {artist.name}
                </h3>
                <p className="font-body text-xs text-ht-cream/40">{artist.days}</p>
              </a>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/artists"
              className="inline-block font-display text-sm tracking-widest uppercase text-ht-gold hover:text-ht-red transition-colors border-b border-ht-gold/40 hover:border-ht-red pb-1"
            >
              View Full Artist Portfolios
            </Link>
          </div>
        </div>
      </section>

      {/* ── Reviews / Social Proof ───────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-display text-xs tracking-[0.4em] text-ht-gold uppercase mb-4">What People Are Saying</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-ht-cream mb-4">
              <TradStar className="w-5 h-5 inline text-ht-gold" />
              <TradStar className="w-5 h-5 inline text-ht-gold" />
              <TradStar className="w-5 h-5 inline text-ht-gold" />
              <TradStar className="w-5 h-5 inline text-ht-gold" />
              <TradStar className="w-5 h-5 inline text-ht-gold" />
              <span className="ml-3">Rated</span>
            </h2>
            <p className="font-body text-ht-cream/60">
              86+ reviews on Yelp and Google. Portland&apos;s most-loved traditional tattoo shop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {reviews.map((r) => (
              <div key={r.author} className="parchment-card p-8 relative">
                {/* Aged postcard style */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <TradStar key={i} className="w-4 h-4 text-ht-gold" />
                  ))}
                </div>
                <p className="font-body text-ht-cream/80 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs tracking-widest uppercase text-ht-cream/50">{r.author}</span>
                  {/* Source stamp badge */}
                  <span className="font-display text-[10px] tracking-widest uppercase text-ht-red border border-ht-red/30 px-2 py-0.5 rounded-sm">
                    {r.source}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.yelp.com/biz/historic-tattoo-portland"
              target="_blank"
              rel="noopener noreferrer"
              className="stamp-btn px-6 py-3 border-2 border-ht-red/40 text-ht-cream font-display text-sm tracking-widest uppercase hover:border-ht-red hover:text-ht-red transition-colors text-center"
            >
              Read Reviews on Yelp
            </a>
            <a
              href="https://maps.google.com/?q=Historic+Tattoo+Portland"
              target="_blank"
              rel="noopener noreferrer"
              className="stamp-btn px-6 py-3 border-2 border-ht-red/40 text-ht-cream font-display text-sm tracking-widest uppercase hover:border-ht-red hover:text-ht-red transition-colors text-center"
            >
              Read Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* ── Instagram Section ────────────────────────────── */}
      <section className="py-24 px-4 bg-ht-gray border-y-2 border-ht-red/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-display text-xs tracking-[0.4em] text-ht-gold uppercase mb-4">Follow Along</p>
            <BannerRibbon className="w-64 sm:w-80 h-14 mx-auto mb-4">
              @historictattoo
            </BannerRibbon>
            <p className="font-body text-ht-cream/50 mb-2 mt-4">38,000+ followers · Portland, OR</p>
            <a
              href="https://www.instagram.com/historictattoo/"
              target="_blank"
              rel="noopener noreferrer"
              className="stamp-btn inline-block mt-2 px-6 py-2 bg-ht-red text-white font-display text-xs tracking-widest uppercase hover:bg-ht-red-light transition-colors"
            >
              Follow on Instagram
            </a>
          </div>

          {/* Flash-sheet-style border grid */}
          <div className="grid grid-cols-3 gap-1 sm:gap-2 mb-8 grunge-border p-1 sm:p-2">
            {portfolioGrid.slice(0, 9).map((src, i) => (
              <a
                key={i}
                href="https://www.instagram.com/historictattoo/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square overflow-hidden bg-ht-black group block warm-glow"
              >
                <Image
                  src={`${src}?format=500w`}
                  alt="Historic Tattoo Portland — traditional American tattoo"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-ht-black/0 group-hover:bg-ht-black/30 transition-colors flex items-center justify-center">
                  <HeartIcon className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://www.instagram.com/historictattoo/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-sm tracking-widest uppercase text-ht-gold hover:text-ht-red transition-colors border-b border-ht-gold/40 hover:border-ht-red pb-1"
            >
              View All Posts on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ── Visit / Map CTA ──────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-display text-xs tracking-[0.4em] text-ht-gold uppercase mb-3">Come See Us</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-ht-cream mb-4">
            Walk In Today
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block w-12 h-px bg-ht-gold/40" />
            <TradStar className="w-4 h-4 text-ht-gold" />
            <span className="block w-12 h-px bg-ht-gold/40" />
          </div>
          <p className="font-body text-ht-cream/70 text-lg mb-10 max-w-xl mx-auto">
            No appointment needed. Just show up between 11am and 7pm any day of the week and our artists will take care of you.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="parchment-card p-6">
              <AnchorIcon className="w-6 h-6 text-ht-gold mx-auto mb-3" />
              <p className="font-display text-xs tracking-widest uppercase text-ht-gold mb-3">Address</p>
              <p className="font-body text-ht-cream/80 text-sm leading-relaxed">
                2001 SE 50th Ave<br />Portland, OR 97215<br />
                <span className="text-ht-cream/40 text-xs">SE Portland · Near SE Division</span>
              </p>
            </div>
            <div className="parchment-card p-6">
              <TradStar className="w-6 h-6 text-ht-gold mx-auto mb-3" />
              <p className="font-display text-xs tracking-widest uppercase text-ht-gold mb-3">Hours</p>
              <p className="font-body text-ht-cream/80 text-sm">
                Open Every Day<br />
                <span className="text-ht-cream font-medium">11am – 7pm</span><br />
                <span className="text-ht-cream/40 text-xs">Walk-ins always welcome</span>
              </p>
            </div>
            <div className="parchment-card p-6">
              <HeartIcon className="w-6 h-6 text-ht-gold mx-auto mb-3" />
              <p className="font-display text-xs tracking-widest uppercase text-ht-gold mb-3">Contact</p>
              <a href="tel:5032363440" className="font-body text-ht-cream/80 text-sm hover:text-ht-red transition-colors block">
                (503) 236-3440
              </a>
              <a href="mailto:historictattoo@gmail.com" className="font-body text-ht-cream/40 text-xs hover:text-ht-red transition-colors break-all block mt-1">
                historictattoo@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5032363440"
              className="stamp-btn px-8 py-4 bg-ht-red text-white font-display text-sm tracking-widest uppercase hover:bg-ht-red-light transition-colors"
            >
              Call (503) 236-3440
            </a>
            <a
              href="https://maps.google.com/?q=2001+SE+50th+Ave,+Portland,+OR+97215"
              target="_blank"
              rel="noopener noreferrer"
              className="stamp-btn px-8 py-4 border-2 border-ht-red/40 text-ht-cream font-display text-sm tracking-widest uppercase hover:border-ht-red hover:text-ht-red transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
