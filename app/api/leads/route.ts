import { NextResponse } from "next/server";
import { createId, type Lead } from "@/data/admin-data";
import clientPromise from "@/lib/mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function getDb() {
  const client = await clientPromise;
  return client.db(process.env.MONGODB_DB ?? "csro");
}

export async function GET() {
  try {
    const db = await getDb();
    const leads = await db.collection<Lead>("leads").find().toArray();
    return NextResponse.json(leads);
  } catch (error) {
    console.error("Error reading leads store:", error);
    return NextResponse.json({ message: "Could not read leads" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const db = await getDb();
    const body = (await request.json()) as Partial<Lead>;
    const lead: Lead = {
      id: createId("lead"),
      name: body.name ?? "",
      phone: body.phone ?? "",
      city: body.city ?? "",
      product: body.product ?? "",
      status: body.status ?? "New",
      createdAt: body.createdAt ?? new Date().toISOString()
    };

    await db.collection("leads").insertOne(lead);

    return NextResponse.json(lead, { status: 201 });
  } catch (error) {
    console.error("Error creating lead:", error);
    return NextResponse.json(
      { message: "Could not save lead", error: String(error) },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  const db = await getDb();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const body = (await request.json()) as Partial<Lead>;

  if (!id) {
    return NextResponse.json({ message: "Lead id is required" }, { status: 400 });
  }

  const updateResult = await db.collection<Lead>("leads").updateOne({ id }, { $set: body });

  if (updateResult.matchedCount === 0) {
    return NextResponse.json({ message: "Lead not found" }, { status: 404 });
  }

  const updatedLead = await db.collection<Lead>("leads").findOne({ id });
  if (!updatedLead) {
    return NextResponse.json({ message: "Lead not found" }, { status: 404 });
  }

  return NextResponse.json(updatedLead);
}

export async function DELETE(request: Request) {
  const db = await getDb();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ message: "Lead id is required" }, { status: 400 });
  }

  const lead = await db.collection<Lead>("leads").findOne({ id });
  if (!lead) {
    return NextResponse.json({ message: "Lead not found" }, { status: 404 });
  }

  await db.collection<Lead>("leads").deleteOne({ id });
  return NextResponse.json(lead);
}
