import React from 'react' // Importing React library for building the component

// HeroSection component definition
const HeroSection = () => {
	return (
		// Main section for the hero, with vertical padding and centered text
		<section className='py-8 text-center'>
			{/* Main heading with font size, weight, and margin at the bottom */}
			<h1 className='text-4xl font-bold mb-4'>Welcome to Our LMS Platform</h1>

			{/* Subheading providing a brief description of the platform */}
			<p className='text-lg mb-6'>
				Your one-stop solution for managing and delivering online courses.
			</p>

			{/* 
				Call-to-action link styled as a button.
				Redirects to the '/courses' page when clicked.
			*/}
			<a
				href='/courses' // Link to the courses page
				className='inline-block px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded hover:bg-blue-600 transition-colors'
			>
				Explore Courses {/* Button text */}
			</a>
		</section>
	)
}

// Export the HeroSection component for use in other parts of the application
export default HeroSection
