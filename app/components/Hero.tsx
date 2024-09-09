// components/Hero.tsx
import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className='hero bg-blue-500 px-5 py-20 text-center text-white'>
      <h1 className='mb-4 text-4xl font-bold md:text-6xl text-blue-500'>
        Welcome to Your Future of Learning
      </h1>
      <p className='mb-8 text-lg md:text-xl'>
        Innovative Learning Management System designed for modern education.
      </p>
      <a
        href='/sign-up'
        className='rounded-full bg-white px-6 py-3 text-lg text-blue-500 transition hover:bg-gray-100'
      >
        Get Started
      </a>
    </section>
  )
}

export default Hero
