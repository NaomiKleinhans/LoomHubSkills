'use client' // This tells Next.js to treat this as a client component

import { useEffect, useState } from 'react'
import { fetchCategories } from '../api/category'
import { fetchCourses } from '../api/course'
import Link from 'next/link'
import Header from '../components/header'

interface Category {
	id: number
	attributes: {
		name: string
		slug: string
	}
}

interface Course {
	id: number
	attributes: {
		title: string
		slug: string
		category: {
			data: {
				attributes: {
					name: string
				}
			}
		}
	}
}

const CoursePage = () => {
	const [search, setSearch] = useState('')
	const [filteredCourses, setFilteredCourses] = useState<Course[]>([])
	const [categories, setCategories] = useState<Category[]>([])
	const [selectedCategory, setSelectedCategory] = useState('All')
	const [courses, setCourses] = useState<Course[]>([])
	// const [loading, setLoading] = useState(true)

	// Fetch categories and courses on initial load
	useEffect(() => {
		const getData = async () => {
			try {
				// Fetch categories
				const categoryData = await fetchCategories()
				console.log('Categories Data:', categoryData) // Log response for debugging
				setCategories(categoryData.data || [])

				// Fetch courses
				const courseData = await fetchCourses()
				console.log('Courses Data:', courseData) // Log response for debugging
				setCourses(courseData.data || [])
				setFilteredCourses(courseData.data || [])
			} catch (error) {
				console.error('Error fetching data:', error)
			} finally {
				// setLoading(false)
			}
		}

		getData()
	}, [])

	// Handle search input
	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const keyword = e.target.value.toLowerCase()
		setSearch(keyword)
		filterCourses(keyword, selectedCategory)
	}

	// Handle category selection from dropdown
	const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const category = e.target.value
		setSelectedCategory(category)
		filterCourses(search, category)
	}

	// Filter courses based on search and category
	const filterCourses = (keyword: string, category: string) => {
		let filtered = courses

		if (keyword) {
			filtered = filtered.filter((course) =>
				course.attributes.title.toLowerCase().includes(keyword)
			)
		}

		if (category !== 'All') {
			filtered = filtered.filter(
				(course) => course.attributes.category.data.attributes.name === category
			)
		}

		setFilteredCourses(filtered)
	}

	return (
		<div>
			<Header />
			<>
				<div className='mb-6 flex gap-4'>
					{/* Search Input */}
					<input
						type='text'
						placeholder='Search for a course...'
						value={search}
						onChange={handleSearch}
						className='border p-2 w-full'
					/>

					{/* Category Dropdown */}
					<label htmlFor='category-select'>Filter by category</label>
					<select
						id='category-select'
						value={selectedCategory}
						onChange={handleCategoryChange}
						className='border p-2'
					>
						<option value='All'>All Categories</option>
						{categories.map((category) => (
							<option
								key={category.id}
								value={category.attributes.name}
							>
								{category.attributes.name}
							</option>
						))}
					</select>
				</div>

				{/* Categories as Cards */}
				<div className='grid grid-cols-3 gap-4 mb-8'>
					{categories.map((category) => (
						<div
							key={category.id}
							onClick={() => filterCourses(search, category.attributes.name)}
							className='border p-4 cursor-pointer hover:bg-gray-100 transition-colors duration-200'
							role='button'
							tabIndex={0}
							aria-label={`Filter courses by ${category.attributes.name}`}
						>
							{category.attributes.name}
						</div>
					))}
				</div>

				{/* Filtered Courses */}
				<div className='grid grid-cols-2 gap-4'>
					{filteredCourses.length > 0 ? (
						filteredCourses.map((course) => (
							<Link
								key={course.id}
								href={`/courses/${course.attributes.slug}`}
							>
								<div className='border p-4 cursor-pointer hover:bg-gray-100'>
									{course.attributes.title}
								</div>
							</Link>
						))
					) : (
						<p>No courses available</p>
					)}
				</div>
			</>
		</div>
	)
}

export default CoursePage
