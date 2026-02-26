"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/artists", label: "Artists" },
  { href: "/get-what-you-get", label: "Get What You Get" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ht-black/95 backdrop-blur-sm border-b border-ht-red/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span className="font-display text-xl font-bold tracking-widest text-ht-cream uppercase">
            Historic Tattoo
          </span>
          <span className="text-xs tracking-[0.2em] text-ht-gold uppercase font-body">
            Portland, Oregon
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link font-display text-sm tracking-widest uppercase text-ht-cream hover:text-ht-red transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:5032363440"
            className="ml-4 px-4 py-2 border border-ht-red text-ht-red font-display text-sm tracking-widest uppercase hover:bg-ht-red hover:text-white transition-colors"
          >
            (503) 236-3440
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-ht-cream p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-ht-cream transition-transform ${open ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-ht-cream transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-ht-cream transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-ht-gray border-t border-ht-red/20 px-4 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-base tracking-widest uppercase text-ht-cream hover:text-ht-red transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:5032363440"
            className="font-display text-base tracking-widest uppercase text-ht-red"
          >
            (503) 236-3440
          </a>
        </nav>
      )}
    </header>
  );
}
