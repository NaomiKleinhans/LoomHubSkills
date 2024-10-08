'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

const CategoryPage = () => {
	const [categories, setCategories] = useState([])
	const [loadingCategories, setLoadingCategories] = useState(true)
	const [error, setError] = useState(null)

	const fetchCategories = async () => {
		try {
			const response = await axios.get(
				`${process.env.NEXT_PUBLIC_API_URL}/categories?populate=*`
			)
			return response.data.data
		} catch (error) {
			console.error('Error fetching categories:', error)
			setError('Could not fetch categories. Please try again later.')
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
			</Head>
			<h2 className='text-4xl font-semibold mb-6 text-gray-800 text-center'>
				Select a Category
			</h2>

			<div className='container mx-auto px-4 py-8'>
				{loadingCategories ? (
					<p className='text-center text-gray-500'>Loading categories...</p>
				) : error ? (
					<p className='text-center text-red-500'>{error}</p>
				) : categories.length === 0 ? (
					<p className='text-center text-gray-500'>No categories available.</p>
				) : (
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
						{categories.map((category) => (
							<div
								key={category.id}
								className='bg-white border border-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col'
							>
								{category.attributes?.Image && (
									<div className='my-4 flex-grow'>
										<Image
											src={category.attributes.Image.data.attributes.url}
											alt={category.attributes.Name || 'Category Image'}
											width={500}
											height={500}
											className='rounded-md'
										/>
									</div>
								)}
								<div className='flex-grow flex flex-col justify-end'>
									<Link
										href={`/categoryId/${category.attributes.Slug}`}
										className='block text-blue-500 hover:text-blue-700 font-semibold text-lg transition-colors duration-300 ease-in-out text-center'
									>
										{category.attributes.Name}
									</Link>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export default CategoryPage
