import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link'

// Define the structure of a course
type Course = {
	id: number
	title: string
	description: string
	slug: string
}

type CourseAttributes = {
	Title: string
	Description: string
	Slug: string
}

type CourseData = {
	id: number
	attributes: CourseAttributes
}

type StrapiCourseResponse = {
	data: CourseData[]
}

// Function to fetch courses by category from Strapi
const fetchCoursesByCategory = async (
	categorySlug: string
): Promise<Course[]> => {
	try {
		const response = await axios.get<StrapiCourseResponse>(
			`http://localhost:1337/api/courses?filters[category][Slug][$eq]=${categorySlug}`
		)
		return response.data.data.map((course) => ({
			id: course.id,
			title: course.attributes.Title,
			description: course.attributes.Description,
			slug: course.attributes.Slug
		}))
	} catch (error) {
		console.error('Failed to fetch courses:', error)
		return []
	}
}

const CategoryPage: React.FC = () => {
	const [courses, setCourses] = useState<Course[]>([])
	const [coursesLoading, setCoursesLoading] = useState<boolean>(false)
	const router = useRouter()
	const { slug } = router.query

	useEffect(() => {
		if (slug && typeof slug === 'string') {
			const loadCourses = async () => {
				setCoursesLoading(true)
				const fetchedCourses = await fetchCoursesByCategory(slug)
				setCourses(fetchedCourses)
				setCoursesLoading(false)
			}

			loadCourses()
		}
	}, [slug])

	return (
		<div className='container mx-auto px-4 py-8 bg-gray-100 rounded-lg shadow-md'>
			{coursesLoading ? (
				<div className='flex justify-center items-center h-64'>
					<p className='text-lg text-gray-700'>Loading courses...</p>
				</div>
			) : courses.length === 0 ? (
				<div className='flex justify-center items-center h-64'>
					<p className='text-lg text-gray-700'>
						No courses available for this category.
					</p>
				</div>
			) : (
				<div>
					<h2 className='text-4xl font-semibold mb-6 text-gray-800'>
						Courses in <span className='text-blue-600'>{slug}</span> Category
					</h2>
					<ul className='list-disc pl-5 space-y-2'>
						{courses.map((course) => (
							<li
								key={course.id}
								className='bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow'
							>
								<Link
									href={`/course/${course.id}`}
									className='text-blue-600 hover:underline text-xl font-medium'
								>
									{course.title}
								</Link>
								<p className='text-gray-600 mt-1'>{course.description}</p>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default CategoryPage
