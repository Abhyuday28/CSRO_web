"use client";

import { useMemo, useState } from "react";
import { leadStatuses, type Lead, type LeadStatus } from "@/data/admin-data";
import {
  AdminTable,
  dangerButtonClass,
  inputClass,
  Modal,
  secondaryButtonClass,
  StatusBadge
} from "./admin-ui";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(new Date(value));
}

export function AdminLeads({
  leads,
  onStatusChange,
  onDelete
}: {
  leads: Lead[];
  onStatusChange: (id: string, status: LeadStatus) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}) {
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [statusFilter, setStatusFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState("");

  const filteredLeads = useMemo(
    () =>
      leads.filter((lead) => {
        const statusMatch = statusFilter === "All" || lead.status === statusFilter;
        const dateMatch = !dateFilter || lead.createdAt.slice(0, 10) === dateFilter;
        return statusMatch && dateMatch;
      }),
    [dateFilter, leads, statusFilter]
  );

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-4 md:flex-row md:items-end">
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Filter by date
          <input
            type="date"
            value={dateFilter}
            onChange={(event) => setDateFilter(event.target.value)}
            className={inputClass}
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Filter by status
          <select
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
            className={inputClass}
          >
            <option value="All">All</option>
            {leadStatuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </label>
      </div>

      <AdminTable
        headers={["Name", "Phone", "City", "Interested Product", "Date", "Status", "Actions"]}
      >
        {filteredLeads.map((lead) => (
          <tr key={lead.id} className="transition hover:bg-slate-50">
            <td className="whitespace-nowrap px-4 py-3 font-medium text-slate-950">{lead.name}</td>
            <td className="whitespace-nowrap px-4 py-3">{lead.phone}</td>
            <td className="whitespace-nowrap px-4 py-3">{lead.city}</td>
            <td className="whitespace-nowrap px-4 py-3">{lead.product}</td>
            <td className="whitespace-nowrap px-4 py-3">{formatDate(lead.createdAt)}</td>
            <td className="whitespace-nowrap px-4 py-3">
              <select
                value={lead.status}
                onChange={(event) => onStatusChange(lead.id, event.target.value as LeadStatus)}
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500"
              >
                {leadStatuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </td>
            <td className="flex min-w-72 flex-wrap gap-2 px-4 py-3">
              <button type="button" onClick={() => setSelectedLead(lead)} className={secondaryButtonClass}>
                View
              </button>
              <a href={`tel:${lead.phone}`} className={secondaryButtonClass}>
                Call
              </a>
              <button type="button" onClick={() => onDelete(lead.id)} className={dangerButtonClass}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </AdminTable>

      {selectedLead ? (
        <Modal title="Lead Details" onClose={() => setSelectedLead(null)}>
          <dl className="grid gap-4 text-sm text-slate-700 sm:grid-cols-2">
            <Detail label="Name" value={selectedLead.name} />
            <Detail label="Phone" value={selectedLead.phone} />
            <Detail label="City" value={selectedLead.city} />
            <Detail label="Interested Product" value={selectedLead.product} />
            <Detail label="Date" value={formatDate(selectedLead.createdAt)} />
            <div>
              <dt className="font-semibold text-slate-950">Status</dt>
              <dd className="mt-1">
                <StatusBadge label={selectedLead.status} />
              </dd>
            </div>
          </dl>
        </Modal>
      ) : null}
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-semibold text-slate-950">{label}</dt>
      <dd className="mt-1 text-slate-600">{value}</dd>
    </div>
  );
}
