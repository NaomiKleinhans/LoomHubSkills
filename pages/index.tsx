import { GetStaticProps } from 'next'
import { getCategories } from '../utils/api'
import Header from '@/components/header'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Head from 'next/head'


interface Props {
	categories: Category[]
}

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
			<Footer />
			<ul>
				{categories.map((category) => (
					<li key={category.id}>{category.name}</li>
				))}
			</ul>
		</div>
	)
}

export default HomePage
