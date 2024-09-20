import React from 'react'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'


const Hero = () => {
	return (
		<section className='hero bg-blue-500 px-5 py-20 text-center text-white'>
			<h1 className='mb-4 text-4xl font-bold md:text-6xl'>
				Welcome to Your Future of Learning
			</h1>
			<p className='mb-8 text-lg md:text-xl'>
				Innovative Learning Management System designed for modern education.
			</p>
			<div className='flex items-center justify-center gap-6'>
				<SignedOut>
					<SignInButton mode='modal'>
						<button className='rounded-full bg-white px-6 py-3 text-lg text-blue-500 transition hover:bg-gray-100'>
							Get Started
						</button>
					</SignInButton>
				</SignedOut>
				<SignedIn>
					{/* <UserButton /> */}
				</SignedIn>
			</div>
		</section>
	)
}

export default Hero
