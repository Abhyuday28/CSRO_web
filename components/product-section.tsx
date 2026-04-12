import { products } from "@/data/products";
import { ProductCard } from "@/components/product-card";

export function ProductSection() {
  return (
    <section id="products" className="section-shell section-spacing">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="section-heading mt-3">Products</h2>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
            Purifiers crafted for every kind of space
          </p>
        </div>
        {/* <p className="section-copy">
          From compact home setups to high-use office environments, CSRO brings natural
          filtration and premium aesthetics together in one reliable system.
        </p> */}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
