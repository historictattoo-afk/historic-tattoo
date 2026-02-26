import type { Metadata } from "next";
import Image from "next/image";
import { OrnamentalDivider, StampBadge } from "@/components/Decorations";

export const metadata: Metadata = {
  title: "Tattoo Artists | Historic Tattoo — Portland, OR",
  description:
    "Meet the 8 traditional American tattoo artists at Historic Tattoo in SE Portland, OR. 109 years of combined experience. Walk-ins welcome daily 11am–7pm at 2001 SE 50th Ave.",
  openGraph: {
    title: "Our Tattoo Artists — Historic Tattoo Portland, OR",
    description:
      "8 traditional American tattoo artists with 109 years combined experience. Walk-ins welcome daily in SE Portland.",
    url: "https://historictattoo.com/artists",
    siteName: "Historic Tattoo",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tattoo Artists — Historic Tattoo Portland, OR",
    description:
      "Meet our 8 traditional American tattoo artists. 109 years combined experience. Walk-ins daily 11am–7pm.",
  },
  alternates: {
    canonical: "https://historictattoo.com/artists",
  },
};

const artists = [
  {
    name: "Craig Brown",
    days: "Wed – Sat",
    ig: "https://www.instagram.com/historictattoo/",
    specialty: "Traditional American",
    photo: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752260914078-GP6VEZ0QUIHLSBNVQ9VD/image0+%283%29.jpeg",
    portfolio: [
      "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752260917349-BJ3M63BOOWGVAC35OGPP/image4+%282%29.jpeg",
      "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752260935421-6VDMZOP1FBHBTMN2EULG/image1.jpeg",
      "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752260918274-NYD0M9B00Z8920I64LMY/image3+%282%29.jpeg",
      "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752260921172-JCSF45H4AXPO2PBIBZ6F/image2+%282%29.jpeg",
    ],
  },
  {
    name: "Jonathan Vallee",
    days: "Wed – Sat",
    ig: "https://www.instagram.com/historictattoo/",
    specialty: "Traditional American",
    photo: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1533674774480-KW5OU5BVXB2DQ0ON3951/Screen+Shot+2018-08-07+at+1.21.22+PM.png",
    portfolio: [
      "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1533674758062-A1YKXQ6NH9S2QY2DNNA1/Screen+Shot+2018-08-07+at+1.42.21+PM.png",
      "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1533674769037-DV1YZS8B6A31REGUFLBC/Screen+Shot+2018-08-07+at+1.21.57+PM.png",
      "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1533674780575-X24N63X0LNWN7MHI5T4H/Screen+Shot+2018-08-07+at+1.22.14+PM.png",
      "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1533674761507-Y8YDZ279VN3KXRRXKTXG/Screen+Shot+2018-08-07+at+1.21.44+PM.png",
    ],
  },
  {
    name: "Krystian Schneider",
    days: "Tue, Wed, Fri, Sat",
    ig: "https://www.instagram.com/historictattoo/",
    specialty: "Traditional American",
    photo: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752153066661-XCKV7C47MASE3QH8V23O/Screenshot%2B2025-07-10%2Bat%2B6.10.25%25E2%2580%25AFAM.jpg",
    portfolio: [
      "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752153062265-WJ2RUIT1CANL265OOXLN/IMG_8260.jpeg",
      "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752153064259-WKV1R1SF15HNYL6TWTC0/IMG_8203.jpeg",
      "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752153075109-BNE4L4EV619UYWKWX6H1/IMG_8108.jpeg",
      "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752153079105-8LT5JOFTDE5PQ93HSRRC/IMG_8037.jpeg",
    ],
  },
  {
    name: "Adam DeFiglio",
    days: "Fri – Mon",
    ig: "https://www.instagram.com/historictattoo/",
    specialty: "Traditional American",
    photo: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752154031208-0211B5W3OOSB6L1EDEFZ/IMG_1250.jpeg",
    portfolio: [
      "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752154031409-MVMA9AEYI0XFWBUN5341/A57B5466-229C-46ED-8D7B-FBD6BD80E1BA.jpeg",
      "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752154040779-FZOEPCI40Z7LJEEMY6RF/IMG_6676.jpeg",
      "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752154043520-L1E9J2XJ3S9AM178WNF0/IMG_6330.jpeg",
      "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752154052332-X29AZ8ZV7S318BJGV0L4/IMG_6544.jpeg",
    ],
  },
  {
    name: "Tony J. Vyeda",
    days: "Wed – Sat",
    ig: "https://www.instagram.com/historictattoo/",
    specialty: "Traditional American",
    photo: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752260696730-T41YHUXASE5MA2MH3ZMQ/image0.jpeg",
    portfolio: [
      "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752260696744-G183ZP02TIQ015UKBRTH/image2.jpeg",
      "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752260698033-Q6KT2SJ42O7PG454YU3J/image3.jpeg",
      "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752260698535-K9J0ULBJFDIZEWJCUL9S/image4.jpeg",
      "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752260699281-DK2XQ3HJ89J5ZB6T70J0/image5.jpeg",
    ],
  },
  {
    name: "Abbie Fitzpatrick",
    days: "Sun – Tue",
    ig: "https://www.instagram.com/historictattoo/",
    specialty: "Traditional American",
    photo: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752153767790-VGSGPM17EFWTG09CORM9/unnamed.jpg",
    portfolio: [
      "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752153794631-H86G5RKEWRJXQLRAO3FA/IMG_4755.jpeg",
      "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752153829523-DTFX3ZI7DBF3T59IW3NL/IMG_6445.jpeg",
      "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752153770742-15TCPFE6DTM6YA5MZACB/IMG_6452.jpeg",
      "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752153834785-Z74OZ24DQH0QGQQYLKRC/IMG_6455.jpeg",
    ],
  },
  {
    name: "Mishka",
    days: "By appointment",
    ig: "https://www.instagram.com/historictattoo/",
    specialty: "Traditional American",
    photo: null,
    portfolio: [],
  },
  {
    name: "Blane",
    days: "By appointment",
    ig: "https://www.instagram.com/historictattoo/",
    specialty: "Traditional American",
    photo: null,
    portfolio: [],
  },
];

