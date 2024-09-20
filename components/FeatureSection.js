import React from 'react'

const FeaturesSection = () => {
	return (
		<section className='py-8 bg-gray-100'>
			<h2 className='text-3xl font-semibold text-center mb-8'>Features</h2>
			<div className='flex justify-around'>
				<div className='w-1/3 text-center'>
					<h3 className='text-2xl font-bold mb-2'>Flexible Learning</h3>
					<p className='text-lg'>Access courses anytime, anywhere.</p>
				</div>
				<div className='w-1/3 text-center'>
					<h3 className='text-2xl font-bold mb-2'>Interactive Content</h3>
					<p className='text-lg'>Engaging lessons with multimedia content.</p>
				</div>
				<div className='w-1/3 text-center'>
					<h3 className='text-2xl font-bold mb-2'>Track Progress</h3>
					<p className='text-lg'>Monitor your learning journey with ease.</p>
				</div>
			</div>
		</section>
	)
}

export default FeaturesSection
