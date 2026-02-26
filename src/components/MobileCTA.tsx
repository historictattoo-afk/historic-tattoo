"use client";

import { useEffect, useState } from "react";

export default function MobileCTA() {
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      // Show when scrolling up or near top; hide when scrolling down
      if (currentY < 100) {
        setVisible(true);
      } else if (currentY < lastY) {
        setVisible(true);
      } else if (currentY > lastY + 8) {
        setVisible(false);
      }
      setLastY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  return (
    <div
      className={`fixed bottom-6 left-0 right-0 z-50 flex justify-center gap-3 px-4 md:hidden transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
      }`}
      aria-label="Quick contact"
    >
      <a
        href="tel:5032363440"
        className="flex-1 max-w-[160px] flex items-center justify-center gap-2 px-5 py-3 bg-ht-red text-white font-display text-sm tracking-widest uppercase rounded-full shadow-lg shadow-ht-red/30 hover:bg-ht-red-light active:scale-95 transition-all"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
        </svg>
        Call
      </a>
      <a
        href="sms:5032363440"
        className="flex-1 max-w-[160px] flex items-center justify-center gap-2 px-5 py-3 bg-ht-gray border border-ht-red/40 text-ht-cream font-display text-sm tracking-widest uppercase rounded-full shadow-lg shadow-black/30 hover:border-ht-red active:scale-95 transition-all"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
        </svg>
        Text
      </a>
    </div>
  );
}
