import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artists | Historic Tattoo — Portland, OR",
  description:
    "Meet the talented traditional tattoo artists at Historic Tattoo in Portland, OR. Click an artist to view their work on Instagram.",
};

const artists = [
  {
    name: "Craig Brown",
    days: "Wed – Sat",
    ig: "https://www.instagram.com/",
    specialty: "Traditional American",
  },
  {
    name: "Jonathan Vallee",
    days: "Wed – Sat",
    ig: "https://www.instagram.com/",
    specialty: "Traditional American",
  },
  {
    name: "Krystian Schneider",
    days: "Tue, Wed, Fri, Sat",
    ig: "https://www.instagram.com/",
    specialty: "Traditional American",
  },
  {
    name: "Adam DeFiglio",
    days: "Fri – Mon",
    ig: "https://www.instagram.com/",
    specialty: "Traditional American",
  },
  {
    name: "Tony J. Vyeda",
    days: "Wed – Sat",
    ig: "https://www.instagram.com/",
    specialty: "Traditional American",
  },
  {
    name: "Abbie Fitzpatrick",
    days: "Sun – Tue",
    ig: "https://www.instagram.com/",
    specialty: "Traditional American",
  },
  {
    name: "Mishka",
    days: "By appointment",
    ig: "https://www.instagram.com/",
    specialty: "Traditional American",
  },
  {
    name: "Blane",
    days: "By appointment",
    ig: "https://www.instagram.com/",
    specialty: "Traditional American",
  },
];

export default function ArtistsPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 px-4 text-center border-b border-ht-red/10">
        <p className="font-display text-xs tracking-[0.4em] text-ht-gold uppercase mb-3">
          The Crew
        </p>
        <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase text-ht-cream">
          Artists
        </h1>
      </section>

      {/* Intro */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-ht-cream/70 text-lg leading-relaxed">
            Each of our artists brings their own voice to the traditional American style. Click any
            artist to view their work on Instagram — or message them directly to schedule an
            appointment.
          </p>
        </div>
      </section>

      {/* Artist grid */}
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {artists.map((artist) => (
            <a
              key={artist.name}
              href={artist.ig}
              target="_blank"
              rel="noopener noreferrer"
              className="flash-card border border-ht-red/20 bg-ht-gray p-8 flex flex-col items-center text-center group"
            >
              {/* Avatar placeholder */}
              <div className="w-24 h-24 rounded-full bg-ht-black border-2 border-ht-red/30 group-hover:border-ht-red flex items-center justify-center mb-6 transition-colors">
                <span className="font-display text-4xl font-bold text-ht-red/40 group-hover:text-ht-red transition-colors">
                  {artist.name.charAt(0)}
                </span>
              </div>

              <h2 className="font-display text-lg uppercase tracking-wider text-ht-cream mb-1 group-hover:text-ht-red transition-colors">
                {artist.name}
              </h2>
              <p className="font-body text-xs text-ht-cream/40 mb-4">{artist.specialty}</p>

              <div className="mt-auto w-full border-t border-ht-red/10 pt-4">
                <p className="font-display text-xs tracking-widest uppercase text-ht-gold">
                  {artist.days}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Booking note */}
      <section className="py-16 px-4 bg-ht-gray border-y border-ht-red/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl font-bold uppercase text-ht-cream mb-4">
            Appointments & Walk-ins
          </h2>
          <p className="font-body text-ht-cream/70 leading-relaxed mb-6">
            Walk-ins are welcome every day. To book an appointment with a specific artist, message
            them directly on Instagram or give us a call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5032363440"
              className="px-6 py-3 bg-ht-red text-white font-display text-sm tracking-widest uppercase hover:bg-ht-red-light transition-colors"
            >
              Call (503) 236-3440
            </a>
            <a
              href="https://www.instagram.com/historictattoo/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-ht-red/40 text-ht-cream font-display text-sm tracking-widest uppercase hover:border-ht-red hover:text-ht-red transition-colors"
            >
              @historictattoo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
