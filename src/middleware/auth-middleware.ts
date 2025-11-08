import { NextResponse, type NextRequest } from "next/server";

export function authMiddleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isLoggedIn = req.cookies.get("auth-token");

  if (!isLoggedIn && pathname.startsWith("/homes")) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  if (isLoggedIn && pathname === "/auth/login") {
    return NextResponse.redirect(new URL("/homes", req.url));
  }

  return NextResponse.next();
}
