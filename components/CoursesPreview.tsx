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
		return <div className='text-red-500'>Error: {error}</div>
	}

	return (
		<section className='py-8 bg-gray-100'>
			<h2 className='text-3xl font-semibold text-center mb-8'>
				Popular Courses
			</h2>
			<div className='flex flex-wrap justify-center'>
				{courses.map((course) => (
					<div
						key={course.id}
						className='m-4 w-64 p-4 bg-white shadow-md rounded-lg'
					>
						<h3 className='text-xl font-bold mb-2'>{course.title}</h3>
						<Link href={`/courses/${course.slug}`}>
							<a className='text-blue-500 hover:underline'>Learn More</a>
						</Link>
					</div>
				))}
			</div>
		</section>
	)
}

export default CoursesPreview
