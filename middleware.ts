import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  '/bookings(.*)',
  '/checkout(.*)',
  '/favorites(.*)',
  '/profile(.*)',
  '/rentals(.*)',
  '/reviews(.*)',
]);

// All other routes including '/', '/about', '/contact', '/properties', etc. will be public by default
export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: [
    '/((?!.+\\.[\\w]+$|_next).*)', // all files except static files
    '/',                           // root
    '/(api|trpc)(.*)'             // api routes
  ],
};