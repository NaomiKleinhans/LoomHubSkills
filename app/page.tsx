// app/landing/page.tsx
import React from 'react'
import HeroSection from '../components/HeroSection'
import FeatureSection from '../components/FeatureSection'
import CategoriesPreview from '../components/CategoriesPreview'
import CoursesPreview from '../components/CoursesPreview'

const LandingPage: React.FC = () => {
  return (
		<div>
			<HeroSection />
			<FeatureSection />
			<CategoriesPreview />
			<CoursesPreview />
		</div>
	)
}

export default LandingPage
