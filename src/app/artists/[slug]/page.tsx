import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { OrnamentalDivider, StampBadge } from "@/components/Decorations";
import { artists, getArtistBySlug } from "@/data/artists";
import { business } from "@/data/business";
import { breadcrumbSchema, personSchema } from "@/lib/schema";

export function generateStaticParams() {
  return artists.map((a) => ({ slug: a.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);
  if (!artist) return {};

  return {
    title: `${artist.name} — Tattoo Artist | Historic Tattoo Portland, OR`,
    description: `${artist.bio} Available ${artist.days} at Historic Tattoo, ${business.address.full}. Walk-ins welcome.`,
    openGraph: {
      title: `${artist.name} — Historic Tattoo Portland, OR`,
      description: `${artist.specialty} tattoo artist at Historic Tattoo. Available ${artist.days}. Walk-ins welcome daily.`,
      url: `${business.url}/artists/${artist.slug}`,
      siteName: "Historic Tattoo",
      locale: "en_US",
      type: "profile",
      ...(artist.photo ? { images: [{ url: artist.photo, alt: `${artist.name} at Historic Tattoo Portland` }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${artist.name} — Historic Tattoo Portland, OR`,
      description: `${artist.specialty} tattoo artist. Available ${artist.days}. Walk-ins welcome.`,
    },
    alternates: {
      canonical: `${business.url}/artists/${artist.slug}`,
    },
  };
}

export default async function ArtistPage({ params }: Props) {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);
  if (!artist) notFound();

  const schemas = [
    personSchema(artist),
    breadcrumbSchema([
      { name: "Home", url: business.url },
      { name: "Artists", url: `${business.url}/artists` },
      { name: artist.name, url: `${business.url}/artists/${artist.slug}` },
    ]),
  ];

  const hasPortfolio = artist.portfolio.length > 0;

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      {/* Header */}
      <section className="pt-32 pb-16 px-4 text-center border-b-2 border-ht-red/20 diagonal-stripes relative">
        <div className="relative z-10">
          <StampBadge className="mb-4">{artist.days}</StampBadge>

          {/* Artist photo */}
          <div className="relative w-32 h-32 rounded-full mx-auto mb-6">
            <div className="absolute inset-0 rounded-full border-[3px] border-ht-red" />
            <div className="absolute inset-[5px] rounded-full border border-dashed border-ht-gold/40" />
            <div className="absolute inset-[8px] rounded-full overflow-hidden">
              {artist.photo ? (
                <Image
                  src={`${artist.photo}?format=500w`}
                  alt={`${artist.name} — tattoo artist at Historic Tattoo Portland`}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              ) : (
                <div className="w-full h-full bg-ht-gray flex items-center justify-center">
                  <span className="font-display text-5xl font-bold text-ht-red/40">{artist.name.charAt(0)}</span>
                </div>
              )}
            </div>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase text-ht-cream mb-2">
            {artist.name}
          </h1>
          <p className="font-display text-sm tracking-widest text-ht-gold uppercase mb-4">{artist.specialty}</p>
          <p className="font-body text-ht-cream/60 max-w-xl mx-auto mb-6">
            {artist.bio}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={business.phoneHref} className="btn-primary">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Book / Walk In
            </a>
            <a href={artist.ig} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Instagram
            </a>
          </div>
          <OrnamentalDivider className="mt-6" />
        </div>
      </section>

      {/* Portfolio */}
      {hasPortfolio ? (
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-2xl uppercase tracking-wider text-ht-cream mb-2 text-center">Portfolio</h2>
            <OrnamentalDivider className="mb-10" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 grunge-border p-2 sm:p-4">
              {artist.portfolio.map((img, i) => (
                <div key={i} className="relative aspect-square overflow-hidden bg-ht-gray group warm-glow">
                  <Image
                    src={`${img.src}?format=750w`}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 45vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-24 px-4">
          <div className="max-w-xl mx-auto text-center parchment-card p-12">
            <p className="font-display text-lg uppercase tracking-wider text-ht-cream/50 mb-4">Portfolio Available on Instagram</p>
            <p className="font-body text-sm text-ht-cream/40 mb-6">
              Check out {artist.name}&apos;s latest work and message them directly to book your appointment.
            </p>
            <a href={artist.ig} target="_blank" rel="noopener noreferrer" className="btn-primary">
              View on Instagram
            </a>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-4 bg-ht-gray border-y-2 border-ht-red/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl font-bold uppercase text-ht-cream mb-4">Ready to Get Tattooed?</h2>
          <OrnamentalDivider className="mb-6" />
          <p className="font-body text-ht-cream/70 leading-relaxed mb-8">
            Walk-ins are welcome {artist.days.toLowerCase() === "by appointment" ? "by appointment" : `${artist.days}`} or give us a call to check availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={business.phoneHref} className="btn-primary">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Call {business.phone}
            </a>
            <Link href="/artists" className="btn-secondary">
              All Artists
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
            <a href={business.maps.directions} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Get Directions
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
