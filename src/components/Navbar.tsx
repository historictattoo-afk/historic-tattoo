"use client";

import Link from "next/link";
import { useState, useEffect, useCallback, useRef } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/artists", label: "Artists" },
  { href: "/gallery", label: "Gallery" },
  { href: "/get-what-you-get", label: "Get What You Get" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  /* Close on Escape key */
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, close]);

  /* Trap focus inside mobile menu when open */
  useEffect(() => {
    if (!open || !menuRef.current) return;
    const menu = menuRef.current;
    const focusable = menu.querySelectorAll<HTMLElement>("a, button");
    if (focusable.length > 0) focusable[0].focus();

    const handler = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  return (
    <>
      {/* Top bar — phone + hours always visible */}
      <div className="bg-ht-red text-white text-xs font-display tracking-widest uppercase text-center py-2 px-4 border-b-2 border-ht-red-light/30">
        <a href="tel:5032363440" aria-label="Call Historic Tattoo — walk-ins welcome daily, open 11am to 7pm" className="hover:text-ht-cream transition-colors">
          <span className="text-ht-gold mr-2" aria-hidden="true">&#9733;</span>
          Walk-ins Welcome Daily · Open 11am–7pm · (503) 236-3440
          <span className="text-ht-gold ml-2" aria-hidden="true">&#9733;</span>
        </a>
      </div>

      <header className="sticky top-0 left-0 right-0 z-50 bg-ht-black/95 backdrop-blur-sm border-b-2 border-ht-red/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Wordmark */}
          <Link href="/" className="flex flex-col leading-none group" aria-label="Historic Tattoo — Home">
            <span className="font-display text-lg font-bold tracking-widest text-ht-cream uppercase group-hover:text-ht-red transition-colors">Historic Tattoo</span>
            <span className="font-display text-[10px] tracking-[0.25em] text-ht-gold uppercase">Portland, OR · Est. 2008</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
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
              className="stamp-btn ml-4 px-5 py-2 bg-ht-red text-white font-display text-sm tracking-widest uppercase hover:bg-ht-red-light transition-colors"
              aria-label="Call Historic Tattoo"
            >
              Call Now
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            ref={toggleRef}
            className="lg:hidden text-ht-cream p-2"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <div className="space-y-1.5" aria-hidden="true">
              <span className={`block h-0.5 w-6 bg-ht-cream transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 w-6 bg-ht-cream transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-ht-cream transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav
            ref={menuRef}
            id="mobile-menu"
            className="lg:hidden bg-ht-gray border-t-2 border-ht-red/30 px-4 py-6 flex flex-col gap-4"
            aria-label="Mobile navigation"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={close}
                className="font-display text-base tracking-widest uppercase text-ht-cream hover:text-ht-red transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:5032363440"
              className="stamp-btn mt-2 px-6 py-3 bg-ht-red text-white font-display text-sm tracking-widest uppercase text-center hover:bg-ht-red-light transition-colors"
              aria-label="Call Historic Tattoo at (503) 236-3440"
            >
              Call (503) 236-3440
            </a>
            <a
              href="https://maps.google.com/?q=2001+SE+50th+Ave,+Portland,+OR+97215"
              target="_blank"
              rel="noopener noreferrer"
              className="stamp-btn px-6 py-3 border-2 border-ht-red/40 text-ht-cream font-display text-sm tracking-widest uppercase text-center hover:border-ht-red transition-colors"
              aria-label="Get directions to Historic Tattoo on Google Maps"
            >
              Get Directions
            </a>
          </nav>
        )}
      </header>
    </>
  );
}
