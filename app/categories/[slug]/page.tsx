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

// Define the attributes of a category
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

// Define the data structure for a category response
type CategoryData = {
  id: number
  attributes: CategoryAttributes
}

// Define the structure of the API response for categories
type StrapiResponse = {
  data: CategoryData[]
}

// Define the structure of a course
type Course = {
  id: number
  title: string
  description: string
  slug: string
}

// Define the attributes of a course
type CourseAttributes = {
  Title: string
  Description: string
  Slug: string
}

// Define the data structure for a course response
type CourseData = {
  id: number
  attributes: CourseAttributes
}

// Define the structure of the API response for courses
type StrapiCourseResponse = {
  data: CourseData[]
}

// Function to fetch categories from Strapi
const fetchCategories = async (): Promise<Category[]> => {
  try {
    const response = await axios.get<StrapiResponse>(
      'http://localhost:1337/api/categories?populate=image'
    )

    return response.data.data.map((category) => {
      const attributes = category.attributes || {}
      return {
        id: category.id,
        name: attributes.Name || 'No name available',
        slug: attributes.Slug || 'no-slug',
        imageUrl: attributes.image?.data?.attributes?.url || ''
      }
    })
  } catch (error) {
    console.error('Failed to fetch categories:', error)
    return []
  }
}

// Function to fetch courses for a category from Strapi
const fetchCoursesByCategory = async (categoryId: number): Promise<Course[]> => {
  try {
    const response = await axios.get<StrapiCourseResponse>(
      `http://localhost:1337/api/courses?filters[category][id][$eq]=${categoryId}`
    )

    return response.data.data.map((course) => ({
      id: course.id,
      title: course.attributes.Title,
      description: course.attributes.Description,
      slug: course.attributes.Slug
    }))
  } catch (error) {
    console.error('Failed to fetch courses:', error)
    return []
  }
}

const CategoriesPage = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
  const [courses, setCourses] = useState<Course[]>([])
  const [coursesLoading, setCoursesLoading] = useState<boolean>(false)

  useEffect(() => {
    const loadCategories = async () => {
      const fetchedCategories = await fetchCategories()
      setCategories(fetchedCategories)
      setLoading(false)
    }

    loadCategories()
  }, [])

  useEffect(() => {
    const loadCourses = async () => {
      if (selectedCategory) {
        setCoursesLoading(true)
        const fetchedCourses = await fetchCoursesByCategory(selectedCategory.id)
        setCourses(fetchedCourses)
        setCoursesLoading(false)
      }
    }

    loadCourses()
  }, [selectedCategory])

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category)
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8'>Categories</h1>
      {loading ? (
        <p className='text-center'>Loading categories...</p>
      ) : categories.length === 0 ? (
        <p className='text-center'>No categories available.</p>
      ) : (
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {categories.map((category) => (
              <div
                key={category.id}
                className='block border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white cursor-pointer'
                onClick={() => handleCategoryClick(category)}
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
              </div>
            )},
          </div>

          {selectedCategory && (
            <div className='mt-8'>
              <h2 className='text-3xl font-bold mb-4'>{selectedCategory.name}</h2>
              {coursesLoading ? (
                <p className='text-center'>Loading courses...</p>
              ) : courses.length === 0 ? (
                <p className='text-center'>No courses available for this category.</p>
              ) : (
                <ul className='list-disc pl-5'>
                  {courses.map((course) => (
                    <li key={course.id}>
                      <Link
                        href={`/courses/${course.slug}`}
                        className='text-blue-600 hover:underline'
                      >
                        {course.title}
                      </Link>
                      <p>{course.description}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default CategoriesPage
