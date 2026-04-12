"use client";

import { useState } from "react";
import type { FAQ } from "@/data/admin-data";
import {
  AdminTable,
  dangerButtonClass,
  inputClass,
  Modal,
  primaryButtonClass,
  secondaryButtonClass
} from "./admin-ui";

type FAQPayload = Omit<FAQ, "id">;

export function AdminFaqs({
  faqs,
  onSave,
  onDelete
}: {
  faqs: FAQ[];
  onSave: (payload: FAQPayload, id?: string) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}) {
  const [editingFaq, setEditingFaq] = useState<FAQ | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div className="space-y-5">
      <div className="flex justify-end">
        <button type="button" onClick={() => setIsAdding(true)} className={primaryButtonClass}>
          Add FAQ
        </button>
      </div>

      <AdminTable headers={["Question", "Answer", "Actions"]}>
        {faqs.map((faq) => (
          <tr key={faq.id} className="transition hover:bg-slate-50">
            <td className="min-w-72 px-4 py-3 font-medium text-slate-950">{faq.question}</td>
            <td className="min-w-96 px-4 py-3 text-slate-600">{faq.answer}</td>
            <td className="flex min-w-48 flex-wrap gap-2 px-4 py-3">
              <button type="button" onClick={() => setEditingFaq(faq)} className={secondaryButtonClass}>
                Edit
              </button>
              <button type="button" onClick={() => onDelete(faq.id)} className={dangerButtonClass}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </AdminTable>

      {isAdding ? (
        <Modal title="Add FAQ" onClose={() => setIsAdding(false)}>
          <FAQForm
            faq={{ question: "", answer: "" }}
            onSubmit={async (payload) => {
              await onSave(payload);
              setIsAdding(false);
            }}
          />
        </Modal>
      ) : null}

      {editingFaq ? (
        <Modal title="Edit FAQ" onClose={() => setEditingFaq(null)}>
          <FAQForm
            faq={editingFaq}
            onSubmit={async (payload) => {
              await onSave(payload, editingFaq.id);
              setEditingFaq(null);
            }}
          />
        </Modal>
      ) : null}
    </div>
  );
}

function FAQForm({
  faq,
  onSubmit
}: {
  faq: FAQPayload;
  onSubmit: (payload: FAQPayload) => Promise<void>;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);
    await onSubmit({
      question: String(formData.get("question") ?? ""),
      answer: String(formData.get("answer") ?? "")
    });
    setIsSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <label className="grid gap-2 text-sm font-semibold text-slate-700">
        Question
        <input name="question" defaultValue={faq.question} required className={inputClass} />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-700">
        Answer
        <textarea name="answer" rows={5} defaultValue={faq.answer} required className={inputClass} />
      </label>
      <button type="submit" disabled={isSubmitting} className={primaryButtonClass}>
        {isSubmitting ? "Saving..." : "Save FAQ"}
      </button>
    </form>
  );
}
