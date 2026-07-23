import { NextResponse } from "next/server";
import { createId, type ServiceRequest } from "@/data/admin-data";
import { getMongoClient } from "@/lib/mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function getDb() {
  const client = await getMongoClient();
  return client.db(process.env.MONGODB_DB ?? "csro");
}

export async function GET() {
  const db = await getDb();
  const serviceRequests = await db.collection<ServiceRequest>("serviceRequests").find().toArray();
  return NextResponse.json(serviceRequests);
}

export async function POST(request: Request) {
  try {
    const db = await getDb();
    const body = (await request.json()) as Partial<ServiceRequest>;
    const serviceRequest: ServiceRequest = {
      id: createId("service"),
      name: body.name ?? "",
      phone: body.phone ?? "",
      issue: body.issue ?? "",
      status: body.status ?? "Pending",
      createdAt: body.createdAt ?? new Date().toISOString()
    };

    await db.collection("serviceRequests").insertOne(serviceRequest);

    return NextResponse.json(serviceRequest, { status: 201 });
  } catch (error) {
    console.error("Error creating service request:", error);
    return NextResponse.json(
      { message: "Could not save service request", error: String(error) },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  const db = await getDb();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const body = (await request.json()) as Partial<ServiceRequest>;

  if (!id) {
    return NextResponse.json({ message: "Service request id is required" }, { status: 400 });
  }

  const updateResult = await db
    .collection<ServiceRequest>("serviceRequests")
    .updateOne({ id }, { $set: body });

  if (updateResult.matchedCount === 0) {
    return NextResponse.json({ message: "Service request not found" }, { status: 404 });
  }

  const updatedRequest = await db.collection<ServiceRequest>("serviceRequests").findOne({ id });
  if (!updatedRequest) {
    return NextResponse.json({ message: "Service request not found" }, { status: 404 });
  }

  return NextResponse.json(updatedRequest);
}

export async function DELETE(request: Request) {
  const db = await getDb();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ message: "Service request id is required" }, { status: 400 });
  }

  const requestItem = await db.collection<ServiceRequest>("serviceRequests").findOne({ id });
  if (!requestItem) {
    return NextResponse.json({ message: "Service request not found" }, { status: 404 });
  }

  await db.collection<ServiceRequest>("serviceRequests").deleteOne({ id });
  return NextResponse.json(requestItem);
}
