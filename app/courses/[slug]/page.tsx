'use client' // Mark the component as a Client Component

import { useParams } from 'next/navigation' // Import useParams instead of useRouter
import { fetchCourses } from '../../api/course'
import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Course {
	id: number
	attributes: {
		title: string
		slug: string
		content: string // Assuming 'content' is the field that holds the course content
	}
}

const CourseDetail = () => {
	const params = useParams() as { slug: string } // Extract parameters from useParams
	const slug = params.slug
	const [course, setCourse] = useState<Course | null>(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const getCourse = async () => {
			if (slug) {
				try {
					const courses = await fetchCourses()
					const foundCourse = courses.data.find(
						(course: Course) => course.attributes.slug === slug
					)
					if (foundCourse) {
						setCourse(foundCourse)
					} else {
						setError('Course not found')
					}
				} catch (err) {
					setError('Failed to fetch course')
				}
				setLoading(false)
			}
		}

		getCourse()
	}, [slug])

	if (loading) return <p>Loading...</p>
	if (error) return <p>{error}</p>

	return (
		<div className='container mx-auto p-4'>
			{course && (
				<>
					<h1 className='text-2xl mb-6'>{course.attributes.title}</h1>
					<div className='prose'>
						{/* Render the course content */}
						<div
							dangerouslySetInnerHTML={{ __html: course.attributes.content }}
						/>
					</div>
					{/* Optional: add a link back to the list of courses or home */}
					<Link href='/courses'>
						<a className='text-blue-500'>Back to courses</a>
					</Link>
				</>
			)}
		</div>
	)
}

export default CourseDetail
