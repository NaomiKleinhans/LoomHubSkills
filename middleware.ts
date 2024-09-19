import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
// import { clerkMiddleware } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher(['/course/[id](.*)'])

export default clerkMiddleware((auth,req) => {
  if (isProtectedRoute(req)) auth().protect()
  })
  // export default clerkMiddleware({})
  export const config = {
    matcher: ['/((?!.*\\..*|_next).*)','/','/(api|trpc)(.*)','/course/[id]']

}