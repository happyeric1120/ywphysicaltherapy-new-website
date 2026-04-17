"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Method", href: "/human-system-reset" },
  { label: "Services", href: "/#technology" },
  { label: "About", href: "/about" },
  { label: "Insurance", href: "/insurance-pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      setScrollingDown(currentScrollY > lastScrollY && currentScrollY > 80);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[rgba(255,255,255,0.92)] backdrop-blur-md border-b border-[rgba(0,0,0,0.08)]"
            : "bg-white/95",
          scrollingDown ? "-translate-y-full" : "translate-y-0",
        ].join(" ")}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-[68px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-display font-bold text-xl text-brand-white tracking-tight">
              YW
            </span>
            <span className="font-body font-light text-sm text-[rgba(26,26,26,0.65)] tracking-wide hidden sm:block">
              Physical Therapy
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-body text-sm font-normal text-[rgba(26,26,26,0.78)] hover:text-brand-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <span className="w-px h-5 bg-[rgba(0,0,0,0.12)]" />
            <Link
              href="/book"
              className="font-body text-sm font-medium px-5 py-2 rounded-full bg-brand-white text-white hover:bg-[#333333] transition-all duration-200"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-px bg-brand-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-px bg-brand-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-brand-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col justify-center items-center transition-all duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-2xl font-bold text-brand-white hover:text-brand-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book"
            onClick={() => setMenuOpen(false)}
            className="mt-4 font-body text-base font-medium px-8 py-3 bg-brand-white text-white rounded-full hover:bg-[#333333] transition-all duration-200"
          >
            Book Now
          </Link>
        </nav>
      </div>
    </>
  );
}
