import { Metadata } from 'next'
import api from '../../../lib/api'
import Link from 'next/link'

type Lesson = {
	id: number
	title: string
	slug: string
}

type Course = {
	id: number
	title: string
	description: string
	slug: string
	lessons: Lesson[]
}

export async function generateStaticParams() {
	const { data: courses } = await api.get<Course[]>('/courses')
	return courses.map((course) => ({ slug: course.slug }))
}

export async function generateMetadata({
	params
}: {
	params: { slug: string }
}): Promise<Metadata> {
	const { data: course } = await api.get<Course[]>(
		`/courses?slug=${params.slug}`
	)
	return { title: course[0]?.title || 'Course Details' }
}

const CoursePage = async ({ params }: { params: { slug: string } }) => {
	const { data: course } = await api.get<Course[]>(
		`/courses?slug=${params.slug}`
	)
	const currentCourse = course[0]

	if (!currentCourse) {
		return <div>Course not found</div>
	}

	return (
		<div>
			<h1>{currentCourse.title}</h1>
			<p>{currentCourse.description}</p>
			<h2>Lessons</h2>
			<ul>
				{currentCourse.lessons.map((lesson) => (
					<li key={lesson.id}>
						<Link href={`/lessons/${lesson.slug}`}>
							<a>{lesson.title}</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default CoursePage
