// app/categories/page.tsx
import React from 'react'
import api from '@/lib/api'

type Category = {
	id: number
	name: string
	slug: string
}

const fetchCategories = async () => {
	try {
		const { data } = await api.get<Category[]>('/categories')
		return data
	} catch (error) {
		console.error('Failed to fetch categories:', error)
		return []
	}
}

const CategoriesPage = async () => {
	const categories = await fetchCategories()

	return (
		<div>
			<h1>Categories</h1>
			{categories.length === 0 ? (
				<p>No categories available.</p>
			) : (
				<ul>
					{categories.map((category) => (
						<li key={category.id}>
							<a href={`/categories/${category.slug}`}>{category.name}</a>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default CategoriesPage
