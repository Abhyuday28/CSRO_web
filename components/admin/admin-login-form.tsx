"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function AdminLoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const phone = String(formData.get("phone") ?? "").trim();
    const password = String(formData.get("password") ?? "").trim();

    if (!phone || !password) {
      setError("Enter phone number and password.");
      return;
    }

    window.sessionStorage.setItem("csro-admin-phone", phone);
    router.push("/admin");
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7f5f0] px-4 py-8 text-deep">
      <div className="absolute inset-0 -z-10 bg-hero-radial" />

      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center justify-center">
        <section className="glass-panel grid w-full max-w-4xl overflow-hidden rounded-[28px] md:grid-cols-[1fr_1.1fr]">
          <div className="bg-primary px-6 py-8 text-white sm:px-8">
            <Link href="/" className="inline-flex items-center justify-center rounded-lg bg-white/95 px-4 py-3">
              <Image
                src="/csro_draft.svg"
                alt="CSRO Logo"
                width={140}
                height={50}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.28em] text-white/80">
              Admin CRM
            </p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight">
              Manage CSRO requests
            </h1>
            <p className="mt-4 text-sm leading-7 text-white/85">
              Leads, service requests, products, and FAQs stay in one focused dashboard.
            </p>
          </div>

          <div className="bg-white/85 px-6 py-8 backdrop-blur-xl sm:px-8">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
                Secure access
              </p>
              <h2 className="mt-3 text-2xl font-extrabold text-deep">Admin Login</h2>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-5">
              <label className="grid gap-2 text-sm font-semibold text-deep">
                Phone number
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="Enter admin phone number"
                  className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-deep outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold text-deep">
                Password
                <input
                  name="password"
                  type="password"
                  required
                  placeholder="Enter password"
                  className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-deep outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </label>

              {error ? <p className="text-sm font-semibold text-red-600">{error}</p> : null}

              <button type="submit" className="cta-primary w-full rounded-lg">
                Login to Dashboard
              </button>

              <Link href="/" className="text-center text-sm font-semibold text-slate-600 transition hover:text-primary">
                Back to website
              </Link>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
