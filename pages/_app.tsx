// import { ClerkProvider, RedirectToSignIn } from '@clerk/nextjs'
// import '../styles/globals.css' // Ensure this path is correct

// // Replace `process.env.NEXT_PUBLIC_CLERK_FRONTEND_API` and `process.env.CLERK_API_KEY` with your actual environment variables
// const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API

// function MyApp({ Component, pageProps }) {
// 	return (
// 		<ClerkProvider frontendApi={clerkFrontendApi}>
// 			<Component {...pageProps} />
// 		</ClerkProvider>
// 	)
// }

// export default MyApp

import { ClerkProvider } from '@clerk/nextjs'
import '../styles/globals.css' // Ensure this path is correct
import type { AppProps } from 'next/app' // Import AppProps

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ClerkProvider>
			<Component {...pageProps} />
		</ClerkProvider>
	)
}

export default MyApp





