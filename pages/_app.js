import { ClerkProvider } from '@clerk/nextjs'
import '../styles/global.css'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
	return (
		<ClerkProvider>
			
			<Header/>
			<Component {...pageProps} />
		</ClerkProvider>
	)
}

export default MyApp
