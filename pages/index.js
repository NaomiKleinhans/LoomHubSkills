'use client'
import Head from 'next/head'
import Footera from '../components/Footera'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

const HomePage = () => {
	return (
		<div>
			<Head>
				<title>Home | LoomHub Skills</title>
			</Head>
			<Hero />
			<Features />
			<Testimonials />
			<CTA />
			<Footera />
		</div>
	)
}

export default HomePage
