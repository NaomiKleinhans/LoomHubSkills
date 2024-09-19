// import { ClerkProvider } from '@clerk/nextjs'
// import '../styles/globals.css' // Ensure this path is correct
import type { AppProps } from 'next/app' // Import AppProps

function MyApp({ Component, pageProps }: AppProps) {
	return 
		// <ClerkProvider>
			<Component {...pageProps} />
		{/* </ClerkProvider> */}
	
}

export default MyApp



