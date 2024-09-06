'use client'

import React, { useEffect, useState } from 'react'
import api from '../lib/api'
import Link from 'next/link'

type Course = {
	id: number
	title: string
	slug: string
}

const CoursesPreview: React.FC = () => {
	const [courses, setCourses] = useState<Course[]>([])
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchCourses = async () => {
			try {
				const { data } = await api.get<Course[]>('/courses')
				setCourses(data)
			} catch (err) {
				if (err instanceof Error) {
					setError(err.message)
				} else {
					setError('An unknown error occurred')
				}
			}
		}
		fetchCourses()
	}, [])

	if (error) {
		return <div>Error: {error}</div>
	}

	return (
		<section style={{ padding: '2rem', backgroundColor: '#f9f9f9' }}>
			<h2>Popular Courses</h2>
			<div style={{ display: 'flex', flexWrap: 'wrap' }}>
				{courses.map((course) => (
					<div
						key={course.id}
						style={{ margin: '1rem', width: '200px' }}
					>
						<h3>{course.title}</h3>
						<Link href={`/courses/${course.slug}`}>
							<a style={{ color: '#0070f3' }}>Learn More</a>
						</Link>
					</div>
				))}
			</div>
		</section>
	)
}

export default CoursesPreview
