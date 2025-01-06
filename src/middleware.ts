import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Add any middleware logic here
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Add paths that need middleware
    '/api/:path*',
    '/in/:path*',
  ],
} 