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
			{/* <Header /> */}
			<Hero /> 
			<Features /> 
			 <Testimonials /> 
			<CTA />
			<Footera/>
		</div>
	)
}

export default HomePage
