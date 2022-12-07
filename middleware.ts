import { NextResponse } from "next/server";

export function middleware() {
  console.log("Middleware console log for testing");
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/with-middleware", "/api/with-middleware"],
};
