// Import the SignUp component from Clerk, a service for handling user sign-up and authentication in Next.js
import { SignUp } from '@clerk/nextjs'

// Define a functional component called SignUpPage that will be used as the sign-up page
const SignUpPage = () => {
	return (
		// Wrapper div for the sign-up page
		<div>
			{/* Header displaying the title of the page */}
			<h1>Sign Up</h1>

			{/* 
				Render the SignUp component provided by Clerk.
				- path: Specifies the URL path for the sign-up process.
				- routing: Defines the routing strategy, in this case using the 'path'.
				- signInUrl: Provides a link to the sign-in page if the user already has an account.
			*/}
			<SignUp
				path='/sign-up'
				routing='path'
				signInUrl='/sign-in'
			/>
		</div>
	)
}

// Export the SignUpPage component as the default export for this module
export default SignUpPage
