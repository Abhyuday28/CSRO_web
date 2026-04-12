import { NextResponse } from "next/server";
import { createId, type FAQ } from "@/data/admin-data";
import { readStore, updateStore } from "@/data/local-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const data = await readStore();
  return NextResponse.json(data.faqs);
}

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<FAQ>;
  const faq: FAQ = {
    id: createId("faq"),
    question: body.question ?? "",
    answer: body.answer ?? ""
  };

  await updateStore((data) => {
    data.faqs.unshift(faq);
  });

  return NextResponse.json(faq, { status: 201 });
}

export async function PUT(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const body = (await request.json()) as Partial<FAQ>;

  const updatedFaq = await updateStore((data) => {
    const index = data.faqs.findIndex((faq) => faq.id === id);

    if (index === -1) {
      return null;
    }

    data.faqs[index] = { ...data.faqs[index], ...body };
    return data.faqs[index];
  });

  if (!updatedFaq) {
    return NextResponse.json({ message: "FAQ not found" }, { status: 404 });
  }

  return NextResponse.json(updatedFaq);
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const deletedFaq = await updateStore((data) => {
    const index = data.faqs.findIndex((faq) => faq.id === id);

    if (index === -1) {
      return null;
    }

    const [faq] = data.faqs.splice(index, 1);
    return faq;
  });

  if (!deletedFaq) {
    return NextResponse.json({ message: "FAQ not found" }, { status: 404 });
  }

  return NextResponse.json(deletedFaq);
}
