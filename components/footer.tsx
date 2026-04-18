import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  // { label: "Contact Us", href: "/contact" },
  { label: "Products", href: "#products" },
  // { label: "Features", href: "#features" },
  { label: "FAQs", href: "#faqs" }
  // { label: "Book Demo", href: "#demo" },
];

export function Footer() {
  return (
    <footer className="section-shell pt-4">
      <div className="glass-panel rounded-[28px] px-5 py-8 sm:px-8">
        <div className="grid gap-8 grid-cols-2 lg:grid-cols-[1.4fr_220px_220px] lg:items-start">
          <div className="col-span-2 lg:col-span-1">
            <Link href="#top" className="inline-flex">
              <Image
                src="/csro_draft.svg"
                alt="CSRO Logo"
                width={150}
                height={54}
                className="h-11 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
              Natural water purification support for homes, families, and offices.
            </p>
          </div>

          <div className="lg:max-w-[220px]">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
              Quick links
            </p>
            <nav className="mt-4 grid gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-semibold text-deep transition hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="lg:max-w-[220px]">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
              Contact Us
            </p>
            <nav className="mt-4 grid gap-3">
              <p>+91 1800-2323-21</p>
              <p>Hello@csro.com</p>
              <p>Katihar, Bihar</p>
            </nav>
          </div>
        </div>

        <div className="mt-3 flex flex-col gap-3 border-t border-white/50 pt-5 text-xs font-semibold text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 CSRO. All rights reserved.</p>
          <p>A unit of ESSAR BRITA GROUP</p>
        </div>
      </div>
    </footer>
  );
}
