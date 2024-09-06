// app/courses/page.tsx
import React from 'react'
import api from '@/lib/api'

type Course = {
	id: number
	title: string
	slug: string
}

const fetchCourses = async () => {
	try {
		const { data } = await api.get<Course[]>('/courses')
		return data
	} catch (error) {
		console.error('Failed to fetch courses:', error)
		return []
	}
}

const CoursesPage = async () => {
	const courses = await fetchCourses()

	return (
		<div>
			<h1>Courses</h1>
			{courses.length === 0 ? (
				<p>No courses available.</p>
			) : (
				<ul>
					{courses.map(
						(course: {
							id: React.Key | null | undefined
							slug: unknown
							title:
								| string
								| number
								| bigint
								| boolean
								| React.ReactElement<
										unknown,
										string | React.JSXElementConstructor<unknown>
								  >
								| Iterable<React.ReactNode>
								| React.ReactPortal
								| Promise<React.AwaitedReactNode>
								| null
								| undefined
						}) => (
							<li key={course.id}>
								<a href={`/courses/${course.slug}`}>{course.title}</a>
							</li>
						)
					)}
				</ul>
			)}
		</div>
	)
}

export default CoursesPage
