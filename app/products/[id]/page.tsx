import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/product-detail";
import { getMongoClient } from "@/lib/mongodb";
import type { AdminProduct } from "@/data/admin-data";

export const dynamic = "force-dynamic";

async function getDb() {
  const client = await getMongoClient();
  return client.db(process.env.MONGODB_DB ?? "csro");
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const db = await getDb();
  const product = await db.collection<AdminProduct>("products").findOne({ id: params.id, active: true });

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
