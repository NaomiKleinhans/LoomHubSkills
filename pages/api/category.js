import axios from 'axios'

export const fetchCategories = async () => {
	try {
		const res = await axios.get(
			`${process.env.NEXT_PUBLIC_STRAPI_URL}/categories?populate=Image`
		)
		return res.data.data.map((category) => ({
			id: category.id,
			name: category.attributes.Name,
			image: category.attributes.Image?.data?.attributes.url
		}))
	} catch (error) {
		console.error('Error fetching categories:', error)
		throw error
	}
}
