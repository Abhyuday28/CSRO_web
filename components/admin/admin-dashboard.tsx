"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { AdminFaqs } from "@/components/admin/admin-faqs";
import { AdminLeads } from "@/components/admin/admin-leads";
import { AdminOverview } from "@/components/admin/admin-overview";
import { AdminProducts } from "@/components/admin/admin-products";
import { AdminServiceRequests } from "@/components/admin/admin-service-requests";
import { AdminSettings } from "@/components/admin/admin-settings";
import type {
  AdminProduct,
  FAQ,
  Lead,
  LeadStatus,
  ServiceRequest,
  ServiceStatus
} from "@/data/admin-data";

type Section = "dashboard" | "leads" | "service" | "products" | "faqs" | "settings";

const navItems: { id: Section; label: string }[] = [
  { id: "dashboard", label: "Dashboard" },
  { id: "leads", label: "Leads (Demo Requests)" },
  { id: "service", label: "Service Requests" },
  { id: "products", label: "Products" },
  { id: "faqs", label: "FAQs" },
  { id: "settings", label: "Settings" }
];

async function apiRequest<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers ?? {})
    }
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export function AdminDashboard({
  initialLeads,
  initialServiceRequests,
  initialProducts,
  initialFaqs
}: {
  initialLeads: Lead[];
  initialServiceRequests: ServiceRequest[];
  initialProducts: AdminProduct[];
  initialFaqs: FAQ[];
}) {
  const [activeSection, setActiveSection] = useState<Section>("dashboard");
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [serviceRequests, setServiceRequests] = useState<ServiceRequest[]>(initialServiceRequests);
  const [products, setProducts] = useState<AdminProduct[]>(initialProducts);
  const [faqs, setFaqs] = useState<FAQ[]>(initialFaqs);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const pageTitle = useMemo(
    () => navItems.find((item) => item.id === activeSection)?.label ?? "Dashboard",
    [activeSection]
  );

  useEffect(() => {
    async function loadData() {
      try {
        const [leadData, serviceData, productData, faqData] = await Promise.all([
          apiRequest<Lead[]>("/api/leads"),
          apiRequest<ServiceRequest[]>("/api/service"),
          apiRequest<AdminProduct[]>("/api/products"),
          apiRequest<FAQ[]>("/api/faqs")
        ]);

        setLeads(leadData);
        setServiceRequests(serviceData);
        setProducts(productData);
        setFaqs(faqData);
      } catch (requestError) {
        setError("Dashboard data could not be loaded.");
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  async function updateLeadStatus(id: string, status: LeadStatus) {
    const updatedLead = await apiRequest<Lead>(`/api/leads?id=${id}`, {
      method: "PUT",
      body: JSON.stringify({ status })
    });
    setLeads((current) => current.map((lead) => (lead.id === id ? updatedLead : lead)));
  }

  async function deleteLead(id: string) {
    await apiRequest<Lead>(`/api/leads?id=${id}`, { method: "DELETE" });
    setLeads((current) => current.filter((lead) => lead.id !== id));
  }

  async function updateServiceStatus(id: string, status: ServiceStatus) {
    const updatedRequest = await apiRequest<ServiceRequest>(`/api/service?id=${id}`, {
      method: "PUT",
      body: JSON.stringify({ status })
    });
    setServiceRequests((current) =>
      current.map((request) => (request.id === id ? updatedRequest : request))
    );
  }

  async function deleteServiceRequest(id: string) {
    await apiRequest<ServiceRequest>(`/api/service?id=${id}`, { method: "DELETE" });
    setServiceRequests((current) => current.filter((request) => request.id !== id));
  }

  async function saveProduct(payload: Omit<AdminProduct, "id">, id?: string) {
    const savedProduct = await apiRequest<AdminProduct>(id ? `/api/products?id=${id}` : "/api/products", {
      method: id ? "PUT" : "POST",
      body: JSON.stringify(payload)
    });

    setProducts((current) =>
      id ? current.map((product) => (product.id === id ? savedProduct : product)) : [savedProduct, ...current]
    );
  }

  async function deleteProduct(id: string) {
    await apiRequest<AdminProduct>(`/api/products?id=${id}`, { method: "DELETE" });
    setProducts((current) => current.filter((product) => product.id !== id));
  }

  async function saveFaq(payload: Omit<FAQ, "id">, id?: string) {
    const savedFaq = await apiRequest<FAQ>(id ? `/api/faqs?id=${id}` : "/api/faqs", {
      method: id ? "PUT" : "POST",
      body: JSON.stringify(payload)
    });

    setFaqs((current) => (id ? current.map((faq) => (faq.id === id ? savedFaq : faq)) : [savedFaq, ...current]));
  }

  async function deleteFaq(id: string) {
    await apiRequest<FAQ>(`/api/faqs?id=${id}`, { method: "DELETE" });
    setFaqs((current) => current.filter((faq) => faq.id !== id));
  }

  function renderSection() {
    if (isLoading) {
      return <div className="rounded-lg border border-slate-200 bg-white p-5 text-sm text-slate-500">Loading dashboard...</div>;
    }

    if (error) {
      return <div className="rounded-lg border border-red-200 bg-red-50 p-5 text-sm font-semibold text-red-700">{error}</div>;
    }

    switch (activeSection) {
      case "dashboard":
        return <AdminOverview leads={leads} serviceRequests={serviceRequests} products={products} />;
      case "leads":
        return <AdminLeads leads={leads} onStatusChange={updateLeadStatus} onDelete={deleteLead} />;
      case "service":
        return (
          <AdminServiceRequests
            requests={serviceRequests}
            onStatusChange={updateServiceStatus}
            onDelete={deleteServiceRequest}
          />
        );
      case "products":
        return <AdminProducts products={products} onSave={saveProduct} onDelete={deleteProduct} />;
      case "faqs":
        return <AdminFaqs faqs={faqs} onSave={saveFaq} onDelete={deleteFaq} />;
      case "settings":
        return <AdminSettings />;
      default:
        return null;
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f5f0] text-deep">
      <div className="absolute inset-0 -z-10 bg-hero-radial" />
      <div className="grid min-h-screen gap-0 lg:grid-cols-[280px_1fr]">
        <aside className="border-b border-white/50 bg-white/70 shadow-card backdrop-blur-xl lg:border-b-0 lg:border-r">
          <div className="px-5 py-6">
            <div className="flex h-20 items-center rounded-lg bg-white/90 px-4 shadow-glow">
              <Image
                src="/csro_draft.svg"
                alt="CSRO Logo"
                width={180}
                height={72}
                className="h-14 w-auto object-contain"
                priority
              />
            </div>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary">Admin CRM</p>
          </div>
          <nav className="flex gap-2 overflow-x-auto px-4 pb-5 lg:grid lg:overflow-visible">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveSection(item.id)}
                className={`whitespace-nowrap rounded-lg border px-4 py-3 text-left text-sm font-semibold transition ${
                  activeSection === item.id
                    ? "border-primary bg-primary text-white shadow-glow"
                    : "border-transparent bg-white/45 text-deep hover:border-primary/25 hover:bg-white hover:text-primary"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        <section className="min-w-0">
          <header className="sticky top-0 z-30 border-b border-white/50 bg-white/75 px-5 py-7 backdrop-blur-xl">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Admin Dashboard</p>
                <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-deep">{pageTitle}</h1>
              </div>
              <div className="rounded-lg border border-primary/20 bg-white/70 px-4 py-2 text-sm font-semibold text-deep shadow-sm">
                Admin
              </div>
            </div>
          </header>

          <div className="p-4 sm:p-6 lg:p-8">{renderSection()}</div>
        </section>
      </div>
    </main>
  );
}
