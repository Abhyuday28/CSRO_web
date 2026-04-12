import { AdminDashboard } from "@/components/admin/admin-dashboard";
import { readStore } from "@/data/local-store";

export const metadata = {
  title: "CSRO Admin Dashboard"
};

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const data = await readStore();

  return (
    <AdminDashboard
      initialLeads={data.leads}
      initialServiceRequests={data.serviceRequests}
      initialProducts={data.products}
      initialFaqs={data.faqs}
    />
  );
}
