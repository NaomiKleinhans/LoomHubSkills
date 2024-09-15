import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Image from 'next/image'

// Define the structure of a course
type Course = {
	title: string
	description: string
	image: string
	published: boolean
	duration: number
	url: string
	author: { username: string }
	category: { name: string }
	id: string
}

// Define the structure of the API response
type StrapiCourse = {
	id: string
	attributes: {
		Title: string
		Description: string
		Image: { url: string }
		Published: boolean
		Duration: number
		URL: string
		Author: { username: string }
		Category: { name: string }
	}
}

// Define the structure of the API response wrapper
type StrapiCourseResponse = {
	data: StrapiCourse[]
}

// Function to fetch a course by ID from Strapi
const fetchCourseById = async (slug: string): Promise<Course | null> => {
	try {
		const response = await axios.get<StrapiCourseResponse>(
			`http://localhost:1337/api/courses/${slug}`
		)
		const course = response.data.data[0] // Assuming a single course is returned
		return {
			id: course.id,
			title: course.attributes.Title,
			description: course.attributes.Description,
			image: course.attributes.Image?.url || '',
			published: course.attributes.Published,
			duration: course.attributes.Duration,
			url: course.attributes.URL,
			author: course.attributes.Author,
			category: course.attributes.Category
		}
	} catch (error) {
		console.error('Failed to fetch course:', error)
		return null
	}
}

export default function CoursePage() {
	const router = useRouter()
	const { id } = router.query // Assuming course ID comes from query parameters

	const [course, setCourse] = useState<Course | null>(null)
	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		if (!id) return

		const fetchData = async () => {
			try {
				const courseData = await fetchCourseById(id as string)
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
		return <div>Loading...</div>
	}

	if (error) {
		return <div>{error}</div>
	}

	if (!course) {
		return <div>No course data available.</div>
	}

	return (
		<div className='container mx-auto px-4'>
			<h1 className='text-4xl font-bold'>{course.title}</h1>
			<div className='my-4'>
				<Image
					src={course.image}
					alt={course.title}
					width={800}
					height={400}
				/>
			</div>
			<p className='text-lg my-4'>{course.description}</p>
			<p className='font-semibold'>Duration: {course.duration} hours</p>
			<p>Author: {course.author.username}</p>
			<p>Category: {course.category.name}</p>
			{course.published ? (
				<a
					href={course.url}
					target='_blank'
					rel='noopener noreferrer'
					className='text-blue-500 underline'
				>
					Go to Course
				</a>
			) : (
				<p className='text-red-500'>This course is not published yet.</p>
			)}
		</div>
	)
}
