// api/course.ts
import axios from 'axios'

export const fetchCourses = async () => {
	const res = await axios.get(
		`${process.env.NEXT_PUBLIC_STRAPI_URL}/courses?populate=*`
	)
	return res.data
}
