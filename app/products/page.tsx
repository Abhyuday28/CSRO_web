import { ProductCard } from "@/components/product-card";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <main className="section-shell section-spacing">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
            Product catalog
          </p>
          <h1 className="section-heading mt-3">Explore CSRO products</h1>
          <p className="section-copy mt-4 max-w-2xl">
            Browse every purifier model, compare features, and open the product page to see pricing, extra images,
            and demo booking information.
          </p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
