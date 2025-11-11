import { NextRequest, NextResponse } from "next/server";

import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const { pathname } = req.nextUrl;

  const isProtectedRoute = pathname.startsWith("/homes/booking/me");
  const isAuthRoute = pathname.startsWith("/auth/login") || pathname.startsWith("/auth/register");

  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL("/homes", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/homes/:path*", "/auth/login"],
};
