import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Image from 'next/image'

interface Course {
	id: string
	title: string
	description: string
	image: string
	materialUrl?: string // Add this line
	published: boolean
	duration: number
	createdAt: string
	updatedAt: string
	author: string
}

const fetchCourseById = async (id: string): Promise<Course | null> => {
	try {
		const response = await axios.get(
			`http://localhost:1337/api/courses/${id}?populate=*`
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
			? `http://localhost:1337${Image.data.attributes.url}`
			: ''
		const materialUrl = Material?.data?.attributes?.url
			? `http://localhost:1337${Material.data.attributes.url}`
			: ''

		return {
			id: course.id,
			title: Title,
			description: Description,
			image: imageUrl, // Add imageUrl here
			materialUrl: materialUrl, // Add materialUrl here
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
	const router = useRouter()
	const { id } = router.query

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
				{course.image && (
					<Image
						src='http://127.0.0.1:1337/uploads/emotions_emoticons_b7464dbf29.jpeg'
						alt='Emotions Emoticons'
						width={500}
						height={500}
					/>
				)}
			</div>
			<p className='text-lg my-4'>{course.description}</p>
			<p>Course material:</p>
			{course.materialUrl ? (
				<a
					href={course.materialUrl} // URL to the course material
					download // Ensures the file is downloaded instead of opening in the browser
					className='text-blue-500 underline'
				>
					Download course material
				</a>
			) : (
				<p className='text-gray-500'>
					No course material available for download.
				</p>
			)}
			<p className='font-semibold'>Duration: {course.duration} hours</p>
			<p>Created at: {new Date(course.createdAt).toLocaleDateString()}</p>
			<p>Updated at: {new Date(course.updatedAt).toLocaleDateString()}</p>
			<p>Author: {course.author}</p>
			{course.published ? (
				<p className='text-green-500'>This course is published.</p>
			) : (
				<p className='text-red-500'>This course is not published yet.</p>
			)}
		</div>
	)
}
