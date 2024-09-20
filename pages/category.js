'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image' // Uncomment if you're using Image component

const CategoryPage = () => {
	const [categories, setCategories] = useState([])
	const [loadingCategories, setLoadingCategories] = useState(true)

	// Fetch categories from Strapi
	const fetchCategories = async () => {
		try {
			const response = await axios.get(
				`${process.env.NEXT_PUBLIC_API_URL}/categories?populate=*`
			)
			return response.data.data
		} catch (error) {
			console.error('Error fetching categories:', error)
			return []
		}
	}

	useEffect(() => {
		const loadCategories = async () => {
			const fetchedCategories = await fetchCategories()
			setCategories(fetchedCategories)
			setLoadingCategories(false)
		}

		loadCategories()
	}, [])

	return (
		<div>
			<Head>
				<title>Course Category | LoomHub Skills</title>
				<meta
					name='description'
					content='Course Categories on LoomHub Skills'
				/>
				<meta
					name='robots'
					content='index, follow'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
			<h2 className='text-4xl font-semibold mb-6 text-gray-800 text-center'>
				Select a Category
			</h2>

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
								{category.attributes.Image && (
									<div className='my-4'>
										<Image
											src={`${category.attributes.Image.data.attributes.url}`} // Remove the extra API prefix
											alt={category.attributes.Name}
											width={500}
											height={500}
											className='rounded-md'
										/>
									</div>
								)}
								<Link
									href={`/categoryId/${category.attributes.Slug}`} // Use the correct slug for the link
									className='block text-blue-500 hover:text-blue-700 font-semibold text-lg transition-colors duration-300 ease-in-out'
								>
									{category.attributes.Name}
								</Link>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export default CategoryPage
