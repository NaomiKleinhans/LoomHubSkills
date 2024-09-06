import { Metadata } from 'next'
import api from '../../../lib/api'
import Link from 'next/link'

type Course = {
	id: number
	title: string
	slug: string
}

type Category = {
	id: number
	name: string
	description: string
	slug: string
	courses: Course[]
}

export async function generateStaticParams() {
	const { data: categories } = await api.get<Category[]>('/categories')
	return categories.map((category) => ({ slug: category.slug }))
}

export async function generateMetadata({
	params
}: {
	params: { slug: string }
}): Promise<Metadata> {
	const { data: category } = await api.get<Category[]>(
		`/categories?slug=${params.slug}`
	)
	return { title: category[0]?.name || 'Category Details' }
}

const CategoryPage = async ({ params }: { params: { slug: string } }) => {
	const { data: category } = await api.get<Category[]>(
		`/categories?slug=${params.slug}`
	)
	const currentCategory = category[0]

	if (!currentCategory) {
		return <div>Category not found</div>
	}

	return (
		<div>
			<h1>{currentCategory.name}</h1>
			<p>{currentCategory.description}</p>
			<h2>Courses in this category</h2>
			<ul>
				{currentCategory.courses.map((course) => (
					<li key={course.id}>
						<Link href={`/courses/${course.slug}`}>
							<a>{course.title}</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default CategoryPage
