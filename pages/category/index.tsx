import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'

// Define the structure of a category
type CategoryAttributes = {
	Name: string
	Slug: string
}

type Category = {
	id: number
	attributes: CategoryAttributes
}

type CategoryResponse = {
	data: Category[]
}

// Function to fetch categories from Strapi
const fetchCategories = async (): Promise<Category[]> => {
	try {
		const response = await axios.get<CategoryResponse>(
			'http://localhost:1337/api/categories'
		)
		return response.data.data.map((category) => ({
			id: category.id,
			attributes: category.attributes
		}))
	} catch (error) {
		console.error('Failed to fetch categories:', error)
		return []
	}
}

const CategoryIndexPage: React.FC = () => {
	const [categories, setCategories] = useState<Category[]>([])
	const [loadingCategories, setLoadingCategories] = useState<boolean>(true)

	useEffect(() => {
		const loadCategories = async () => {
			const fetchedCategories = await fetchCategories()
			setCategories(fetchedCategories)
			setLoadingCategories(false)
		}

		loadCategories()
	}, [])

	return (
		<div className='container mx-auto px-4 py-8'>
			{loadingCategories ? (
				<p className='text-center text-gray-500'>Loading categories...</p>
			) : categories.length === 0 ? (
				<p className='text-center text-gray-500'>No categories available.</p>
			) : (
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
					{categories.map((category) => (
						<div
							key={category.id}
							className='bg-white border border-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 ease-in-out'
						>
							<Link
								href={`/category/${category.attributes.Slug}`}
								className='block text-blue-500 hover:text-blue-700 font-semibold text-lg transition-colors duration-300 ease-in-out'
							>
								{category.attributes.Name}
							</Link>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default CategoryIndexPage
