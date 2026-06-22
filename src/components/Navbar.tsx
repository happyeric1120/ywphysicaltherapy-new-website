"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navGroups = [
  {
    label: "Pain & Injury",
    routes: [
      "/physical-therapy-near-penn-station",
      "/shockwave-therapy-nyc",
      "/ai-movement-evaluation",
    ],
    links: [
      { label: "Physical Therapy", href: "/physical-therapy-near-penn-station" },
      { label: "Shockwave Therapy", href: "/shockwave-therapy-nyc" },
      { label: "AI Movement Analysis", href: "/ai-movement-evaluation" },
      { label: "Conditions We Treat", href: "/physical-therapy-near-penn-station" },
    ],
  },
  {
    label: "Recovery & Wellness",
    routes: ["/human-system-reset", "/neural-regulation", "/human-system-reset-assessment"],
    links: [
      { label: "Human System Reset™", href: "/human-system-reset" },
      { label: "Neural Regulation (HRV)", href: "/neural-regulation" },
      { label: "Recovery Screening", href: "/human-system-reset-assessment" },
    ],
  },
];

const directLinks = [
  { label: "Pricing", href: "/insurance-pricing" },
  { label: "About", href: "/about-dr-eric-wu" },
];

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpenGroups, setMobileOpenGroups] = useState<Record<string, boolean>>({
    "Pain & Injury": true,
    "Recovery & Wellness": false,
  });

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

  useEffect(() => {
    setMenuOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  function toggleMobileGroup(label: string) {
    setMobileOpenGroups((current) => ({ ...current, [label]: !current[label] }));
  }

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
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-display font-bold text-xl text-brand-white tracking-tight">
              YW
            </span>
            <span className="font-body font-light text-sm text-[rgba(26,26,26,0.65)] tracking-wide hidden sm:block">
              Physical Therapy
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-5 lg:gap-7" aria-label="Main navigation">
            {navGroups.map((group) => {
              const active = group.routes.some((route) => isActive(pathname, route));
              const expanded = openGroup === group.label;
              return (
                <div
                  key={group.label}
                  className="relative"
                  onMouseEnter={() => setOpenGroup(group.label)}
                  onMouseLeave={() => setOpenGroup(null)}
                  onFocus={() => setOpenGroup(group.label)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                      setOpenGroup(null);
                    }
                  }}
                >
                  <button
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded={expanded}
                    onClick={() => setOpenGroup(expanded ? null : group.label)}
                    onKeyDown={(event) => {
                      if (event.key === "Escape") setOpenGroup(null);
                    }}
                    className={[
                      "font-body text-xs lg:text-sm font-normal transition-colors inline-flex items-center gap-1",
                      active ? "text-brand-white" : "text-[rgba(26,26,26,0.78)] hover:text-brand-white",
                    ].join(" ")}
                  >
                    {group.label}
                    <span className="text-[10px]" aria-hidden="true">▾</span>
                  </button>
                  <div
                    role="menu"
                    className={[
                      "absolute left-0 top-full pt-4 w-64 transition-all duration-150",
                      expanded ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none",
                    ].join(" ")}
                  >
                    <div className="border border-brand-border bg-white shadow-[0_18px_60px_rgba(0,0,0,0.12)] p-3" style={{ borderRadius: "2px" }}>
                      {group.links.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          role="menuitem"
                          className={[
                            "block px-4 py-3 font-body text-sm transition-colors",
                            isActive(pathname, link.href)
                              ? "text-brand-white bg-brand-surface"
                              : "text-brand-muted hover:text-brand-white hover:bg-brand-surface",
                          ].join(" ")}
                          style={{ borderRadius: "2px" }}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            {directLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={[
                  "font-body text-xs lg:text-sm font-normal transition-colors",
                  isActive(pathname, link.href) ? "text-brand-white" : "text-[rgba(26,26,26,0.78)] hover:text-brand-white",
                ].join(" ")}
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

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`block w-6 h-px bg-brand-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-px bg-brand-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-brand-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="min-h-full flex flex-col justify-center px-8 py-24" aria-label="Mobile navigation">
          <div className="space-y-5">
            {navGroups.map((group) => {
              const expanded = mobileOpenGroups[group.label];
              const active = group.routes.some((route) => isActive(pathname, route));
              return (
                <div key={group.label} className="border-b border-brand-border pb-5">
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`mobile-${group.label.replace(/\W+/g, "-").toLowerCase()}`}
                    onClick={() => toggleMobileGroup(group.label)}
                    className={[
                      "w-full flex items-center justify-between font-display text-2xl font-bold transition-colors",
                      active ? "text-brand-gold" : "text-brand-white hover:text-brand-gold",
                    ].join(" ")}
                  >
                    {group.label}
                    <span className="font-body text-base" aria-hidden="true">{expanded ? "−" : "+"}</span>
                  </button>
                  <div
                    id={`mobile-${group.label.replace(/\W+/g, "-").toLowerCase()}`}
                    className={expanded ? "mt-4 space-y-3" : "hidden"}
                  >
                    {group.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={[
                          "block font-body text-base transition-colors",
                          isActive(pathname, link.href) ? "text-brand-white" : "text-brand-muted hover:text-brand-gold",
                        ].join(" ")}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}

            {directLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={[
                  "block font-display text-2xl font-bold transition-colors",
                  isActive(pathname, link.href) ? "text-brand-gold" : "text-brand-white hover:text-brand-gold",
                ].join(" ")}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/book"
            onClick={() => setMenuOpen(false)}
            className="mt-10 text-center font-body text-base font-medium px-8 py-3 bg-brand-white text-white rounded-full hover:bg-[#333333] transition-all duration-200"
          >
            Book Now
          </Link>
        </nav>
      </div>
    </>
  );
}
