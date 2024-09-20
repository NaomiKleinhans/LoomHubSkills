import Link from 'next/link'
import { useState } from 'react'
type Section = 'home' | 'projects' | 'about' | 'contact'

 


const MobileMainNavLinks = () => {
	const [projectsClicked, setProjectsClicked] = useState(false)
const [activeSection, setActiveSection] = useState<Section | null>(null)
	const handleProjectsClick = () => {
		setProjectsClicked(true)
	}
 const handleSectionClick = (section: Section) => {
		setActiveSection(section)
 }
	return (
		<>
			<nav className='fixed p-4 right-0 flex flex-col rounded-lg bg-[#101010] space-y-10 px-10 my-1 mx-2'>
				<Link
					className={`text-xl font-medium ${
						activeSection === 'projects' ? 'underline' : ''
					} underline-offset-4`}
					href='#featured-projects'
					onClick={() => handleSectionClick('projects')}
				>
					Projects
				</Link>
				<Link
					className={`text-xl font-medium ${
						activeSection === 'about' ? 'underline' : ''
					} underline-offset-4`}
					href='#about'
					onClick={() => handleSectionClick('about')}
				>
					About
				</Link>
				<Link
					className={`text-xl font-medium ${
						activeSection === 'contact' ? 'underline' : ''
					} underline-offset-4`}
					href='#contact'
					onClick={() => handleSectionClick('contact')}
				>
					Contact
				</Link>
			</nav>
		</>
	)
}
export default MobileMainNavLinks
