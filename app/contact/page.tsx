'use client'

import React, { useState } from 'react'
import { Label } from '../components/label'
import { Input } from '../components/input'
import { Textarea } from '../components/textarea'
import { Button } from '../components/button'

const Contact = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		message: ''
	})

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { id, value } = e.target
		setFormData((prev) => ({ ...prev, [id]: value }))
	}

	const handleSendEmail = () => {
		const { firstName, lastName, email, message } = formData

		const subject = `Contact Form Submission from ${firstName} ${lastName}`
		const body = `Email: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`

		window.open(
			`mailto:maartensnaomi@gmail.com?subject=${encodeURIComponent(
				subject
			)}&body=${encodeURIComponent(body)}`
		)
	}

	return (
		<div className='container mt-24 px-4 md:px-6'>
			<div className='flex flex-col items-center justify-center space-y-4 text-center'>
				<h2 className='lg:text-5xl md:text-4xl sm:text-3xl font-bold mb-24 text-themeColorMain'>
					Contact Us
				</h2>
			</div>
			<div className='space-y-4 text-textColor'>
				<div className='grid grid-cols-2 gap-4'>
					<div className='space-y-2'>
						<Label htmlFor='firstName'>First name</Label>
						<Input
							id='firstName'
							placeholder='Enter your first name'
							value={formData.firstName}
							onChange={handleChange}
						/>
					</div>
					<div className='space-y-2'>
						<Label htmlFor='lastName'>Last name</Label>
						<Input
							id='lastName'
							placeholder='Enter your last name'
							value={formData.lastName}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className='space-y-2'>
					<Label htmlFor='email'>Email</Label>
					<Input
						id='email'
						placeholder='Enter your email'
						type='email'
						value={formData.email}
						onChange={handleChange}
					/>
				</div>
				<div className='space-y-2'>
					<Label htmlFor='message'>Message</Label>
					<Textarea
						className='min-h-[100px]'
						id='message'
						placeholder='Enter your message'
						value={formData.message}
						onChange={handleChange}
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
