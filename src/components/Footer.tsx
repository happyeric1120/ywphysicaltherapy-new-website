import Link from "next/link";

const navCol = [
  { label: "Method", href: "/human-system-reset" },
  { label: "About Dr. Wu", href: "/about" },
  { label: "Insurance & Pricing", href: "/insurance-pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Book a Session", href: "/book" },
];

const servicesCol = [
  { label: "Shockwave Therapy", href: "/shockwave-therapy-nyc" },
  { label: "TECAR Therapy", href: "/tecar-therapy-nyc" },
  { label: "Class IV Laser", href: "/laser-therapy-nyc" },
  { label: "Compex EMS", href: "/compex-ems-nyc" },
  { label: "Back Pain PT", href: "/back-pain-nyc" },
  { label: "Neck Pain PT", href: "/neck-pain-nyc" },
  { label: "Hip Pain PT", href: "/hip-pain-nyc" },
  { label: "Sports Injury PT", href: "/sports-injury-nyc" },
  { label: "Desk Worker Pain", href: "/desk-worker-pain-nyc" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-surface border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="font-display font-bold text-2xl text-brand-white" style={{ letterSpacing: "-0.02em" }}>YW</span>
              <span className="font-body font-light text-[rgba(26,26,26,0.65)] text-sm">Physical Therapy</span>
            </div>
            <p className="font-mono text-xs text-brand-gold tracking-widest uppercase mb-4">
              Human System Reset™
            </p>
            <p className="font-body text-sm text-brand-muted leading-relaxed">
              One-on-one physical therapy in Midtown Manhattan combining clinical expertise with advanced technology.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-mono text-xs text-[rgba(26,26,26,0.65)] tracking-widest uppercase mb-6">Services</h3>
            <ul className="space-y-3">
              {servicesCol.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="font-body text-sm text-brand-muted hover:text-brand-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-mono text-xs text-[rgba(26,26,26,0.65)] tracking-widest uppercase mb-6">Contact</h3>
            <address
              className="not-italic space-y-3 font-body text-sm text-brand-muted"
              itemScope
              itemType="https://schema.org/LocalBusiness"
            >
              <p itemProp="name">YW Physical Therapy</p>
              <p>
                <span itemProp="streetAddress">224 W 35th St #301-5</span><br />
                <span itemProp="addressLocality">New York</span>,{" "}
                <span itemProp="addressRegion">NY</span>{" "}
                <span itemProp="postalCode">10001</span>
              </p>
              <p><a href="tel:3475715717" itemProp="telephone" className="hover:text-brand-white transition-colors">(347) 571-5717</a></p>
              <p><a href="mailto:ywphysicaltherapy@gmail.com" itemProp="email" className="hover:text-brand-white transition-colors">ywphysicaltherapy@gmail.com</a></p>
              <div className="pt-2 space-y-1 text-xs text-brand-muted">
                <p>Mon / Wed · 10am – 4pm</p>
                <p>Thu · 10am – 7pm · By appointment only</p>
              </div>
            </address>

            <div className="mt-6">
              <Link
                href="/book"
                className="inline-block font-body text-sm font-medium px-6 py-2.5 rounded-full bg-brand-white text-white hover:bg-[#333333] transition-all duration-200"
              >
                Book a Session
              </Link>
            </div>
          </div>
        </div>

        {/* Nav row */}
        <nav className="mt-12 pt-8 border-t border-brand-border flex flex-wrap gap-6">
          {navCol.map((item) => (
            <Link key={item.label} href={item.href} className="font-body text-xs text-brand-muted hover:text-brand-white transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Bottom */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-muted/75 font-body">
          <p>© {new Date().getFullYear()} YW Physical Therapy PLLC. All rights reserved.</p>
          <p>Legal entity: YW Physical Therapy PLLC · New York, NY</p>
        </div>
      </div>
    </footer>
  );
}
