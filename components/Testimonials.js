import React from 'react' // Importing React library for building the component

// Array of testimonials with user names and their feedback
const testimonials = [
	{
		name: 'Jane Doe',
		feedback:
			'This LMS platform has transformed the way I teach my online courses!'
	},
	{
		name: 'John Smith',
		feedback: 'A fantastic tool that has streamlined our training process.'
	}
]

// Testimonials component definition
const Testimonials = () => {
	return (
		// Main section for testimonials with padding and centered text
		<section className='testimonials px-5 py-20 text-center'>
			{/* Heading for the testimonials section */}
			<h2 className='mb-10 text-3xl font-bold'>What Our Users Say</h2>

			{/* Grid container for displaying testimonials in a responsive layout */}
			<div className='mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2'>
				{/* Mapping through the testimonials array to render each testimonial */}
				{testimonials.map((testimonial, index) => (
					<div
						key={index} // Unique key for each mapped item for React's reconciliation
						className='testimonial rounded-lg bg-white p-6 shadow-md' // Styling for each testimonial card
					>
						{/* Feedback text from the user */}
						<p className='mb-4 text-gray-700'>{testimonial.feedback}</p>
						{/* User name */}
						<h4 className='text-xl font-bold'>{testimonial.name}</h4>
					</div>
				))}
			</div>
		</section>
	)
}

// Exporting the Testimonials component for use in other parts of the application
export default Testimonials
