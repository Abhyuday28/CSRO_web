import { NextResponse } from "next/server";
import { createId, type FAQ } from "@/data/admin-data";
import { getMongoClient } from "@/lib/mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function getDb() {
  const client = await getMongoClient();
  return client.db(process.env.MONGODB_DB ?? "csro");
}

export async function GET() {
  const db = await getDb();
  const faqs = await db.collection<FAQ>("faqs").find().toArray();
  return NextResponse.json(faqs);
}

export async function POST(request: Request) {
  const db = await getDb();
  const body = (await request.json()) as Partial<FAQ>;
  const faq: FAQ = {
    id: createId("faq"),
    question: body.question ?? "",
    answer: body.answer ?? ""
  };

  await db.collection("faqs").insertOne(faq);

  return NextResponse.json(faq, { status: 201 });
}

export async function PUT(request: Request) {
  const db = await getDb();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const body = (await request.json()) as Partial<FAQ>;

  if (!id) {
    return NextResponse.json({ message: "FAQ id is required" }, { status: 400 });
  }

  const result = await db.collection<FAQ>("faqs").findOneAndUpdate(
    { id },
    { $set: body },
    { returnDocument: "after" }
  );

  if (!result) {
    return NextResponse.json({ message: "FAQ not found" }, { status: 404 });
  }

  return NextResponse.json(result);
}

export async function DELETE(request: Request) {
  const db = await getDb();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ message: "FAQ id is required" }, { status: 400 });
  }

  const result = await db.collection<FAQ>("faqs").findOneAndDelete({ id });

  if (!result) {
    return NextResponse.json({ message: "FAQ not found" }, { status: 404 });
  }

  return NextResponse.json(result);
}
