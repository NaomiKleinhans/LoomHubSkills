import Head from 'next/head';
import styles from '../styles/Home.module.css';
// import { getCategories } from '../utils/api'
import Header from '@/pages/components/header'
import Features from '@/pages/components/Features'
import Testimonials from '@/pages/components/Testimonials'
import CTA from '@/pages/components/CTA'
import Hero from '@/pages/components/Hero'
import Head from 'next/head'

const HomePage = () => {
	return (
		<div>
			<Head>
				<title>Home | LoomHub Skills</title>
				<meta
					name="description"
					content="Welcome to LoomHub Skills. Learn and grow with our comprehensive online courses and learning resources."
				/>
				<meta name="robots" content="index, follow" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>Hello</div>
			<Header />
			<Hero />
			<Features />
			<Testimonials />
			<CTA />
		</div>
	)
}

export default HomePage
