export async function getCategories() {
	const BASE_URL = process.env.NEXT_PUBLIC_API_URL
	const response = await fetch(`${BASE_URL}/api/categories`)

	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`)
	}

	const data = await response.json()
	return data
}
import axios from 'axios'

const api = axios.create({
	baseURL: 'http://localhost:1337'
})

export default api