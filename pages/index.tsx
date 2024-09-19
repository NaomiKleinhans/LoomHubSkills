// import { GetStaticProps } from 'next'
// import { getCategories } from '../utils/api'
import Header from '@/components/header'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Hero from '@/components/Hero'
import Head from 'next/head'


interface Props {
	categories: Category[]
}

export interface Category {
	id: number
	name: string
}

export async function getStaticProps() {
	try {
		const categories = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/api/categories`
		)
		const categoryData = await categories.json()
		return {
			props: {
				categories: categoryData
			}
		}
	} catch (error) {
		console.error('Failed to fetch categories in getStaticProps:', error)
		return {
			props: {
				categories: []
			}
		}
	}
}


const HomePage: React.FC<Props> = ({  }) => {
	return (
		<div>
			<Head>
				<title>Home | LoomHub Skills</title>
				<meta
					name='description'
					content='Welcome to LoomHub Skills. Learn and grow with our comprehensive online courses and learning resources.'
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
			<Hero />
			<Features />
			<Testimonials />
			<CTA />
		</div>
	)
}

export default HomePage
