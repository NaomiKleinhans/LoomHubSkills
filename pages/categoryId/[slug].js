'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

const fetchCoursesByCategoryId = async (categorySlug) => {
	try {
		// Corrected the API call to filter by category slug
		const apiUrl = `https://supportive-melody-bc72f8134e.strapiapp.com/api/courses?filters[category][Slug][$eq]=${categorySlug}&populate=*`
		console.log('Fetching courses for category:', categorySlug)

		const response = await axios.get(apiUrl)
		console.log('API Response:', response.data)

		if (response.data && response.data.data) {
			// Return the courses with proper mapping
			return response.data.data.map((course) => {
				const courseAttributes = course.attributes

				return {
					slug: courseAttributes.Slug,
					title: courseAttributes.Title,
					description: courseAttributes.ShortDescription,
					image:
						courseAttributes.Image?.data?.attributes?.formats?.small?.url || '' // Image URL
				}
			})
		} else {
			console.warn('No courses found for this category.')
			return []
		}
	} catch (error) {
		console.error('Error fetching courses from API:', error)
		return []
	}
}

const CategoryIdPage = () => {
	const [courses, setCourses] = useState([])
	const [coursesLoading, setCoursesLoading] = useState(false)
	const [error, setError] = useState(null)
	const router = useRouter()
	const { slug } = router.query

	useEffect(() => {
		if (slug) {
			const loadCourses = async () => {
				setCoursesLoading(true)
				setError(null)
				console.log('Fetching courses for category slug:', slug)

				// Fetch courses based on category slug
				const fetchedCourses = await fetchCoursesByCategoryId(slug)
				console.log('Courses fetched:', fetchedCourses)

				setCourses(fetchedCourses)
				setCoursesLoading(false)

				// Set an error message if no courses are found
				if (fetchedCourses.length === 0) {
					setError('No courses found for this category.')
				}
			}

			loadCourses()
		}
	}, [slug])

	return (
		<div>
			<Head>
				<title>Courses in Category {slug} | LoomHub Skills</title>
				<meta
					name='description'
					content={`Courses under category ${slug}`}
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

			<div className='container mx-auto px-4 py-8 bg-gray-100 rounded-lg shadow-md'>
				{coursesLoading ? (
					<div className='flex justify-center items-center h-64'>
						<p className='text-lg text-gray-700'>Loading courses...</p>
					</div>
				) : error ? (
					<div className='flex justify-center items-center h-64'>
						<p className='text-lg text-red-600'>{error}</p>
					</div>
				) : courses.length === 0 ? (
					<div className='flex justify-center items-center h-64'>
						<p className='text-lg text-gray-700'>
							No courses available for this category.
						</p>
					</div>
				) : (
					<div>
						<h2 className='text-4xl font-semibold mb-6 text-gray-800 text-center'>
							Courses in Category <span className='text-blue-600'>{slug}</span>
						</h2>
						<ul className='list-disc pl-5 space-y-2'>
							{courses.map((course) => (
								<li
									key={course.slug}
									className='bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow'
								>
									{/* Display Course Image */}
									{course.image && (
										<Image
											src={course.image}
											alt={course.title}
											width={500}
											height={500}
											className='rounded-md'
										/>
									)}

									{/* Display Course Title and Description */}
									<Link
										href={`/courseId/${course.slug}`}
										// href='/course'
										className='text-blue-600 hover:underline text-xl font-medium'
									>
										{course.title}
									</Link>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	)
}

export default CategoryIdPage
