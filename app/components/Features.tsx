// components/Features.tsx
import React from 'react'

const features = [
  {
    title: 'Interactive Courses',
    description: 'Engage learners with interactive content and assessments.'
  },
  {
    title: 'Progress Tracking',
    description:
      'Monitor learner progress and performance with detailed reports.'
  },
  {
    title: 'Mobile Access',
    description:
      'Access courses anytime, anywhere with our mobile-friendly platform.'
  }
]

const Features: React.FC = () => {
  return (
    <section className='features bg-gray-100 px-5 py-20 text-center'>
      <h2 className='mb-10 text-3xl font-bold'>Platform Features</h2>
      <div className='mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3'>
        {features.map((feature, index) => (
          <div
            key={index}
            className='feature rounded-lg bg-white p-6 shadow-md'
          >
            <h3 className='mb-3 text-2xl font-bold'>{feature.title}</h3>
            <p className='text-gray-700'>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
