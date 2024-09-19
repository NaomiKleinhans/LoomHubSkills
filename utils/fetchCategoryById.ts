// utils/fetchCategoryById.ts

export interface Category {
	id: string
	name: string
	description: string
}

const apiUrl = 'https://supportive-melody-bc72f8134e.strapiapp.com/api'

// Fetch all categories
const fetchAllCategories = async (): Promise<Category[]> => {
	try {
		const response = await fetch(`${apiUrl}/categories`)

		if (!response.ok) {
			throw new Error(`Network response was not ok: ${response.statusText}`)
		}

		const data = await response.json()
		return data
	} catch (error) {
		console.error('Failed to fetch categories:', error)
		throw error
	}
}

// Fetch a category by ID
const fetchCategoryById = async (id: string): Promise<Category | null> => {
	try {
		const response = await fetch(`${apiUrl}/categories/${id}`)

		if (!response.ok) {
			throw new Error(`Network response was not ok: ${response.statusText}`)
		}

		const data = await response.json()
		return data
	} catch (error) {
		console.error('Failed to fetch category:', error)
		return null
	}
}

export { fetchAllCategories, fetchCategoryById }
