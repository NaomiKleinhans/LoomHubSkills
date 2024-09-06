// app/lessons/[slug]/page.tsx
import { Metadata } from 'next'
import api from '@/lib/api'

type Lesson = {
	id: number
	title: string
	content: string
	slug: string
	video?: {
		url: string
	}
}

// Function to generate static parameters for lesson pages
export async function generateStaticParams() {
	try {
		const { data: lessons } = await api.get<Lesson[]>('/lessons')
		return lessons.map((lesson) => ({ slug: lesson.slug }))
	} catch (error) {
		console.error('Failed to fetch lessons for static params:', error)
		return []
	}
}

// Function to generate metadata for lesson pages
export async function generateMetadata({
	params
}: {
	params: { slug: string }
}): Promise<Metadata> {
	try {
		const { data: lesson } = await api.get<Lesson[]>(
			`/lessons?slug=${params.slug}`
		)
		return { title: lesson[0]?.title || 'Lesson Details' }
	} catch (error) {
		console.error('Failed to fetch lesson for metadata:', error)
		return { title: 'Lesson Details' }
	}
}

// LessonPage component for displaying lesson details
const LessonPage = async ({ params }: { params: { slug: string } }) => {
	try {
		const { data: lesson } = await api.get<Lesson[]>(
			`/lessons?slug=${params.slug}`
		)
		const currentLesson = lesson[0]

		if (!currentLesson) {
			return <div>Lesson not found</div>
		}

		return (
			<div>
				<h1>{currentLesson.title}</h1>
				<div dangerouslySetInnerHTML={{ __html: currentLesson.content }} />
				{currentLesson.video?.url && (
					<div>
						<h3>Video:</h3>
						<video
							src={currentLesson.video.url}
							controls
							width='600'
						>
							Your browser does not support the video tag.
						</video>
					</div>
				)}
			</div>
		)
	} catch (error) {
		console.error('Failed to fetch lesson:', error)
		return <div>Error fetching lesson details</div>
	}
}

export default LessonPage
