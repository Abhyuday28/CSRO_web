import { ProductCard } from "@/components/product-card";
import clientPromise from "@/lib/mongodb";
import type { AdminProduct } from "@/data/admin-data";

export const dynamic = "force-dynamic";

async function getDb() {
  const client = await clientPromise;
  return client.db(process.env.MONGODB_DB ?? "csro");
}

export async function ProductSection() {
  const db = await getDb();
  const products = await db.collection<AdminProduct>("products").find({ active: true }).toArray();

  return (
    <section id="products" className="section-shell section-spacing">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="section-heading mt-3">Products</h2>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
            Purifiers crafted for every kind of space
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
