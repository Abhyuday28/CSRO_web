"use client";

import type { AdminProduct, Lead, ServiceRequest } from "@/data/admin-data";
import { AdminTable, StatusBadge } from "./admin-ui";

function isToday(value: string) {
  const date = new Date(value);
  const today = new Date();
  return date.toDateString() === today.toDateString();
}

function isThisWeek(value: string) {
  const date = new Date(value);
  const now = new Date();
  const weekAgo = new Date(now);
  weekAgo.setDate(now.getDate() - 7);
  return date >= weekAgo && date <= now;
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(new Date(value));
}

export function AdminOverview({
  leads,
  serviceRequests,
  products
}: {
  leads: Lead[];
  serviceRequests: ServiceRequest[];
  products: AdminProduct[];
}) {
  const cards = [
    { label: "Total Leads Today", value: leads.filter((lead) => isToday(lead.createdAt)).length },
    { label: "Total Leads This Week", value: leads.filter((lead) => isThisWeek(lead.createdAt)).length },
    { label: "Service Requests", value: serviceRequests.length },
    { label: "Total Products", value: products.length }
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <div key={card.label} className="rounded-lg border border-white/50 bg-white/75 p-5 shadow-card backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{card.label}</p>
            <p className="mt-3 text-4xl font-extrabold text-deep">{card.value}</p>
          </div>
        ))}
      </div>

      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-xl font-extrabold text-deep">Recent Activity</h2>
          <p className="text-sm text-slate-500">Latest demo requests</p>
        </div>
        <AdminTable headers={["Name", "Phone", "Address", "Preferred time", "Date", "Status"]}>
          {leads.slice(0, 5).map((lead) => (
            <tr key={lead.id} className="transition hover:bg-slate-50">
              <td className="whitespace-nowrap px-4 py-3 font-medium text-slate-950">{lead.name}</td>
              <td className="whitespace-nowrap px-4 py-3">{lead.phone}</td>
              <td className="whitespace-nowrap px-4 py-3">{lead.city}</td>
              <td className="whitespace-nowrap px-4 py-3">{lead.product}</td>
              <td className="whitespace-nowrap px-4 py-3">{formatDate(lead.createdAt)}</td>
              <td className="whitespace-nowrap px-4 py-3">
                <StatusBadge label={lead.status} />
              </td>
            </tr>
          ))}
        </AdminTable>
      </section>
    </div>
  );
}
