import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Products", href: "#products" },
  { label: "Features", href: "#features" },
  { label: "FAQs", href: "#faqs" },
  { label: "Book Demo", href: "#demo" }
];

export function Footer() {
  return (
    <footer className="section-shell pt-4">
      <div className="glass-panel rounded-[28px] px-5 py-8 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr_1fr] lg:items-start">
          <div>
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

          <div>
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

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
              Admin
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Manage demo leads, service requests, products, and FAQs.
            </p>
            <Link href="/admin/login" className="mt-5 text-sm font-semibold text-slate-500 transition hover:text-primary">
              Admin Login
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/50 pt-5 text-xs font-semibold text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 CSRO. All rights reserved.</p>
          <p>A unit of ESSAR BUIT</p>
        </div>
      </div>
    </footer>
  );
}
