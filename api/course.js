// api/course.js
import axios from 'axios'

export const fetchCourses = async () => {
	try {
		const res = await axios.get(
			`${process.env.NEXT_PUBLIC_STRAPI_URL}/courses?populate=*`
		)
		return res.data.data.map((course) => ({
			id: course.id,
			title: course.attributes.Title,
			description: course.attributes.Description,
			published: course.attributes.Published,
			duration: course.attributes.Duration,
			image: course.attributes.Image?.data?.attributes.url,
			author: course.attributes.Author,
			createdAt: course.attributes.createdAt,
			updatedAt: course.attributes.updatedAt
		}))
	} catch (error) {
		console.error('Error fetching courses:', error)
		throw error
	}
}
