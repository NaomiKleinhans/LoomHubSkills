// components/Testimonials.tsx
import React from 'react'

const testimonials = [
  {
    name: 'Jane Doe',
    feedback:
      'This LMS platform has transformed the way I teach my online courses!'
  },
  {
    name: 'John Smith',
    feedback: 'A fantastic tool that has streamlined our training process.'
  }
]

const Testimonials: React.FC = () => {
  return (
    <section className='testimonials px-5 py-20 text-center'>
      <h2 className='mb-10 text-3xl font-bold'>What Our Users Say</h2>
      <div className='mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2'>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className='testimonial rounded-lg bg-white p-6 shadow-md'
          >
            <p className='mb-4 text-gray-700'>{testimonial.feedback}</p>
            <h4 className='text-xl font-bold'>{testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
