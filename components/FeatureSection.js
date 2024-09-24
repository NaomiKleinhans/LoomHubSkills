import React from 'react'

// Define the FeaturesSection component to display key features of the platform
const FeaturesSection = () => {
	return (
		// Main section for features, with padding on the Y-axis and a gray background color
		<section className='py-8 bg-gray-100'>
			{/* Heading for the features section, styled to be centered and bold */}
			<h2 className='text-3xl font-semibold text-center mb-8'>Features</h2>

			{/* 
				Div to contain the feature items, using Flexbox to distribute the content evenly across the page.
				justify-around: Space between each feature box.
			*/}
			<div className='flex justify-around'>
				{/* 
					First feature: "Flexible Learning".
					w-1/3 ensures that each feature takes up one-third of the available width.
					text-center aligns the text to the center of the feature box.
				*/}
				<div className='w-1/3 text-center'>
					<h3 className='text-2xl font-bold mb-2'>Flexible Learning</h3>
					<p className='text-lg'>Access courses anytime, anywhere.</p>
				</div>

				{/* Second feature: "Interactive Content" */}
				<div className='w-1/3 text-center'>
					<h3 className='text-2xl font-bold mb-2'>Interactive Content</h3>
					<p className='text-lg'>Engaging lessons with multimedia content.</p>
				</div>

				{/* Third feature: "Track Progress" */}
				<div className='w-1/3 text-center'>
					<h3 className='text-2xl font-bold mb-2'>Track Progress</h3>
					<p className='text-lg'>Monitor your learning journey with ease.</p>
				</div>
			</div>
		</section>
	)
}

// Export the FeaturesSection component for use in other parts of the application
export default FeaturesSection
