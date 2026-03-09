import crypto from "node:crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE_NAME = "sa_admin_session";
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24;

function getAdminUsername() {
  return process.env.ADMIN_USERNAME || "admin";
}

function getAdminPassword() {
  return process.env.ADMIN_PASSWORD || "admin123";
}

function getSessionSecret() {
  return process.env.SESSION_SECRET || "change-this-session-secret";
}

function safeEqual(left, right) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  if (leftBuffer.length !== rightBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(leftBuffer, rightBuffer);
}

function signPayload(payload) {
  return crypto
    .createHmac("sha256", getSessionSecret())
    .update(payload)
    .digest("hex");
}

export function isValidAdminCredentials(username, password) {
  return (
    safeEqual(String(username || ""), getAdminUsername()) &&
    safeEqual(String(password || ""), getAdminPassword())
  );
}

export function createAdminSessionToken(username) {
  const expiresAt = Date.now() + COOKIE_MAX_AGE_SECONDS * 1000;
  const payload = `${username}:${expiresAt}`;
  const signature = signPayload(payload);
  return `${payload}.${signature}`;
}

export function verifyAdminSessionToken(token) {
  if (!token || typeof token !== "string") {
    return false;
  }

  const lastDotIndex = token.lastIndexOf(".");
  if (lastDotIndex <= 0) {
    return false;
  }

  const payload = token.slice(0, lastDotIndex);
  const signature = token.slice(lastDotIndex + 1);
  const expectedSignature = signPayload(payload);

  if (!safeEqual(signature, expectedSignature)) {
    return false;
  }

  const [username, expiresAtRaw] = payload.split(":");
  const expiresAt = Number(expiresAtRaw);

  if (!username || !Number.isFinite(expiresAt)) {
    return false;
  }

  if (Date.now() > expiresAt) {
    return false;
  }

  return safeEqual(username, getAdminUsername());
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  return verifyAdminSessionToken(token);
}

export function buildAdminCookie(token) {
  return {
    name: ADMIN_COOKIE_NAME,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: COOKIE_MAX_AGE_SECONDS,
  };
}

export function buildAdminLogoutCookie() {
  return {
    name: ADMIN_COOKIE_NAME,
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  };
}
