import Image from 'next/image'
import Link from 'next/link'
import { SetStateAction, useState } from 'react'
type Section = 'home' | 'projects' | 'about' | 'contact'
const MainNav = () => {
 const [activeSection, setActiveSection] = useState<Section | null>(null)

 const handleSectionClick = (section: Section) => {
		setActiveSection(section)
 }

	return (
		<header className='fixed w-full px-4 lg:px-6 h-20 flex justify-between space-x-4 bg-[#000] text-textColor'>
			<Link
				className='flex items-center justify-start'
				href='#home'
				onClick={() => handleSectionClick('home')}
			>
				<div>
					<Image
						src='/logo.png'
						alt='Logo Image'
						width='250'
						height='250'
					/>
				</div>

				<span className='sr-only'>Frontend Developer</span>
			</Link>
			<nav className='ml-auto flex items-center gap-4 sm:gap-6 justify-end'>
				{/* <Link
					className={`text-xl font-medium ${
						activeSection === 'home' ? 'underline' : ''
					} underline-offset-4`}
					href='#'
					onClick={() => handleSectionClick('home')}
				>
					Home
				</Link> */}
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
		</header>
	)
}
export default MainNav
