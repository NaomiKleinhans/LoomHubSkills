import React, { useEffect, useRef } from 'react'
import { Label } from './label'
import { Input } from './input'
import { Textarea } from './textarea'
import { Button } from './button'

const Contact = () => {
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const container = containerRef.current

		if (!container) {
			return
		}
	}, [])

	const handleSendEmail = () => {
		const firstName = (
			document.getElementById('first-name') as HTMLInputElement
		).value
		const lastName = (document.getElementById('last-name') as HTMLInputElement)
			.value
		const email = (document.getElementById('email') as HTMLInputElement).value
		const message = (document.getElementById('message') as HTMLInputElement)
			.value

		const subject = `Contact Form Submission from ${firstName} ${lastName}`
		const body = `Email: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`

		window.open(
			`mailto:maartensnaomi@gmail.com?subject=${encodeURIComponent(
				subject
			)}&body=${encodeURIComponent(body)}`
		)
	}

	return (
		<div
			className='container mt-24 px-4 md:px-6'
			ref={containerRef}
		>
			<div className='flex flex-col items-center justify-center space-y-4 text-center'>
				<div className='space-y-2'>
					<h2 className='lg:text-5xl md:text-4xl text-center mx-4 sm:text-3xl font-bold mb-24 text-themeColorMain'>
						Contact Me
					</h2>
				</div>
			</div>
			<div className='space-y-4 text-textColor'>
				<div className='grid grid-cols-2 gap-4 '>
					<div className='space-y-2'>
						<Label htmlFor='first-name'>First name</Label>
						<Input
							id='first-name'
							placeholder='Enter your first name'
						/>
					</div>
					<div className='space-y-2'>
						<Label htmlFor='last-name'>Last name</Label>
						<Input
							id='last-name'
							placeholder='Enter your last name'
						/>
					</div>
				</div>
				<div className='space-y-2'>
					<Label htmlFor='email'>Email</Label>
					<Input
						id='email'
						placeholder='Enter your email'
						type='email'
					/>
				</div>
				<div className='space-y-2'>
					<Label htmlFor='message'>Message</Label>
					<Textarea
						className='min-h-[100px]'
						id='message'
						placeholder='Enter your message'
					/>
				</div>
				<div>
					<Button
						label='Send Message'
						style={{
							backgroundColor: '#5A75CE',
							padding: '10px 20px',
							borderRadius: '10px'
						}}
						onClick={handleSendEmail}
					/>
				</div>
			</div>
		</div>
	)
}

export default Contact
