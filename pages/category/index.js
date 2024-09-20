'use client'
import React from 'react'
// import axios from 'axios'
// import { useRouter } from 'next/router'
// import Link from 'next/link'

import Head from 'next/head'
import Header from '../../components/Header'

// import { useState, useEffect } from 'react'
// import Image from 'next/image' // Uncomment if you're using Image component

// Function to fetch categories from Strapi
// const fetchCategories = async () => {
// 	try {
// 		const response = await fetch(
// 			`${process.env.NEXT_PUBLIC_API_URL}/categories`
// 		)
// 		const data = await response.json()

// 		console.log('Fetched categories data:', data) // Check what data is being returned

// 		if (data?.data && Array.isArray(data.data)) {
// 			return data.data
// 		} else {
// 			console.error('Unexpected API response structure:', data)
// 			return [] // Return an empty array if the structure is unexpected
// 		}
// 	} catch (error) {
// 		console.error('Failed to fetch categories:', error)
// 		return []
// 	}
// }

const CategoryIndexPage = () => {
	// const [categories, setCategories] = useState([])
	// const [loadingCategories, setLoadingCategories] = useState(true)

	// useEffect(() => {
	// 	const loadCategories = async () => {
	// 		const fetchedCategories = await fetchCategories()
	// 		setCategories(fetchedCategories)
	// 		setLoadingCategories(false)
	// 	}

	// 	loadCategories()
	// }, [])

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
			<Header />
			<h2 className='text-4xl font-semibold mb-6 text-gray-800 text-center'>
				Select a Category
			</h2>
			{/* 
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
											src={`${process.env.NEXT_PUBLIC_API_URL}${category.attributes.Image.data.attributes.url}`}
											alt={category.attributes.Name}
											width={500}
											height={500}
											className='rounded-md'
										/>
									</div>
								)}
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
			*/}
		</div>
	)
}

export default CategoryIndexPage
