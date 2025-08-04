import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "es", "pt"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip static assets and Next.js internal paths
  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/") ||
    pathname.match(/\.(jpg|jpeg|png|gif|svg|ico|webp|avif|css|js)$/) ||
    pathname === "/favicon.png" ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  // Skip if the pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}

function getLocale(request: NextRequest): string {
  // Check for locale in the Accept-Language header
  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(",")
      .map((lang) => lang.split(";")[0].trim())
      .find((lang) => locales.includes(lang.substring(0, 2)));

    if (preferredLocale) {
      const locale = preferredLocale.substring(0, 2);
      if (locales.includes(locale)) {
        return locale;
      }
    }
  }

  return defaultLocale;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next|api|favicon.ico).*)",
  ],
};
