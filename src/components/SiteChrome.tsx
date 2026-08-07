"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLandingPage = pathname.startsWith("/lp");

  if (isLandingPage) {
    return <>{children}</>;
  }

  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 bg-brand-black px-4 py-3 text-sm text-brand-white transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-brand-gold"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
