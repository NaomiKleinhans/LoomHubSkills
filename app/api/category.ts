// In api/category.ts
import axios from 'axios'

export const fetchCategories = async () => {
	try {
		const res = await axios.get(
			`${process.env.NEXT_PUBLIC_STRAPI_URL}/categories`
		)
		return res.data
	} catch (error) {
		console.error('Error fetching categories:', error)
		throw error // Rethrow or handle it appropriately
	}
}
