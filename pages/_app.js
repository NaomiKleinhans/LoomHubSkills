import { ClerkProvider } from '@clerk/nextjs'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
	return (
		<ClerkProvider>
			<Component {...pageProps} />
		</ClerkProvider>
	)
}

export default MyApp
