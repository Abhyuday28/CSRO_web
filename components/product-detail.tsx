"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";

type ProductDetailProps = {
  product: Product;
};

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(product.images[0] ?? product.image);

  return (
    <main className="section-shell section-spacing">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
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
              <ul className="mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                {product.features.map((feature) => (
                  <li key={feature} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">More images</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {product.images.map((src, index) => (
                  <button
                    key={`${product.id}-${index}`}
                    type="button"
                    onClick={() => setSelectedImage(src)}
                    className={`overflow-hidden rounded-[28px] border transition duration-200 focus:outline-none ${
                      selectedImage === src ? "border-primary shadow-card" : "border-white/70"
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`${product.name} image ${index + 1}`}
                      width={800}
                      height={600}
                      className="h-56 w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="overflow-hidden rounded-[30px] shadow-card">
            <Image
              src={selectedImage}
              alt={product.name}
              width={1200}
              height={900}
              className="w-full object-cover"
            />
          </div>

          <div className="rounded-[28px] border border-white/50 bg-white/80 p-6 shadow-card">
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

          <Link
            href="/products"
            className="inline-flex rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-deep transition hover:border-primary/40 hover:text-primary"
          >
            Back to products
          </Link>
        </div>
      </div>
    </main>
  );
}
