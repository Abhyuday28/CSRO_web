import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    phone?: string;
    password?: string;
  };

  const phone = body.phone?.trim() ?? "";
  const password = body.password?.trim() ?? "";
  const expectedPhone = process.env.ADMIN_PHONE?.trim();
  const expectedPassword = process.env.ADMIN_PASSWORD?.trim();

  if (!expectedPhone || !expectedPassword) {
    return NextResponse.json(
      { error: "Admin credentials are not configured in environment variables." },
      { status: 500 }
    );
  }

  if (phone !== expectedPhone || password !== expectedPassword) {
    return NextResponse.json(
      { error: "Invalid admin credentials." },
      { status: 401 }
    );
  }

  return NextResponse.json({ ok: true });
}
