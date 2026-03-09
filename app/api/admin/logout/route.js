import { NextResponse } from "next/server";
import { buildAdminLogoutCookie } from "@/lib/auth";

export const runtime = "nodejs";

export async function POST(request) {
  const response = NextResponse.redirect(new URL("/admin/login", request.url), {
    status: 303,
  });

  response.cookies.set(buildAdminLogoutCookie());
  return response;
}
