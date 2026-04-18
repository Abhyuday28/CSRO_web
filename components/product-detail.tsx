"use client";

import { useState } from "react";
import Link from "next/link";
import type { AdminProduct } from "@/data/admin-data";

type ProductDetailProps = {
  product: AdminProduct;
};

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedImage = product.images[selectedIndex] ?? product.image;

  const handlePrevImage = () => {
    setSelectedIndex((current) => (current - 1 + product.images.length) % product.images.length);
  };

  const handleNextImage = () => {
    setSelectedIndex((current) => (current + 1) % product.images.length);
  };

  return (
    <main className="section-shell section-spacing">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="order-2 lg:order-1">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
            {product.feature}
          </p>
          <h1 className="section-heading mt-3">{product.name}</h1>
          <p className="section-copy mt-4 max-w-2xl">
            {product.description}
          </p>

          <div className="mt-8 space-y-6 rounded-[28px] border border-white/50 bg-white/80 p-6 shadow-card">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Price</p>
                <p className="mt-2 text-4xl font-extrabold text-deep">₹{product.price.toLocaleString("en-IN")}</p>
              </div>
              <Link href="/#demo" className="cta-primary px-5 py-3 text-sm">
                Book a demo
              </Link>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Key features</p>
              <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-700">
                {product.features.map((feature) => (
                  <li key={feature} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4 rounded-[28px] border border-white/50 bg-white/80 p-6 shadow-card">
            <h2 className="text-xl font-semibold text-deep">Product overview</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              Explore CSRO&apos;s premium product page for detailed features, pricing, and additional visuals.
            </p>
            <div className="mt-6 space-y-3 text-sm text-slate-700">
              <p>
                <span className="font-semibold text-deep">Model:</span> {product.name}
              </p>
              <p>
                <span className="font-semibold text-deep">Category:</span> {product.feature}
              </p>
              <p>
                <span className="font-semibold text-deep">Availability:</span> In stock
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-[30px] shadow-card">
            <img src={selectedImage} alt={product.name} className="w-full object-cover" />
            <button
              type="button"
              onClick={handlePrevImage}
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 text-slate-900 text-4xl transition duration-300 hover:text-slate-900 lg:hidden"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={handleNextImage}
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 text-slate-900 text-4xl transition duration-300 hover:text-slate-900 lg:hidden"
              aria-label="Next image"
            >
              ›
            </button>
          </div>

          <div className="flex justify-center gap-2">
            {Array.from({ length: product.images.length > 0 ? product.images.length : 1 }, (_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setSelectedIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === selectedIndex ? "w-4 bg-primary" : "w-2 bg-slate-300"
                }`}
                aria-label={`View image ${i + 1}`}
              />
            ))}
          </div>

          <div className="mt-6 hidden rounded-[28px] border border-white/50 bg-white/80 p-6 shadow-card lg:block">
            <div className="relative">
              <div className="absolute left-2 top-1/2 z-10 -translate-y-1/2 sm:left-4">
                <button
                  type="button"
                  onClick={handlePrevImage}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/40 text-slate-900 text-2xl shadow-lg shadow-slate-300/20 backdrop-blur-xl transition duration-300 hover:bg-white/60 hover:text-slate-900"
                  aria-label="Previous image"
                >
                  ‹
                </button>
              </div>
              <div className="absolute right-2 top-1/2 z-10 -translate-y-1/2 sm:right-4">
                <button
                  type="button"
                  onClick={handleNextImage}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/40 text-slate-900 text-2xl shadow-lg shadow-slate-300/20 backdrop-blur-xl transition duration-300 hover:bg-white/60 hover:text-slate-900"
                  aria-label="Next image"
                >
                  ›
                </button>
              </div>
              <div className="mt-2 flex gap-4 overflow-x-auto pb-1 hide-scrollbar">
                {product.images.map((src, index) => (
                  <button
                    key={`${product.id}-${index}`}
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    className={`flex-shrink-0 overflow-hidden rounded-[28px] border transition duration-200 focus:outline-none ${
                      index === selectedIndex ? "border-primary shadow-card" : "border-white/70"
                    }`}
                  >
                    <img
                      src={src}
                      alt={`${product.name} image ${index + 1}`}
                      className="h-40 w-40 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/products"
            className="hidden lg:inline-flex rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-deep transition hover:border-primary/40 hover:text-primary"
          >
            Back to products
          </Link>
        </div>
      </div>

      <div className="mt-6 flex lg:hidden">
        <Link
          href="/products"
          className="inline-flex rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-deep transition hover:border-primary/40 hover:text-primary"
        >
          Back to products
        </Link>
      </div>
    </main>
  );
}
