"use client";

import { useState } from "react";
import {
  serviceStatuses,
  type ServiceRequest,
  type ServiceStatus
} from "@/data/admin-data";
import {
  AdminTable,
  dangerButtonClass,
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

export function AdminServiceRequests({
  requests,
  onStatusChange,
  onDelete
}: {
  requests: ServiceRequest[];
  onStatusChange: (id: string, status: ServiceStatus) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}) {
  const [selectedRequest, setSelectedRequest] = useState<ServiceRequest | null>(null);

  return (
    <div className="space-y-5">
      <AdminTable headers={["Name", "Phone", "Issue", "Date", "Status", "Actions"]}>
        {requests.map((request) => (
          <tr key={request.id} className="transition hover:bg-slate-50">
            <td className="whitespace-nowrap px-4 py-3 font-medium text-slate-950">
              {request.name}
            </td>
            <td className="whitespace-nowrap px-4 py-3">{request.phone}</td>
            <td className="min-w-64 px-4 py-3">{request.issue}</td>
            <td className="whitespace-nowrap px-4 py-3">{formatDate(request.createdAt)}</td>
            <td className="whitespace-nowrap px-4 py-3">
              <select
                value={request.status}
                onChange={(event) => onStatusChange(request.id, event.target.value as ServiceStatus)}
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500"
              >
                {serviceStatuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </td>
            <td className="flex min-w-52 flex-wrap gap-2 px-4 py-3">
              <button
                type="button"
                onClick={() => setSelectedRequest(request)}
                className={secondaryButtonClass}
              >
                View
              </button>
              <button type="button" onClick={() => onDelete(request.id)} className={dangerButtonClass}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </AdminTable>

      {selectedRequest ? (
        <Modal title="Service Request Details" onClose={() => setSelectedRequest(null)}>
          <dl className="grid gap-4 text-sm text-slate-700 sm:grid-cols-2">
            <Detail label="Name" value={selectedRequest.name} />
            <Detail label="Phone" value={selectedRequest.phone} />
            <Detail label="Issue" value={selectedRequest.issue} />
            <Detail label="Date" value={formatDate(selectedRequest.createdAt)} />
            <div>
              <dt className="font-semibold text-slate-950">Status</dt>
              <dd className="mt-1">
                <StatusBadge label={selectedRequest.status} />
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
