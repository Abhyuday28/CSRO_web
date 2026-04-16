"use client";
import { useState } from "react";

export function DemoFormSection() {
  const [activeForm, setActiveForm] = useState<"demo" | "service">("demo");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submitRequest(url: string, payload: Record<string, string>) {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const text = await response.text();
    let errorBody: { message?: string } | undefined;

    try {
      errorBody = text ? JSON.parse(text) : undefined;
    } catch {
      errorBody = undefined;
    }

    if (!response.ok) {
      throw new Error(errorBody?.message ?? `Request failed with status ${response.status}`);
    }

    return errorBody;
  }

  async function handleDemoSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    const form = event.currentTarget;

    try {
      const formData = new FormData(form);
      await submitRequest("/api/leads", {
        name: String(formData.get("demoName") ?? ""),
        phone: String(formData.get("demoPhone") ?? ""),
        city: String(formData.get("demoAddress") ?? ""),
        product: String(formData.get("demoPreferredTime") ?? "Free demo") || "Free demo"
      });
      form.reset();
      setMessage("Demo request submitted. CSRO will contact you soon.");
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error ?? "Unknown error");
      console.error("Demo form submission error:", error);
      setMessage(`Could not submit the demo request. ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleServiceSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    const form = event.currentTarget;

    try {
      const formData = new FormData(form);
      const serviceType = String(formData.get("serviceType") ?? "Service request") || "Service request";
      const address = String(formData.get("serviceAddress") ?? "");
      const preferredDate = String(formData.get("serviceDate") ?? "");

      await submitRequest("/api/service", {
        name: String(formData.get("serviceName") ?? ""),
        phone: String(formData.get("servicePhone") ?? ""),
        issue: [serviceType, address, preferredDate ? `Preferred date: ${preferredDate}` : ""]
          .filter(Boolean)
          .join(" | ")
      });
      form.reset();
      setMessage("Service request submitted. CSRO will contact you soon.");
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error ?? "Unknown error");
      console.error("Service form submission error:", error);
      setMessage(`Could not submit the service request. ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="demo" className="section-shell section-spacing">
      <div className="glass-panel rounded-[34px] p-6 sm:p-8 lg:p-10">
        <div className="grid gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
              Request type
            </p>
            <h2 className="section-heading mt-3">Choose your service</h2>
            <p className="section-copy mt-4">
              Pick one option below as required.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => setActiveForm("demo")}
              className={`rounded-[28px] border p-6 text-left transition ${
                activeForm === "demo"
                  ? "border-primary bg-primary text-white"
                  : "border-white/40 bg-white/70 text-deep hover:bg-slate-50"
              }`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.28em]">Book a free demo</p>
            </button>

            <button
              type="button"
              onClick={() => setActiveForm("service")}
              className={`rounded-[28px] border p-6 text-left transition ${
                activeForm === "service"
                  ? "border-success bg-success text-white"
                  : "border-white/40 bg-white/70 text-deep hover:bg-slate-50"
              }`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.28em]">Request a service</p>
            </button>
          </div>

          <div className="mt-0 sm:mt-10">
            {activeForm === "demo" ? (
              <form className="grid gap-4 mx-auto max-w-2xl rounded-[28px] border border-white/40 bg-white/75 p-6 shadow-card" onSubmit={handleDemoSubmit}>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Book Free Demo</p>
                <h3 className="mt-3 text-2xl font-semibold text-deep">Demo booking form</h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-semibold text-deep">
                    Name
                    <input
                      name="demoName"
                      type="text"
                      required
                      className="resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-deep outline-none shadow-sm transition focus:border-success focus:ring-2 focus:ring-success/20"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-semibold text-deep">
                    Phone number
                    <input
                      name="demoPhone"
                      type="tel"
                      required
                      className="resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-deep outline-none shadow-sm transition focus:border-success focus:ring-2 focus:ring-success/20"
                      placeholder="Your mobile number"
                    />
                  </label>
                </div>

                <label className="grid gap-2 text-sm font-semibold text-deep">
                  Address
                  <textarea
                    name="demoAddress"
                    rows={4}
                    required
                    className="resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-deep outline-none shadow-sm transition focus:border-success focus:ring-2 focus:ring-success/20"
                    placeholder="Where should we schedule the demo?"
                  />
                </label>

                <label className="grid gap-2 text-sm font-semibold text-deep">
                  Preferred time
                  <input
                    name="demoPreferredTime"
                    type="text"
                    className="resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-deep outline-none shadow-sm transition focus:border-success focus:ring-2 focus:ring-success/20"
                    placeholder="Example: Tomorrow evening"
                  />
                </label>

                {message ? <p className="text-sm font-semibold text-primary">{message}</p> : null}

                <button type="submit" disabled={isSubmitting} className="cta-primary w-full sm:w-fit disabled:cursor-not-allowed disabled:opacity-70">
                  {isSubmitting ? "Submitting..." : "Book Free Demo"}
                </button>
              </form>
            ) : (
              <form className="grid gap-4 mx-auto max-w-2xl rounded-[28px] border border-white/40 bg-white/75 p-6 shadow-card" onSubmit={handleServiceSubmit}>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-success">Request Service</p>
                <h3 className="mt-3 text-2xl font-semibold text-deep">Service request form</h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-semibold text-deep">
                    Name
                    <input
                      name="serviceName"
                      type="text"
                      required
                      className="resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-deep outline-none shadow-sm transition focus:border-success focus:ring-2 focus:ring-success/20"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-semibold text-deep">
                    Phone number
                    <input
                      name="servicePhone"
                      type="tel"
                      required
                      className="resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-deep outline-none shadow-sm transition focus:border-success focus:ring-2 focus:ring-success/20"
                      placeholder="Your mobile number"
                    />
                  </label>
                </div>

                <label className="grid gap-2 text-sm font-semibold text-deep">
                  Address
                  <textarea
                    name="serviceAddress"
                    rows={4}
                    required
                    className="resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-deep outline-none shadow-sm transition focus:border-success focus:ring-2 focus:ring-success/20"
                    placeholder="Where should the service be provided?"
                  />
                </label>

                <label className="grid gap-2 text-sm font-semibold text-deep">
                  Service required
                  <input
                    name="serviceType"
                    type="text"
                    className="resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-deep outline-none shadow-sm transition focus:border-success focus:ring-2 focus:ring-success/20"
                    placeholder="Maintenance, repair, filter change, etc."
                  />
                </label>

                <label className="grid gap-2 text-sm font-semibold text-deep">
                  Preferred service date
                  <input
                    name="serviceDate"
                    type="date"
                    className="resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-deep outline-none shadow-sm transition focus:border-success focus:ring-2 focus:ring-success/20"
                  />
                </label>

                {message ? <p className="text-sm font-semibold text-primary">{message}</p> : null}

                <button type="submit" disabled={isSubmitting} className="cta-primary w-full sm:w-fit disabled:cursor-not-allowed disabled:opacity-70">
                  {isSubmitting ? "Submitting..." : "Submit Service Request"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
