import React from 'react'
// import Head from 'next/head'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footera from './components/Footera'

export default function Home() {
	return (
		<>
			{/* <Head>
        <title>Welcome to LMS Platform</title>
        <meta
          name='description'
          content='An innovative Learning Management System for modern education.'
        />
      </Head> */}

			<Hero />
			<Features />
			<Testimonials />
			<CTA />
			<Footera />
		</>
	)
}
