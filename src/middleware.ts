import { NextRequest, NextResponse } from "next/server";

import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const { pathname } = req.nextUrl;

  if (!token && pathname.startsWith("/homes")) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  if (token && pathname.startsWith("/auth/login")) {
    return NextResponse.redirect(new URL("/homes", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/homes/:path*", "/auth/login"],
};
