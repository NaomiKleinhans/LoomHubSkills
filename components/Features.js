import React from 'react'

// Array of feature objects, each containing a title and description for the platform features
const features = [
	{
		// Title of the feature
		title: 'Interactive Courses',
		// Description providing more details about the feature
		description: 'Engage learners with interactive content and assessments.'
	},
	{
		title: 'Progress Tracking',
		description:
			'Monitor learner progress and performance with detailed reports.'
	},
	{
		title: 'Mobile Access',
		description:
			'Access courses anytime, anywhere with our mobile-friendly platform.'
	}
]

// Define the Features component, which renders a section showcasing the platform's features
const Features = () => {
	return (
		// Main section with padding and background color for the features section
		<section className='features bg-gray-100 px-5 py-20 text-center'>
			{/* Heading for the features section */}
			<h2 className='mb-10 text-3xl font-bold'>Platform Features</h2>

			{/* 
				Grid layout to display the features in a responsive manner.
				- max-w-5xl limits the maximum width of the grid container.
				- md:grid-cols-3 sets the grid to 3 columns on medium screens and larger.
				- gap-8 adds spacing between the grid items.
			*/}
			<div className='mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3'>
				{/* 
					Map over the features array to dynamically create a div for each feature.
					Each feature contains a title and description.
					- key={index}: Unique key for each feature element, using the array index.
					- bg-white and shadow-md give the feature boxes a card-like appearance with shadows.
				*/}
				{features.map((feature, index) => (
					<div
						key={index}
						className='feature rounded-lg bg-white p-6 shadow-md'
					>
						{/* Feature title */}
						<h3 className='mb-3 text-2xl font-bold'>{feature.title}</h3>

						{/* Feature description */}
						<p className='text-gray-700'>{feature.description}</p>
					</div>
				))}
			</div>
		</section>
	)
}

// Export the Features component for use in other parts of the application
export default Features
