import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isProtectedRoute = createRouteMatcher(['/course/[...index]'])

export default clerkMiddleware(async (auth, req) => {
	// Call auth() to retrieve the current user's information
	const { userId } = auth()

	if (isProtectedRoute(req)) {
		if (!userId) {
			// Redirect to login if the user is not authenticated
			return NextResponse.redirect('/login')
		}
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
