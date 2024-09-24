'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import { SignIn, useUser } from '@clerk/nextjs'

// Function to fetch course by slug
const fetchCourseBySlug = async (slug) => {
	try {
		const apiUrl = `https://supportive-melody-bc72f8134e.strapiapp.com/api/courses?filters[Slug][$eq]=${slug}&populate=*`
		console.log('Fetching course for slug:', slug)

		const response = await axios.get(apiUrl)
		console.log('API Response:', response.data)

		// Check if the response contains course data
		if (response.data && response.data.data.length > 0) {
			const courseAttributes = response.data.data[0].attributes
			return {
				title: courseAttributes.Title,
				description: courseAttributes.ShortDescription,
				duration: courseAttributes.Duration,
				published: courseAttributes.Published,
				publishedAt: courseAttributes.publishedAt,
				createdAt: courseAttributes.createdAt,
				image: courseAttributes.Image?.data?.attributes?.url || '',
				materialUrl: courseAttributes.Material?.data?.attributes?.url || '',
				videoUrl: courseAttributes.Video?.data?.attributes?.url || ''
			}
		} else {
			console.warn('No course found for this slug.')
			return null
		}
	} catch (error) {
		console.error('Error fetching course from API:', error)
		return null
	}
}

const CoursePage = () => {
	const [course, setCourse] = useState(null) // State to store course data
	const [loading, setLoading] = useState(false) // Loading state
	const [error, setError] = useState(null) // Error state
	const router = useRouter()
	const { slug } = router.query
	const { isLoaded, isSignedIn } = useUser()

	useEffect(() => {
		if (slug) {
			const loadCourse = async () => {
				setLoading(true) // Set loading to true
				setError(null) // Reset error state

				const fetchedCourse = await fetchCourseBySlug(slug)
				if (fetchedCourse) {
					setCourse(fetchedCourse) // Update course state
				} else {
					setError('Course not found.') // Set error if course is not found
				}
				setLoading(false) // Set loading to false
			}

			loadCourse() // Fetch course data
		}
	}, [slug]) // Run effect when slug changes

	if (!isLoaded) {
		return <p className='text-center mt-4'>Loading user state...</p> // Loading user state
	}

	if (!isSignedIn) {
		return (
			<div className='flex justify-center mt-40'>
				<SignIn routing='hash' /> // Render sign-in component if not signed in
			</div>
		)
	}

	if (loading) {
		return <p className='text-center mt-4'>Loading course...</p> // Loading course data
	}

	if (error) {
		return <p className='text-red-600 text-center mt-4'>{error}</p> // Display error message
	}

	if (!course) {
		return <p className='text-center mt-4'>No course details available.</p> // No course details
	}

	return (
		<div className='bg-gray-50 min-h-screen'>
			<Head>
				<title>{course.title} | LoomHub Skills</title>
				<meta
					name='description'
					content={course.description}
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>

			<div className='container mx-auto px-4 py-8 bg-white rounded-lg shadow-md'>
				<h2 className='text-3xl font-bold mb-4'>{course.title}</h2>
				<div className='flex justify-between'>
					<p className='mb-4 text-green-500'>
						Published on: {new Date(course.publishedAt).toLocaleDateString()}
					</p>
					<p className='font-semibold mb-2'>
						Duration:{' '}
						{course.duration
							? `${course.duration} hours`
							: 'Duration not specified.'}
					</p>
				</div>
				{course.image && (
					<Image
						src={course.image}
						alt={course.title}
						width={600}
						height={400}
						className='rounded-md mb-4'
					/>
				)}
				<h4 className='font-semibold mb-2'>Outline</h4>
				<p className='text-lg mb-4'>{course.description}</p>

				{course.materialUrl && (
					<div className='mb-4'>
						<h4 className='font-semibold'>Course Material</h4>
						<a
							href={course.materialUrl}
							target='_blank'
							rel='noopener noreferrer'
							className='text-blue-500 underline'
						>
							Download Course Material
						</a>
					</div>
				)}

				{course.videoUrl && (
					<div className='mb-4'>
						<h4 className='font-semibold'>Course Video</h4>
						<video
							controls
							width='100%'
							className='rounded-md'
						>
							<source
								src={course.videoUrl}
								type='video/mp4'
							/>
							Your browser does not support the video tag.
						</video>
					</div>
				)}
			</div>
		</div>
	)
}

export default CoursePage
