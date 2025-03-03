import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This middleware only runs on the client side, so we can't check localStorage
// Instead, we'll rely on the client-side auth checks in the admin layout component
export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname;

  // Define public paths that don't require authentication
  const isPublicPath = path === '/admin/login';
  
  // For admin routes, we'll let the client-side auth check handle it
  // This middleware just ensures that the login page is accessible
  if (path.startsWith('/admin') && !isPublicPath) {
    // We'll let the client-side auth check in the layout component handle the redirect
    return NextResponse.next();
  }

  // Allow access to public paths
  return NextResponse.next();
}

// Configure the middleware to run only on specific paths
export const config = {
  matcher: ['/admin/:path*'],
};