export default function ArtistsPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-4 text-center border-b-2 border-ht-red/20 diagonal-stripes relative">
        <div className="relative z-10">
          <StampBadge className="mb-4">109 Years Combined</StampBadge>
          <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase text-ht-cream mb-4 mt-4">
            Our Artists
            <span className="sr-only"> — Traditional Tattoo Artists in Portland, OR</span>
          </h1>
          <p className="font-body text-ht-cream/60 max-w-xl mx-auto">
            Eight traditional American tattoo artists at Portland&apos;s Historic Tattoo. Click any card to view their work on Instagram, or message them directly to book an appointment.
          </p>
          <OrnamentalDivider className="mt-4" />
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto space-y-24">
          {artists.map((artist, idx) => (
            <div key={artist.name} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${idx % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
              {/* Artist info */}
              <div className={idx % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="flex items-center gap-6 mb-6">
                  {/* Ornate circular frame with decorative ring */}
                  <div className="relative w-24 h-24 rounded-full flex-shrink-0">
                    <div className="absolute inset-0 rounded-full border-[3px] border-ht-red" />
                    <div className="absolute inset-[5px] rounded-full border border-dashed border-ht-gold/40" />
                    <div className="absolute inset-[8px] rounded-full overflow-hidden">
                      {artist.photo ? (
                        <Image
                          src={`${artist.photo}?format=300w`}
                          alt={`${artist.name} — tattoo artist at Historic Tattoo Portland`}
                          fill
                          className="object-cover"
                          sizes="96px"
                        />
                      ) : (
                        <div className="w-full h-full bg-ht-gray flex items-center justify-center">
                          <span className="font-display text-3xl font-bold text-ht-red/40">{artist.name.charAt(0)}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <h2 className="font-display text-2xl uppercase tracking-wider text-ht-cream">{artist.name}</h2>
                    <p className="font-body text-xs text-ht-cream/40 mt-1">{artist.specialty}</p>
                    {/* Availability stamp */}
                    <span className="inline-block mt-2 font-display text-[10px] tracking-widest uppercase text-ht-gold border border-ht-gold/30 px-2 py-0.5 rounded-sm">
                      {artist.days}
                    </span>
                  </div>
                </div>
                <a
                  href={artist.ig}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="stamp-btn inline-block px-6 py-2 border-2 border-ht-red/40 text-ht-red font-display text-xs tracking-widest uppercase hover:bg-ht-red hover:text-white transition-colors"
                >
                  View on Instagram
                </a>
              </div>

              {/* Portfolio grid — flash sheet style */}
              {artist.portfolio.length > 0 ? (
                <div className={`grid grid-cols-2 gap-2 grunge-border p-2 ${idx % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  {artist.portfolio.map((src, i) => (
                    <div key={i} className="relative aspect-square overflow-hidden bg-ht-gray group warm-glow">
                      <Image
                        src={`${src}?format=500w`}
                        alt={`Traditional American tattoo by ${artist.name} at Historic Tattoo Portland`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 45vw, 25vw"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="parchment-card p-12 text-center">
                  <p className="font-display text-sm tracking-widest uppercase text-ht-cream/30">
                    Portfolio on Instagram
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-ht-gray border-y-2 border-ht-red/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl font-bold uppercase text-ht-cream mb-4">Book an Appointment or Just Walk In</h2>
          <OrnamentalDivider className="mb-4" />
          <p className="font-body text-ht-cream/70 leading-relaxed mb-6">
            Walk-ins are welcome every day, 11am–7pm. To book with a specific artist, message them on Instagram or give us a call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:5032363440" className="stamp-btn px-6 py-3 bg-ht-red text-white font-display text-sm tracking-widest uppercase hover:bg-ht-red-light transition-colors">
              Call (503) 236-3440
            </a>
            <a href="https://www.instagram.com/historictattoo/" target="_blank" rel="noopener noreferrer" className="stamp-btn px-6 py-3 border-2 border-ht-red/40 text-ht-cream font-display text-sm tracking-widest uppercase hover:border-ht-red hover:text-ht-red transition-colors">
              @historictattoo on Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
