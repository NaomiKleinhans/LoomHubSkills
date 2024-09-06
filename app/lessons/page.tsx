import { Metadata } from 'next'
import api from '../../lib/api'

type Lesson = {
	id: number
	title: string
	content: string
	slug: string
	video: {
		url: string
	}
}

export async function generateStaticParams() {
	const { data: lessons } = await api.get<Lesson[]>('/lessons')
	return lessons.map((lesson) => ({ slug: lesson.slug }))
}

export async function generateMetadata({
	params
}: {
	params: { slug: string }
}): Promise<Metadata> {
	const { data: lesson } = await api.get<Lesson[]>(
		`/lessons?slug=${params.slug}`
	)
	return { title: lesson[0]?.title || 'Lesson Details' }
}

const LessonPage = async ({ params }: { params: { slug: string } }) => {
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
			{currentLesson.video && (
				<div>
					<h3>Video:</h3>
					<video
						src={currentLesson.video.url}
						controls
						width='600'
					></video>
				</div>
			)}
		</div>
	)
}

export default LessonPage
