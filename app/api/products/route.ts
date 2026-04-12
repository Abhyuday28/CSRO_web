import { NextResponse } from "next/server";
import { createId, type AdminProduct } from "@/data/admin-data";
import { readStore, updateStore } from "@/data/local-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const data = await readStore();
  return NextResponse.json(data.products);
}

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<AdminProduct>;
  const product: AdminProduct = {
    id: createId("product"),
    name: body.name ?? "",
    price: Number(body.price ?? 0),
    features: body.features ?? [],
    image: body.image ?? "",
    tag: body.tag ?? "",
    active: body.active ?? true
  };

  await updateStore((data) => {
    data.products.unshift(product);
  });

  return NextResponse.json(product, { status: 201 });
}

export async function PUT(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const body = (await request.json()) as Partial<AdminProduct>;

  const updatedProduct = await updateStore((data) => {
    const index = data.products.findIndex((product) => product.id === id);

    if (index === -1) {
      return null;
    }

    data.products[index] = {
      ...data.products[index],
      ...body,
      price: body.price === undefined ? data.products[index].price : Number(body.price)
    };
    return data.products[index];
  });

  if (!updatedProduct) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(updatedProduct);
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const deletedProduct = await updateStore((data) => {
    const index = data.products.findIndex((product) => product.id === id);

    if (index === -1) {
      return null;
    }

    const [product] = data.products.splice(index, 1);
    return product;
  });

  if (!deletedProduct) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(deletedProduct);
}
