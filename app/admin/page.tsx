import { AdminDashboard } from "@/components/admin/admin-dashboard";
import clientPromise from "@/lib/mongodb";
import type { AdminProduct, FAQ, Lead, ServiceRequest } from "@/data/admin-data";

export const metadata = {
  title: "CSRO Admin Dashboard"
};

export const dynamic = "force-dynamic";

async function getDb() {
  const client = await clientPromise;
  return client.db(process.env.MONGODB_DB ?? "csro");
}

export default async function AdminPage() {
  const db = await getDb();

  const [leads, serviceRequests, products, faqs] = await Promise.all([
    db.collection<Lead>("leads").find().toArray(),
    db.collection<ServiceRequest>("serviceRequests").find().toArray(),
    db.collection<AdminProduct>("products").find().toArray(),
    db.collection<FAQ>("faqs").find().toArray()
  ]);

  return (
    <AdminDashboard
      initialLeads={leads}
      initialServiceRequests={serviceRequests}
      initialProducts={products}
      initialFaqs={faqs}
    />
  );
}
