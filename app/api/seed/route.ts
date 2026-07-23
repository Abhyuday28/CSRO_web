import { NextResponse } from "next/server";
import { getMongoClient } from "@/lib/mongodb";
import {
  adminProducts,
  adminLeads,
  adminServiceRequests,
  adminFaqs
} from "@/data/admin-data";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function getDb() {
  const client = await getMongoClient();
  return client.db(process.env.MONGODB_DB ?? "csro");
}

export async function GET() {
  const db = await getDb();
  const [products, leads, serviceRequests, faqs] = await Promise.all([
    db.collection("products").countDocuments(),
    db.collection("leads").countDocuments(),
    db.collection("serviceRequests").countDocuments(),
    db.collection("faqs").countDocuments()
  ]);

  return NextResponse.json({
    status: "ok",
    collections: {
      products,
      leads,
      serviceRequests,
      faqs
    }
  });
}

export async function POST() {
  const db = await getDb();

  const [productsCount, leadsCount, serviceCount, faqsCount] = await Promise.all([
    db.collection("products").countDocuments(),
    db.collection("leads").countDocuments(),
    db.collection("serviceRequests").countDocuments(),
    db.collection("faqs").countDocuments()
  ]);

  const results = {
    products: 0,
    leads: 0,
    serviceRequests: 0,
    faqs: 0,
    skipped: [] as string[]
  };

  if (productsCount === 0) {
    const { insertedCount } = await db.collection("products").insertMany(adminProducts);
    results.products = insertedCount;
  } else {
    results.skipped.push("products");
  }

  if (leadsCount === 0) {
    const { insertedCount } = await db.collection("leads").insertMany(adminLeads);
    results.leads = insertedCount;
  } else {
    results.skipped.push("leads");
  }

  if (serviceCount === 0) {
    const { insertedCount } = await db.collection("serviceRequests").insertMany(adminServiceRequests);
    results.serviceRequests = insertedCount;
  } else {
    results.skipped.push("serviceRequests");
  }

  if (faqsCount === 0) {
    const { insertedCount } = await db.collection("faqs").insertMany(adminFaqs);
    results.faqs = insertedCount;
  } else {
    results.skipped.push("faqs");
  }

  return NextResponse.json({ status: "seeded", results });
}
