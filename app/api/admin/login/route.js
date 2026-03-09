import { NextResponse } from "next/server";
import {
  buildAdminCookie,
  createAdminSessionToken,
  isValidAdminCredentials,
} from "@/lib/auth";

export const runtime = "nodejs";

export async function POST(request) {
  const formData = await request.formData();
  const username = String(formData.get("username") || "").trim();
  const password = String(formData.get("password") || "").trim();

  if (!isValidAdminCredentials(username, password)) {
    return NextResponse.redirect(new URL("/admin/login?error=1", request.url), {
      status: 303,
    });
  }

  const token = createAdminSessionToken(username);
  const response = NextResponse.redirect(new URL("/admin", request.url), {
    status: 303,
  });

  response.cookies.set(buildAdminCookie(token));
  return response;
}
