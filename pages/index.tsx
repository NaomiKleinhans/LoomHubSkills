import { GetStaticProps } from 'next'
import { getCategories } from '../utils/api'
import Header from '@/components/header'
 import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footera from '@/components/Footera'
import Hero from '@/components/Hero'
import { UserButton } from '@clerk/nextjs'
// import { Category } from '@/types'

// interface Props {
// 	categories: Category[]
// }
export interface Category {
	id: number
	name: string
}


export const getStaticProps: GetStaticProps<Props> = async () => {
	try {
		const categories = await getCategories()
		return {
			props: {
				categories
			}
		}
	} catch (error) {
		console.error('Failed to fetch categories in getStaticProps:', error)
		return {
			props: {
				categories: [] // Return an empty array or handle the error appropriately
			}
		}
	}
}

const HomePage: React.FC<Props> = ({ categories }) => {
	return (
		<div>
			<Header />
			<Hero />
			<Features />
			<Testimonials />
			<CTA />
			<Footera />
			<ul>
				{categories.map((category) => (
					<li key={category.id}>{category.name}</li>
				))}
			</ul>
		</div>
	)
}

export default HomePage
