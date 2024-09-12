import Link from 'next/link'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
// import { ThemeToggle } from '../components/theme-toggle'
import { Button } from './ui/button'
import Image from 'next/image'

export default function Header() {
	return (
		<header className='py-1 items-center m-2 px-4'>
			<div className='container flex items-center justify-between'>
				<Image
					src='/logo1.png'
					alt='logo'
					width={150}
					height={150}
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

				<div className='flex items-center justify-between gap-6'>
					{/* Uncomment the following if ThemeToggle is implemented */}
					{/* <ThemeToggle /> */}

					<SignedOut>
						<SignInButton mode='modal'>
							<Button size='sm'>Sign in</Button>
						</SignInButton>
					</SignedOut>
					<SignedIn>
						<UserButton />
					</SignedIn>
				</div>
			</div>
		</header>
	)
}
