import { NextResponse } from "next/server";
import { getMongoClient } from "@/lib/mongodb";

export async function GET() {
  const client = await getMongoClient();
  const db = client.db(process.env.MONGODB_DB ?? "csro");
  await db.command({ ping: 1 });
  return NextResponse.json({ status: "ok", message: "MongoDB connected" });
}