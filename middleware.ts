import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/courses(.*)'])

export default clerkMiddleware((auth, req) => {
	auth().setApiKey(process.env.CLERK_API_KEY || '') // Use the secret key
	if (isProtectedRoute(req)) {
		auth().protect()
	}
})

export const config = {
	matcher: [
		'/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
		'/(api|trpc)(.*)'
	]
}
