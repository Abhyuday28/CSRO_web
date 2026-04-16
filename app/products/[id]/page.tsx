import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { ProductDetail } from "@/components/product-detail";

function getProduct(id: string) {
  return products.find((product) => product.id === Number(id));
}

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id.toString() }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
