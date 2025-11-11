import { NextResponse, type NextRequest } from "next/server";

export function authMiddleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isLoggedIn = req.cookies.get("auth-token");

  const protectedRoute = pathname.startsWith("/homes/booking/me");
  const authPages = ["/auth/login", "/auth/register"];

  if (!isLoggedIn && protectedRoute) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  if (isLoggedIn && authPages.includes(pathname)) {
    return NextResponse.redirect(new URL("/homes", req.url));
  }

  return NextResponse.next();
}
