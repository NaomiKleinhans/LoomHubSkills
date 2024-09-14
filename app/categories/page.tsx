'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'

// Define the structure of a category
type Category = {
	id: number
	name: string
	slug: string
	imageUrl: string
}

type CategoryAttributes = {
	Name: string
	Slug: string
	image?: {
		data: {
			attributes: {
				url: string
			}
		}
	}
}

type CategoryData = {
	id: number
	attributes: CategoryAttributes
}

type StrapiResponse = {
	data: CategoryData[]
}

// Function to fetch categories from Strapi
const fetchCategories = async (): Promise<Category[]> => {
	try {
		const response = await axios.get<StrapiResponse>(
			'http://localhost:1337/api/categories?populate=image'
		)

		const categories = response.data.data.map((category) => {
			const attributes = category.attributes || {}
			return {
				id: category.id,
				name: attributes.Name || 'No name available', // Ensure 'Name' is used
				slug: attributes.Slug || 'no-slug', // Ensure 'Slug' is used
				imageUrl: attributes.image?.data?.attributes?.url || '' // Image URL logic remains the same
			}
		})

		return categories
	} catch (error) {
		console.error('Failed to fetch categories:', error)
		return []
	}
}

const CategoriesPage = () => {
	const [categories, setCategories] = useState<Category[]>([])
	const [loading, setLoading] = useState<boolean>(true)
	// const [clientOnlyData, setClientOnlyData] = useState(null)

	useEffect(() => {
		const loadCategories = async () => {
			const fetchedCategories = await fetchCategories()
			setCategories(fetchedCategories)
			setLoading(false)
			// setClientOnlyData('')
		}

		loadCategories()
	}, [])

	return (
		<div className='container mx-auto px-4 py-8'>
			<h1 className='text-3xl font-bold mb-8'>Categories</h1>
			{loading ? (
				<p className='text-center'>Loading categories...</p>
			) : categories.length === 0 ? (
				<p className='text-center'>No categories available.</p>
			) : (
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
					{categories.map((category) => (
						<Link
							href={`/categories/${category.slug}`}
							key={category.id}
							className='block border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white'
						>
							<div className='relative w-full h-48'>
								{category.imageUrl ? (
									<Image
										src={category.imageUrl}
										alt={category.name}
										layout='fill'
										objectFit='cover'
										className='rounded-t-lg'
									/>
								) : (
									<div className='bg-gray-200 w-full h-full flex items-center justify-center'>
										<span className='text-gray-600'>No Image Available</span>
									</div>
								)}
							</div>
							<div className='p-4'>
								<h2 className='text-lg font-semibold'>{category.name}</h2>
							</div>
						</Link>
					))}
				</div>
			)}
		</div>
	)
}

export default CategoriesPage
