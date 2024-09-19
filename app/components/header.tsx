'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
	return (
		<div className='py-1 items-center m-2 px-4'>
			<div className='container flex items-center justify-between'>
				<Image
					src='/logo1.png'
					alt='logo'
					width={150}
					height={150}
					priority // Ensures the image is loaded and consistent
				/>
				<ul className='flex gap-10 text-sm font-medium'>
					<li>
						<Link href='/'>Home</Link>
					</li>
					<li>
						<Link href='/courses'>Courses</Link>
					</li>
					<li>
						<Link href='/about'>About</Link>
					</li>
					<li>
						<Link href='/contact'>Contact</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}
