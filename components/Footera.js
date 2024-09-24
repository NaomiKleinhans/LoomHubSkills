import React from 'react'

// Define the Footer component
const Footer = () => {
	return (
		// Footer section with dark background, padding, and white text, centered content
		<footer className='footer bg-gray-800 px-5 py-10 text-center text-white'>
			{/* 
				Grid layout to organize the footer content into 3 columns on medium screens and larger.
				Each column contains different information (About Us, Contact, Quick Links).
				- max-w-6xl limits the width of the footer content to 6xl.
				- gap-8 adds spacing between columns.
			*/}
			<div className='mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3'>
				{/* First column: About Us section */}
				<div>
					<h5 className='mb-2 text-lg font-bold'>About Us</h5>
					<p className='text-gray-400'>
						We provide a comprehensive LMS solution for modern education.
					</p>
				</div>

				{/* Second column: Contact details */}
				<div>
					<h5 className='mb-2 text-lg font-bold'>Contact</h5>
					<p className='text-gray-400'>Email: support@lmsplatform.com</p>
					<p className='text-gray-400'>Phone: 0744380907</p>
				</div>

				{/* Third column: Quick Links section */}
				<div>
					<h5 className='mb-2 text-lg font-bold'>Quick Links</h5>
					<ul>
						{/* About Us link */}
						<li>
							<a
								href='/about'
								className='text-gray-400 transition hover:text-white'
							>
								About Us
							</a>
						</li>

						{/* 
							Contact link is commented out for now, but can be enabled by removing the comment.
							This may be placeholder code for future development.
						*/}
						{/* <li>
							<a
								href='/contact'
								className='text-gray-400 transition hover:text-white'
							>
								Contact
							</a>
						</li> */}

						{/* Privacy Policy link */}
						<li>
							<a
								href='/privacy'
								className='text-gray-400 transition hover:text-white'
							>
								Privacy Policy
							</a>
						</li>
					</ul>
				</div>
			</div>

			{/* Copyright notice at the bottom of the footer */}
			<p className='mt-8 text-gray-500'>
				© 2024 LMS Platform. All rights reserved.
			</p>
		</footer>
	)
}

// Export the Footer component to be used in other parts of the application
export default Footer
