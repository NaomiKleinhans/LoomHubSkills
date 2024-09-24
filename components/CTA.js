import React from 'react'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const CTA = () => {
	return (
		<section className='cta bg-blue-500 px-5 py-20 text-center text-white'>
			<h2 className='mb-4 text-3xl font-bold md:text-4xl'>
				Ready to Get Started?
			</h2>
			<p className='mb-8 text-lg md:text-xl'>
				Join thousands of educators and learners using our platform today.
			</p>
			<div className='flex items-center justify-center gap-6'>
				<SignedOut>
					<SignInButton mode='modal'>
						<button className='rounded-full bg-white px-6 py-3 text-lg text-blue-500 transition hover:bg-gray-100'>
							Sign Up now
						</button>
					</SignInButton>
				</SignedOut>
				<SignedIn>{/* <UserButton /> */}</SignedIn>
			</div>
		</section>
	)
}

export default CTA
