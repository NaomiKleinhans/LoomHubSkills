'use client'

import React from 'react'
import GetStartedButton from './GetStartedButton'

const Hero: React.FC = () => {
  return (
		<section className='hero bg-blue-500 px-5 py-20 text-center text-white'>
			<h1 className='mb-4 text-4xl font-bold md:text-6xl'>
				Welcome to Your Future of Learning
			</h1>
			<p className='mb-8 text-lg md:text-xl'>
				Innovative Learning Management System designed for modern education.
			</p>
	<GetStartedButton/>
		</section>
	)
}

export default Hero
