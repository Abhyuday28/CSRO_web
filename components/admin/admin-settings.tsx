"use client";

import { useState } from "react";
import { inputClass, primaryButtonClass } from "./admin-ui";

export function AdminSettings() {
  const [saved, setSaved] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1800);
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-5 rounded-lg border border-slate-200 bg-white p-5">
      <label className="grid gap-2 text-sm font-semibold text-slate-700">
        WhatsApp number
        <input name="whatsapp" defaultValue="+919876543210" className={inputClass} />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-700">
        Contact email
        <input name="email" type="email" defaultValue="support@csro.in" className={inputClass} />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-700">
        Admin display name
        <input name="adminName" defaultValue="CSRO Admin" className={inputClass} />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-700">
        Notes
        <textarea
          name="notes"
          rows={4}
          defaultValue="Use this dashboard to manage CSRO leads, service requests, products, and FAQs."
          className={inputClass}
        />
      </label>
      <div className="flex items-center gap-3">
        <button type="submit" className={primaryButtonClass}>
          Save Settings
        </button>
        {saved ? <span className="text-sm font-semibold text-emerald-600">Saved</span> : null}
      </div>
    </form>
  );
}
