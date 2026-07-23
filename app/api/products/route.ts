import { NextResponse } from "next/server";
import { createId, type AdminProduct } from "@/data/admin-data";
import { getMongoClient } from "@/lib/mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function getDb() {
  const client = await getMongoClient();
  return client.db(process.env.MONGODB_DB ?? "csro");
}

export async function GET() {
  const db = await getDb();
  const products = await db.collection<AdminProduct>("products").find().toArray();
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const db = await getDb();
  const body = (await request.json()) as Partial<AdminProduct>;
  const product: AdminProduct = {
    id: createId("product"),
    name: body.name ?? "",
    feature: body.feature ?? "",
    description: body.description ?? "",
    price: Number(body.price ?? 0),
    features: body.features ?? [],
    image: body.image ?? "",
    images: body.images ?? [],
    tag: body.tag ?? "",
    active: body.active ?? true
  };

  await db.collection("products").insertOne(product);

  return NextResponse.json(product, { status: 201 });
}

export async function PUT(request: Request) {
  const db = await getDb();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ message: "Product id is required" }, { status: 400 });
  }

  const body = (await request.json()) as Partial<AdminProduct>;
  const updates: Partial<AdminProduct> = { ...body };

  if (body.price !== undefined) {
    updates.price = Number(body.price);
  }

  const result = await db.collection<AdminProduct>("products").findOneAndUpdate(
    { id },
    { $set: updates },
    { returnDocument: "after" }
  );

  if (!result) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(result);
}

export async function DELETE(request: Request) {
  const db = await getDb();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ message: "Product id is required" }, { status: 400 });
  }

  const result = await db.collection<AdminProduct>("products").findOneAndDelete({ id });

  if (!result) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(result);
}
