'use client'

import React, { useEffect, useState } from 'react'
import api from '../../lib/api'
import Link from 'next/link'

type Category = {
	id: number
	name: string
	slug: string
}

const CategoriesPreview: React.FC = () => {
	const [categories, setCategories] = useState<Category[]>([])
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const { data } = await api.get<Category[]>('/categories')
				setCategories(data)
			} catch (err) {
				if (err instanceof Error) {
					setError(err.message)
				} else {
					setError('An unknown error occurred')
				}
			}
		}
		fetchCategories()
	}, [])

	if (error) {
		return <div className='text-red-500'>Error: {error}</div>
	}

	return (
		<section className='py-8'>
			<h2 className='text-3xl font-semibold text-center mb-8'>
				Explore Categories
			</h2>
			<div className='flex flex-wrap justify-center'>
				{categories.map((category) => (
					<div
						key={category.id}
						className='m-4 w-64 p-4 bg-white shadow-md rounded-lg'
					>
						<h3 className='text-xl font-bold mb-2'>{category.name}</h3>
						<Link href={`/categories/${category.slug}`}>
							<a className='text-blue-500 hover:underline'>View Courses</a>
						</Link>
					</div>
				))}
			</div>
		</section>
	)
}

export default CategoriesPreview
