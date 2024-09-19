// import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import type { AppProps } from 'next/app' // Import AppProps

function MyApp({ Component, pageProps }: AppProps) {
	return 
		// <ClerkProvider>
			<Component {...pageProps} />
		{/* </ClerkProvider> */}
	
}

export default MyApp



