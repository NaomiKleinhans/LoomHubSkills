'use client'
import Header from '@/components/header'
import Head from 'next/head' // For SEO metadata

const About = () => {
	return (
		<>
			{/* SEO Meta Tags */}
			<Head>
				<title>About LoomHubSkills</title>
				<meta
					name='description'
					content='Learn more about LoomHubSkills, your go-to platform for mastering in-demand skills.'
				/>
			</Head>

			<Header />

			{/* Hero Section */}
			<section className='bg-blue-600 text-white py-12'>
				<div className='container mx-auto text-center'>
					<h1 className='text-4xl font-bold mb-4'>About LoomHubSkills</h1>
					<p className='text-xl'>
						Your go-to platform for mastering in-demand skills through a curated
						collection of courses.
					</p>
				</div>
			</section>

			{/* Mission Section */}
			<section className='py-12'>
				<div className='container mx-auto text-center'>
					<h2 className='text-3xl font-semibold mb-6'>Our Mission</h2>
					<p className='text-lg max-w-3xl mx-auto'>
						At LoomHubSkills, we believe education should be accessible to
						everyone. Our mission is to provide learners with high-quality
						content that empowers them to build practical skills for real-world
						success.
					</p>
				</div>
			</section>

			{/* What We Offer Section */}
			<section className='bg-gray-100 py-12'>
				<div className='container mx-auto text-center'>
					<h2 className='text-3xl font-semibold mb-6'>What We Offer</h2>
					<ul className='list-disc list-inside text-left max-w-2xl mx-auto text-lg space-y-2'>
						<li>Comprehensive Course Catalog</li>
						<li>Expert Instructors</li>
						<li>Flexible Learning Paths</li>
						<li>Interactive Lessons with Real-World Projects</li>
					</ul>
				</div>
			</section>

			{/* Vision Section */}
			<section className='py-12'>
				<div className='container mx-auto text-center'>
					<h2 className='text-3xl font-semibold mb-6'>Our Vision</h2>
					<p className='text-lg max-w-3xl mx-auto'>
						Our vision is to create a community where learners can thrive by
						developing the skills that matter in todays fast-evolving world. We
						aim to provide an inclusive learning environment fostering
						innovation, growth, and continuous improvement.
					</p>
				</div>
			</section>

			{/* Join Us Section */}
			<section className='bg-blue-600 text-white py-12'>
				<div className='container mx-auto text-center'>
					<h2 className='text-3xl font-semibold mb-6'>Join Us Today</h2>
					<p className='text-lg max-w-3xl mx-auto'>
						Whether you are starting a new career, advancing in your current
						role, or pursuing personal interests, LoomHubSkills is here to guide
						you every step of the way.
					</p>
					<a
						href='/courses'
						className='mt-6 inline-block bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-200'
					>
						Browse Courses
					</a>
				</div>
			</section>
		</>
	)
}

export default About
