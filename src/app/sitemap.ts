import type { MetadataRoute } from "next";
import { artists } from "@/data/artists";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: "https://historictattoo.com",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://historictattoo.com/about",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://historictattoo.com/artists",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://historictattoo.com/gallery",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://historictattoo.com/get-what-you-get",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://historictattoo.com/contact",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://historictattoo.com/faq",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://historictattoo.com/aftercare",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const artistPages: MetadataRoute.Sitemap = artists.map((artist) => ({
    url: `https://historictattoo.com/artists/${artist.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...artistPages];
}
