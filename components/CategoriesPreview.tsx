'use client'

import React, { useEffect, useState } from 'react'
import api from '../lib/api'
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
		return <div>Error: {error}</div>
	}

	return (
		<section style={{ padding: '2rem' }}>
			<h2>Explore Categories</h2>
			<div style={{ display: 'flex', flexWrap: 'wrap' }}>
				{categories.map((category) => (
					<div
						key={category.id}
						style={{ margin: '1rem', width: '200px' }}
					>
						<h3>{category.name}</h3>
						<Link href={`/categories/${category.slug}`}>
							<a style={{ color: '#0070f3' }}>View Courses</a>
						</Link>
					</div>
				))}
			</div>
		</section>
	)
}

export default CategoriesPreview
