import React from 'react'

const FeaturesSection: React.FC = () => {
	return (
		<section style={{ padding: '2rem', backgroundColor: '#f9f9f9' }}>
			<h2>Features</h2>
			<div style={{ display: 'flex', justifyContent: 'space-around' }}>
				<div style={{ width: '30%' }}>
					<h3>Flexible Learning</h3>
					<p>Access courses anytime, anywhere.</p>
				</div>
				<div style={{ width: '30%' }}>
					<h3>Interactive Content</h3>
					<p>Engaging lessons with multimedia content.</p>
				</div>
				<div style={{ width: '30%' }}>
					<h3>Track Progress</h3>
					<p>Monitor your learning journey with ease.</p>
				</div>
			</div>
		</section>
	)
}

export default FeaturesSection
