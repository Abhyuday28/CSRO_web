"use client";

import type { ReactNode } from "react";

export function AdminTable({
  headers,
  children
}: {
  headers: string[];
  children: ReactNode;
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-white/50 bg-white/80 shadow-card backdrop-blur-xl">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-primary/10 text-xs uppercase text-deep">
          <tr>
            {headers.map((header) => (
              <th key={header} className="whitespace-nowrap px-4 py-3 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-slate-700">{children}</tbody>
      </table>
    </div>
  );
}

export function Modal({
  title,
  children,
  onClose
}: {
  title: string;
  children: ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-deep/45 px-4 py-6 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg border border-white/50 bg-white/95 shadow-card">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <h2 className="text-lg font-semibold text-deep">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-primary/20 bg-white px-3 py-1 text-sm font-semibold text-deep transition hover:border-primary/40 hover:bg-primary/10"
          >
            Close
          </button>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}

export function StatusBadge({ label }: { label: string }) {
  const tone =
    label === "Converted" || label === "Resolved" || label === "Active"
      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
      : label === "New" || label === "Pending"
        ? "border-sky-200 bg-sky-50 text-sky-700"
        : "border-amber-200 bg-amber-50 text-amber-700";

  return (
    <span className={`inline-flex rounded-md border px-2.5 py-1 text-xs font-semibold ${tone}`}>
      {label}
    </span>
  );
}

export function EmptyState({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border border-dashed border-slate-300 bg-white px-4 py-8 text-center text-sm text-slate-500">
      {children}
    </div>
  );
}

export const inputClass =
  "w-full rounded-lg border border-slate-200 bg-white/90 px-3 py-2 text-sm text-deep outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

export const primaryButtonClass =
  "rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:bg-success";

export const secondaryButtonClass =
  "rounded-lg border border-primary/20 bg-white/80 px-3 py-2 text-sm font-semibold text-deep transition hover:border-primary/40 hover:bg-primary/10 hover:text-primary";

export const dangerButtonClass =
  "rounded-lg border border-red-200 bg-white px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50";
