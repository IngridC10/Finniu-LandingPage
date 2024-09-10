import { getTokenCookies } from "@/app/cookies/client/TokenCookies";
import { NextRequest, NextResponse } from "next/server";
import { getServerToken } from "./app/cookies/server/tokenCookieServer";

export async function middleware(request: NextRequest) {
  const session = getServerToken();

  if (!session) {
    const requestedPage = request.nextUrl.pathname;
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.search = `p=${requestedPage}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/calendar", "/dashboard/myHistory", "/dashboard"],
};
