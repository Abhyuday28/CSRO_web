import { NextResponse } from "next/server";
import { createId, type Lead } from "@/data/admin-data";
import { readStore, updateStore } from "@/data/local-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await readStore();
    return NextResponse.json(data.leads);
  } catch (error) {
    console.error("Error reading leads store:", error);
    return NextResponse.json({ message: "Could not read leads" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<Lead>;
    const lead: Lead = {
    id: createId("lead"),
    name: body.name ?? "",
    phone: body.phone ?? "",
    city: body.city ?? "",
    product: body.product ?? "",
    status: body.status ?? "New",
    createdAt: body.createdAt ?? new Date().toISOString()
  };

    await updateStore((data) => {
      data.leads.unshift(lead);
    });

    return NextResponse.json(lead, { status: 201 });
  } catch (error) {
    console.error("Error creating lead:", error);
    return NextResponse.json(
      { message: "Could not save lead", error: String(error) },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const body = (await request.json()) as Partial<Lead>;

  const updatedLead = await updateStore((data) => {
    const index = data.leads.findIndex((lead) => lead.id === id);

    if (index === -1) {
      return null;
    }

    data.leads[index] = { ...data.leads[index], ...body };
    return data.leads[index];
  });

  if (!updatedLead) {
    return NextResponse.json({ message: "Lead not found" }, { status: 404 });
  }

  return NextResponse.json(updatedLead);
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const deletedLead = await updateStore((data) => {
    const index = data.leads.findIndex((lead) => lead.id === id);

    if (index === -1) {
      return null;
    }

    const [lead] = data.leads.splice(index, 1);
    return lead;
  });

  if (!deletedLead) {
    return NextResponse.json({ message: "Lead not found" }, { status: 404 });
  }

  return NextResponse.json(deletedLead);
}
