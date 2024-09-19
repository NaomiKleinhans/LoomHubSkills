import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
// import { clerkMiddleware } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher(['/course/[id](.*)'])

export default clerkMiddleware((auth,req) => {
  if (isProtectedRoute(req)) auth().protect()
  })
  // export default clerkMiddleware({})
 export const config = {
		matcher: [
			'/', // Root path
			'/((?!.*\\..*|_next).*)', // Exclude static files and _next assets
			'/api/(.*)', // Match all API routes
			'/course/:path*' // Match all routes under /course with dynamic segments
		]
 }
