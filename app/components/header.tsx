import Link from 'next/link'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from './ui/button'

export default function Header() {
	return (
		<header className='py-4'>
			<nav className='container flex items-center justify-between'>
				<ul className='flex gap-10 text-sm font-medium'>
					<li>
						<Link href='/'>Home</Link>
					</li>
					<li>
						<Link href='/protected/server'>Protected (server)</Link>
					</li>
					<li>
						<Link href='/protected/client'>Protected (client)</Link>
					</li>
					<li>
						<Link href='/dashboard'>Dashboard</Link>
					</li>
				</ul>

				<div className='flex items-center justify-between gap-6'>
					<ThemeToggle />

					<SignedOut>
						<SignInButton mode='modal'>
							<Button size='sm'>Sign in</Button>
						</SignInButton>
					</SignedOut>
					<SignedIn>
						<UserButton />
					</SignedIn>
				</div>
			</nav>
		</header>
	)
}
