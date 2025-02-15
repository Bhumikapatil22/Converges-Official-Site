import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const oldSlug = "matrix-showdown";
  const newSlug = "animeverse";

  if (url.pathname.startsWith(`/events/${oldSlug}`)) {
    // Redirect to the new slug
    const redirectUrl = new URL(`/events/${newSlug}`, req.url);
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

// Apply middleware only to event routes
export const config = {
  matcher: "/events/:path*",
};
