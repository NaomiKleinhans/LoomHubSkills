// components/Footer.tsx
import Link from 'next/link'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className='footer bg-gray-800 px-5 py-10 text-center text-white'>
      <div className='mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3'>
        <div>
          <h5 className='mb-2 text-lg font-bold'>About Us</h5>
          <p className='text-gray-400'>
            We provide a comprehensive LMS solution for modern education.
          </p>
        </div>
        <div>
          <h5 className='mb-2 text-lg font-bold'>Contact</h5>
          <p className='text-gray-400'>Email: support@lmsplatform.com</p>
          <p className='text-gray-400'>Phone: 0744380907</p>
        </div>
        <div>
          <h5 className='mb-2 text-lg font-bold'>Quick Links</h5>
          <ul>
            <li>
              <Link
                href='/about'
                className='text-gray-400 transition hover:text-white'
              >
                About Us
            </Link>
            </li>
            {/* <li>
              <a
                href='#contact'
                className='text-gray-400 transition hover:text-white'
              >
                Contact
              </a>
            </li> */}
            <li>
              <Link
                href='/privacy'
                className='text-gray-400 transition hover:text-white'
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className='mt-8 text-gray-500'>
        © 2024 LMS Platform. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
