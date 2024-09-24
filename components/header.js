'use client' // Required for Next.js client-side components
import Image from 'next/image' // Importing Next.js optimized Image component
import Link from 'next/link' // Importing Link for client-side navigation
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs' // Clerk components for user authentication

// Header component definition
export default function Header() {
	return (
		// Main container for the header, with padding and margin
		<div className='py-1 items-center m-2 px-4'>
			{/* Inner container for aligning logo, navigation links, and authentication buttons */}
			<div className='container flex items-center justify-between'>
				{/* Logo of the platform, using Next.js Image component for optimized loading */}
				<Image
					src='/logo1.png' // Path to the logo image
					alt='logo' // Alt text for the image
					width={150} // Logo width
					height={150} // Logo height
					priority // Ensures that the image is loaded quickly
				/>

				{/* Navigation links, styled as a flex container with gap and font styling */}
				<ul className='flex gap-10 text-sm font-medium'>
					<li>
						{/* Link to the Home page */}
						<Link href='/'>Home</Link>
					</li>
					<li>
						{/* Link to the Courses page */}
						<Link href='/category'>Courses</Link>
					</li>
					<li>
						{/* Link to the About page */}
						<Link href='/about'>About</Link>
					</li>
					{/* 
						Link to the Contact page is commented out, but can be enabled for future use.
					*/}
					{/* <li>
						<Link href='/contact'>Contact</Link>
					</li> */}
				</ul>

				{/* Authentication buttons, displayed based on whether the user is signed in or signed out */}
				<div className='flex items-center justify-between gap-6'>
					{/* SignedOut: Displays sign-in button when the user is not authenticated */}
					<SignedOut>
						<SignInButton mode='modal'>
							<button>Sign in</button>
						</SignInButton>
					</SignedOut>

					{/* SignedIn: Displays user account button when the user is signed in */}
					<SignedIn>
						<UserButton />
					</SignedIn>
				</div>
			</div>
		</div>
	)
}
