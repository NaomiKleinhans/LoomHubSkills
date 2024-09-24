import React from 'react'
// Import Clerk components for authentication (SignInButton, SignedIn, SignedOut, UserButton)
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

// Define the CTA (Call to Action) component
const CTA = () => {
	return (
		// Main section for the call to action with styling for background, padding, and text alignment
		<section className='cta bg-blue-500 px-5 py-20 text-center text-white'>
			{/* Heading text to attract attention */}
			<h2 className='mb-4 text-3xl font-bold md:text-4xl'>
				Ready to Get Started?
			</h2>

			{/* Descriptive text inviting users to join the platform */}
			<p className='mb-8 text-lg md:text-xl'>
				Join thousands of educators and learners using our platform today.
			</p>

			{/* Container for the buttons with centered content and gap between them */}
			<div className='flex items-center justify-center gap-6'>
				{/* 
					Render the SignInButton only if the user is signed out.
					Clerk's SignedOut component ensures this button is visible to users who are not signed in.
					The button is styled to stand out with a white background and a hover effect.
				*/}
				<SignedOut>
					<SignInButton mode='modal'>
						<button className='rounded-full bg-white px-6 py-3 text-lg text-blue-500 transition hover:bg-gray-100'>
							Sign Up now
						</button>
					</SignInButton>
				</SignedOut>

				{/* 
					Placeholder for SignedIn users. Once users are signed in, 
					you can render the <UserButton /> here for account management, but it's commented out for now.
				*/}
				<SignedIn>{/* <UserButton /> */}</SignedIn>
			</div>
		</section>
	)
}

// Export the CTA component to be used elsewhere in the app
export default CTA
