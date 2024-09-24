// Import the SignIn component from Clerk, a service for authentication in Next.js applications
import { SignIn } from '@clerk/nextjs'

// Export the default function 'Page', which represents a React component
export default function Page() {
	return (
		// Main section of the page with padding on the Y-axis (top and bottom) set to 24
		<section className='py-24'>
			{/* 
        Container div that centers its content both vertically and horizontally using Flexbox. 
        'flex' makes it a flex container, 'items-center' aligns items vertically, and 'justify-center' centers them horizontally.
      */}
			<div className='container flex items-center justify-center'>
				{/* Render the SignIn component provided by Clerk for user authentication */}
				<SignIn />
			</div>
		</section>
	)
}
