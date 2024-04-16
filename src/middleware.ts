import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import {
  defaultLocale,
  localePrefix,
  locales,
  pathnames,
} from './utils/config';

const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // The default locale can be used without a prefix (e.g. /about) rather than /about/en
  localePrefix,

  // Maps internal pathnames to external ones which can be localized per locale.
  pathnames,
});

export async function middleware(req: NextRequest) {
  return intlMiddleware(req);
}

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',
    /**
     * Set a cookie to remember the previous locale for
     * all requests that have a locale prefix
     */
    '/(en|tr)/:path*',

    /**
     * Enable redirects that add missing locales
     * (e.g. `/pathnames` -> `/en/pathnames`)
     */
    '/((?!_next|_vercel|.*\\..*).*)',
  ],
};
