import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher(['/course/[...index]'])

export default clerkMiddleware((auth, req) => {
	if (isProtectedRoute(req)) {
		auth().protect() // Protects the route if it's a protected route
	}
})

// Middleware configuration
export const config = {
	matcher: [
		'/', // Root path
		'/((?!.*\\..*|_next).*)', // Exclude static files
		'/api/(.*)', // Match all API routes
		'/course/:path*' // Match all routes under /course
	]
}
