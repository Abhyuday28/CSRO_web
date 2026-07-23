"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Products", href: "/#products" },
  { label: "Features", href: "/#features" },
  { label: "About Us", href: "/#about" },
  { label: "FAQs", href: "/#faqs" }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="glass-panel mx-auto flex max-w-7xl items-center justify-between rounded-[28px] px-5 py-4">
        
        {/* Logo - Desktop */}
        <div className="hidden flex-1 md:flex">
          <Link href="/" className="flex items-center">
            <Image
              src="/csro_draft.svg"
              alt="CSRO Logo"
              width={140}
              height={50}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Nav Links */}
        <nav className="hidden items-center justify-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden flex-1 items-center justify-end gap-3 md:flex">
          <Link href="/#demo" className="cta-primary">
            Book Free Demo
          </Link>
          <Link href="/#demo" className="cta-secondary">
            Service Request
          </Link>
        </div>

        {/* Mobile Header */}
        <div className="relative flex w-full items-center justify-between md:hidden">
          
          {/* Hamburger */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-white/60 text-deep"
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
            </div>
          </button>

          {/* Logo - Mobile */}
          <Link
            href="/"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <Image
              src="/csro_draft.svg"
              alt="CSRO Logo"
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>

          {/* Spacer */}
          <div className="h-11 w-11" aria-hidden="true" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="section-shell md:hidden">
          <div className="glass-panel mt-3 rounded-[28px] px-5 py-5">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-white/70 hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/#demo"
                onClick={() => setIsOpen(false)}
                className="cta-primary mt-2"
              >
                Book Free Demo
              </Link>

              <Link
                href="/#demo"
                onClick={() => setIsOpen(false)}
                className="cta-secondary"
              >
                Service Request
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}