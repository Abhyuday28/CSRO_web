export type LeadStatus = "New" | "Contacted" | "Converted";
export type ServiceStatus = "Pending" | "In Progress" | "Resolved";

export type Lead = {
  id: string;
  name: string;
  phone: string;
  city: string;
  product: string;
  status: LeadStatus;
  createdAt: string;
};

export type ServiceRequest = {
  id: string;
  name: string;
  phone: string;
  issue: string;
  status: ServiceStatus;
  createdAt: string;
};

export type AdminProduct = {
  id: string;
  name: string;
  feature: string;
  description: string;
  price: number;
  features: string[];
  image: string;
  images: string[];
  tag: "Best Seller" | "New" | "";
  active: boolean;
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
};

export const leadStatuses: LeadStatus[] = ["New", "Contacted", "Converted"];
export const serviceStatuses: ServiceStatus[] = ["Pending", "In Progress", "Resolved"];

export const adminLeads: Lead[] = [
  {
    id: "lead-1",
    name: "Rahul Sharma",
    phone: "+919876543210",
    city: "Jaipur",
    product: "CSRO Aqua Pro",
    status: "New",
    createdAt: new Date().toISOString()
  },
  {
    id: "lead-2",
    name: "Priya Mehta",
    phone: "+919812345670",
    city: "Delhi",
    product: "CSRO Family Max",
    status: "Contacted",
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: "lead-3",
    name: "Amit Verma",
    phone: "+919700001122",
    city: "Gurugram",
    product: "CSRO Office Elite",
    status: "Converted",
    createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString()
  }
];

export const adminServiceRequests: ServiceRequest[] = [
  {
    id: "service-1",
    name: "Nisha Kapoor",
    phone: "+919811112222",
    issue: "Filter replacement request",
    status: "Pending",
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: "service-2",
    name: "Vikram Singh",
    phone: "+919899887766",
    issue: "Low water flow",
    status: "In Progress",
    createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString()
  }
];

export const adminProducts: AdminProduct[] = [
  {
    id: "product-1",
    name: "CSRO Aqua Pro",
    feature: "Mineral-rich purification",
    description: "Balanced filtration for modern homes with naturally refreshing taste.",
    price: 14999,
    features: ["Advanced mineral retention", "High flow rate up to 15L/min", "Compact countertop design"],
    image:
      "https://images.unsplash.com/photo-1624958723474-7c1a0db2f6cb?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1624958723474-7c1a0db2f6cb?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1597776992625-b623eb7ac7d4?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80"
    ],
    tag: "Best Seller",
    active: true
  },
  {
    id: "product-2",
    name: "CSRO Family Max",
    feature: "Large-capacity comfort",
    description: "Made for busy households that need more clean water throughout the day.",
    price: 18999,
    features: ["Extra-large storage", "Easy family access", "Durable long-life filters"],
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
    ],
    tag: "New",
    active: true
  },
  {
    id: "product-3",
    name: "CSRO Office Elite",
    feature: "High-volume hydration",
    description: "Reliable daily purification for workspaces, teams, and reception zones.",
    price: 24999,
    features: ["Large storage tank", "Multiple user dispensing", "Robust daily throughput"],
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1581579184996-4ec66427d934?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80"
    ],
    tag: "",
    active: false
  }
];

export const adminFaqs: FAQ[] = [
  {
    id: "faq-1",
    question: "Can customers book a free demo?",
    answer: "Yes. Customers can submit their name, phone, city, and interested product."
  },
  {
    id: "faq-2",
    question: "How are service requests handled?",
    answer: "The admin team can track every request from Pending to Resolved."
  }
];

export function createId(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}
