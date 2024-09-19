import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isProtectedRoute = createRouteMatcher(['/course/[...index]'])

export default clerkMiddleware((auth, req) => {
	if (isProtectedRoute(req)) {
		const { userId } = auth()
		if (!userId) {
			// Redirect to login if the user is not authenticated
			return NextResponse.redirect('/login')
		}
		auth().protect() // Protects the route if it's a protected route
	}
	return NextResponse.next() // Proceed to the next middleware or route
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
