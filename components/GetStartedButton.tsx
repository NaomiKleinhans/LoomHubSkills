'use client'

import { useUser } from '@clerk/nextjs'
import { useEffect, useState } from 'react'

const GetStartedButton = () => {
	const { isSignedIn } = useUser()
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true) // Ensure this code only runs on the client
	}, [])

	if (!isClient) {
		return null // Avoid rendering anything server-side
	}

	return (
		<a
			href={
				isSignedIn ? '/course' : 'https://star-goshawk-24.accounts.dev/sign-up'
			}
			className='rounded-full bg-white px-6 py-3 text-lg text-blue-500 transition hover:bg-gray-100'
		>
			Get Started
		</a>
	)
}

export default GetStartedButton
