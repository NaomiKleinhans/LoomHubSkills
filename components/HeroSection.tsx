import React from 'react'

const HeroSection: React.FC = () => {
	return (
		<section className='py-8 text-center'>
			<h1 className='text-4xl font-bold mb-4'>Welcome to Our LMS Platform</h1>
			<p className='text-lg mb-6'>
				Your one-stop solution for managing and delivering online courses.
			</p>
			<a
				href='/courses'
				className='inline-block px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded hover:bg-blue-600 transition-colors'
			>
				Explore Courses
			</a>
		</section>
	)
}

export default HeroSection
