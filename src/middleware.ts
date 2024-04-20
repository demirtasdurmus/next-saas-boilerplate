import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import createMiddleware from 'next-intl/middleware';
import {
  defaultLocale,
  localePrefix,
  locales,
  pathnames,
} from './utils/config';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix,
  pathnames,
});

const isProtectedRoute = createRouteMatcher(['dashboard/(.*)']);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();

  return intlMiddleware(req);
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',
    /**
     * Set a cookie to remember the previous locale for
     * all requests that have a locale prefix
     */
    '/(en|de)/:path*',

    /**
     * Enable redirects that add missing locales
     * (e.g. `/pathnames` -> `/en/pathnames`)
     */
    '/((?!_next|_vercel|.*\\..*).*)',

    /**
     * @see https://clerk.com/docs/references/nextjs/clerk-middleware
     */
    '/(api|trpc)(.*)',
    '/((?!.+\\.[\\w]+$|_next).*)',
  ],
};
