import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="glass-panel group flex h-full flex-col overflow-hidden rounded-[30px] transition duration-300 hover:-translate-y-2 hover:shadow-card">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
          {product.feature}
        </p>
        <h3 className="mt-3 text-lg font-semibold text-deep sm:text-xl">{product.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 hidden sm:block">{product.description}</p>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Link href="#demo" className="cta-primary px-4 py-2 text-sm">
            Book Now
          </Link>
        </div>
      </div>
    </article>
  );
}
