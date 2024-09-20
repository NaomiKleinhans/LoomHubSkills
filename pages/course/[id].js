'use client'
import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import { useRouter } from 'next/router'
// import Image from 'next/image'
import Head from 'next/head'
import Header from '../../components/Header'


// import { SignIn, useUser } from '@clerk/nextjs'

const fetchCourseById = async (id) => {
	try {
		const response = await axios.get(
			`${process.env.NEXT_PUBLIC_API_URL}/courses/${id}?populate=*`
		)
		const course = response.data.data

		if (!course) return null

		const {
			Title,
			Description,
			Published,
			Duration,
			createdAt,
			updatedAt,
			Image, // Image should be populated now
			Material, // Material should be populated too
			Author
		} = course.attributes

		// Handle image URL
		const imageUrl = Image?.data?.attributes?.url
			? `${process.env.NEXT_PUBLIC_API_URL}${Image.data.attributes.url}`
			: ''

		const materialUrl = Material?.data?.attributes?.url
			? `${process.env.NEXT_PUBLIC_API_URL}${Material.data.attributes.url}`
			: ''

		return {
			id: course.id,
			title: Title,
			description: Description,
			image: imageUrl,
			materialUrl: materialUrl,
			published: Published,
			duration: Duration,
			createdAt,
			updatedAt,
			author: Author
		}
	} catch (error) {
		console.error('Failed to fetch course:', error)
		return null
	}
}

export default function CoursePage() {
	// const { isLoaded, isSignedIn } = useUser()
	const router = useRouter()
	const { id } = router.query

	const [course, setCourse] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		if (!id) return

		const fetchData = async () => {
			try {
				const courseData = await fetchCourseById(id)
				if (courseData) {
					setCourse(courseData)
				} else {
					setError('Course not found.')
				}
			} catch (error) {
				setError('Failed to fetch course.')
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [id])

	if (loading) {
		return (
			<div className='flex justify-center items-center h-screen text-xl'>
				Loading...
			</div>
		)
	}

	if (error) {
		return <div className='text-red-600 font-semibold'>{error}</div>
	}

	if (!course) {
		return <div>No course data available.</div>
	}
	// if (!isLoaded || !isSignedIn) {
	// 	return (
	// 		<div className='flex justify-center mt-40'>
	// 			<SignIn routing='hash' />
	// 		</div>
	// 	)
	// }
	return (
		<div>
			<Head>
				<title>Course | LoomHub Skills</title>
				<meta
					name='description'
					content='Course details on LoomHub Skills'
				/>
				<meta
					name='robots'
					content='index, follow'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
			<Header />
			<div className='container mx-auto px-4 py-8'>
				<div className='bg-white p-8 rounded-lg shadow-md'>
					{/* Course Title */}
					<h1 className='text-4xl font-bold mb-6 text-gray-900'>
						{course.title}
					</h1>

					{/* Course Image */}
					{course.image && (
						<div className='mb-6'>
							{/* Uncomment when using Image component */}
							{/* <Image
								src={course.image}
								alt={course.title}
								width={600}
								height={400}
								className='rounded-lg shadow-md object-cover'
							/> */}
						</div>
					)}

					{/* Course Description */}
					<p className='text-lg text-gray-700 mb-4'>{course.description}</p>

					{/* Course Material */}
					<div className='my-6'>
						<h2 className='text-xl font-semibold text-gray-800 mb-2'>
							Course Material
						</h2>
						{course.materialUrl ? (
							<a
								href={course.materialUrl}
								download
								className='text-blue-500 hover:underline'
							>
								Download course material
							</a>
						) : (
							<p className='text-gray-500'>
								No course material available for download.
							</p>
						)}
					</div>

					{/* Course Duration */}
					<p className='text-lg text-gray-800'>
						<span className='font-semibold'>Duration:</span> {course.duration}{' '}
						hours
					</p>

					{/* Created and Updated Dates */}
					<div className='mt-4 text-gray-600'>
						<p>
							<span className='font-semibold'>Created at:</span>{' '}
							{new Date(course.createdAt).toLocaleDateString()}
						</p>
						<p>
							<span className='font-semibold'>Updated at:</span>{' '}
							{new Date(course.updatedAt).toLocaleDateString()}
						</p>
					</div>

					{/* Course Author */}
					<p className='mt-4 text-lg'>
						<span className='font-semibold text-gray-900'>Author:</span>{' '}
						{course.author}
					</p>

					{/* Course Publication Status */}
					<p
						className={`mt-6 text-lg ${
							course.published ? 'text-green-500' : 'text-red-500'
						}`}
					>
						{course.published
							? 'This course is published.'
							: 'This course is not published yet.'}
					</p>
				</div>
			</div>
		</div>
	)
}
