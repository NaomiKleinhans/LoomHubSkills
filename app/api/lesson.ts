// api/lesson.ts
import axios from 'axios'

export const fetchLessons = async (courseId: string) => {
	const res = await axios.get(
		`${process.env.NEXT_PUBLIC_STRAPI_URL}/lessons?filters[course][id][$eq]=${courseId}`
	)
	return res.data
}
