import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HamburgerIcon } from '../SvgIcons/HamburgerIcon'
import MobileMainNavLinks from './MobileMainNavLinks'
import { CloseXIcon } from '../SvgIcons/CloseXIcon'
type Section = 'home' | 'projects' | 'about' | 'contact'
const MobileMainNav = () => {
	const [isMenuOpen, setMenuOpen] = useState(false)
const [activeSection, setActiveSection] = useState<Section | null>(null)
	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen)
	}
 const handleSectionClick = (section: Section) => {
		setActiveSection(section)
 }
	return (
		<>
			<header className='fixed md:hidden lg:hidden w-full px-4 h-20 bg-[#000] text-textColor'>
				<div className='flex items-center justify-between mt-3'>
					<Link
						className='p-2'
						href='#home'
				onClick={() => handleSectionClick('home')}
			>

						<div>
							<Image
								src='/logo.png'
								alt='Logo Image'
								width='200'
								height='200'
							/>
						</div>
					</Link>
					<button
						className='p-2 focus:outline-none'
						onClick={toggleMenu}
						aria-label='Toggle Menu'
					>
						<div className='w-10 h-10'>
							{isMenuOpen ? <CloseXIcon /> : <HamburgerIcon />}
						</div>
					</button>
				</div>
				{isMenuOpen && <MobileMainNavLinks />}
			</header>
		</>
	)
}

export default MobileMainNav
