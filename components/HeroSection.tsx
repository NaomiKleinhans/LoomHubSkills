import React from 'react'

const HeroSection: React.FC = () => {
	return (
		<section style={{ padding: '2rem', textAlign: 'center' }}>
			<h1>Welcome to Our LMS Platform</h1>
			<p>Your one-stop solution for managing and delivering online courses.</p>
			<a
				href='/courses'
				style={{
					padding: '1rem',
					backgroundColor: '#0070f3',
					color: '#fff',
					textDecoration: 'none'
				}}
			>
				Explore Courses
			</a>
		</section>
	)
}

export default HeroSection
