import { NextResponse } from "next/server";
import { createId, type ServiceRequest } from "@/data/admin-data";
import { readStore, updateStore } from "@/data/local-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const data = await readStore();
  return NextResponse.json(data.serviceRequests);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ServiceRequest>;
    const serviceRequest: ServiceRequest = {
      id: createId("service"),
      name: body.name ?? "",
      phone: body.phone ?? "",
      issue: body.issue ?? "",
      status: body.status ?? "Pending",
      createdAt: body.createdAt ?? new Date().toISOString()
    };

    await updateStore((data) => {
      data.serviceRequests.unshift(serviceRequest);
    });

    return NextResponse.json(serviceRequest, { status: 201 });
  } catch (error) {
    console.error("Error creating service request:", error);
    return NextResponse.json(
      { message: "Could not save service request", error: String(error) },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const body = (await request.json()) as Partial<ServiceRequest>;

  const updatedRequest = await updateStore((data) => {
    const index = data.serviceRequests.findIndex((item) => item.id === id);

    if (index === -1) {
      return null;
    }

    data.serviceRequests[index] = { ...data.serviceRequests[index], ...body };
    return data.serviceRequests[index];
  });

  if (!updatedRequest) {
    return NextResponse.json({ message: "Service request not found" }, { status: 404 });
  }

  return NextResponse.json(updatedRequest);
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const deletedRequest = await updateStore((data) => {
    const index = data.serviceRequests.findIndex((item) => item.id === id);

    if (index === -1) {
      return null;
    }

    const [serviceRequest] = data.serviceRequests.splice(index, 1);
    return serviceRequest;
  });

  if (!deletedRequest) {
    return NextResponse.json({ message: "Service request not found" }, { status: 404 });
  }

  return NextResponse.json(deletedRequest);
}
