import React from 'react' // Importing React library for building the component
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs' // Importing Clerk components for user authentication

// Hero component definition
const Hero = () => {
	return (
		// Main section for the hero component, styled with background color and padding
		<section className='hero bg-blue-500 px-5 py-20 text-center text-white'>
			{/* Main heading with font size and styling */}
			<h1 className='mb-4 text-4xl font-bold md:text-6xl'>
				Welcome to Your Future of Learning
			</h1>

			{/* Subheading with description of the platform */}
			<p className='mb-8 text-lg md:text-xl'>
				Innovative Learning Management System designed for modern education.
			</p>

			{/* Flex container for authentication buttons, centered and spaced */}
			<div className='flex items-center justify-center gap-6'>
				{/* 
					SignedOut: Displays the sign-in button for users who are not authenticated.
					Uses Clerk's SignInButton to show a modal for signing in.
				*/}
				<SignedOut>
					<SignInButton mode='modal'>
						{/* Button styled with rounded edges, colors, and hover effect */}
						<button className='rounded-full bg-white px-6 py-3 text-lg text-blue-500 transition hover:bg-gray-100'>
							Get Started
						</button>
					</SignInButton>
				</SignedOut>

				{/* 
					SignedIn: Placeholder for user-specific actions or components when the user is logged in.
					The UserButton can be uncommented to display user profile options.
				*/}
				<SignedIn>{/* <UserButton /> */}</SignedIn>
			</div>
		</section>
	)
}

// Export the Hero component for use in other parts of the application
export default Hero
