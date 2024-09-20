'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

const fetchCoursesByCategoryId = async (categorySlug) => {
	try {
		const apiUrl = `https://supportive-melody-bc72f8134e.strapiapp.com/api/courses?filters[category][Slug][$eq]=${categorySlug}&populate=*`
		console.log('Fetching courses for category:', categorySlug)

		const response = await axios.get(apiUrl)
		console.log('API Response:', response.data)

		if (response.data && response.data.data && response.data.data.length > 0) {
			return response.data.data.map((course) => {
				const courseAttributes = course.attributes

				return {
					id: course.id,
					slug: courseAttributes.Slug,
					title: courseAttributes.Title,
					description: courseAttributes.ShortDescription,
					image:
						courseAttributes.Image?.data?.attributes?.formats?.small?.url || '',
					materialUrl: courseAttributes.Material?.data?.attributes?.url || '',
					videoUrl: courseAttributes.Video?.data?.attributes?.url || '',
					duration: courseAttributes.Duration,
					published: courseAttributes.Published,
					createdAt: courseAttributes.createdAt,
					category: courseAttributes.category?.data?.attributes?.Name
				}
			})
		}

		console.warn('No courses found for this category.')
		return []
	} catch (error) {
		console.error('Error fetching courses from API:', error)
		return []
	}
}


const CoursePage = () => {
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

				const fetchedCourses = await fetchCoursesByCategoryId(slug)
				console.log('Courses fetched:', fetchedCourses)

				setCourses(fetchedCourses)
				setCoursesLoading(false)

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
				<title>Courses | LoomHub Skills</title>
				<meta
					name='description'
					content={`Courses in category ${slug}`}
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
									key={course.id}
									className='bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow'
								>
									{course.image && (
										<Image
											src={course.image}
											alt={course.title}
											width={500}
											height={500}
											className='rounded-md'
										/>
									)}
									<Link
										href={`/course/${course.slug}`}
										className='text-blue-600 hover:underline text-xl font-medium'
									>
										{course.title}
									</Link>
									<p className='text-gray-700'>{course.description}</p>
									<p className='text-gray-500'>
										Duration: {course.duration} hours
									</p>
									<p
										className={`mt-2 ${
											course.published ? 'text-green-500' : 'text-red-500'
										}`}
									>
										{course.published
											? 'This course is published.'
											: 'This course is not published yet.'}
									</p>
									<p className='text-gray-600'>
										Created at:{' '}
										{new Date(course.createdAt).toLocaleDateString()}
									</p>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	)
}

export default CoursePage
