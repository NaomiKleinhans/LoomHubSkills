'use client'

// import React, { useState } from 'react'
// import { Input } from '../components/input'
// import { Textarea } from '../components/textarea'
// import Button  from '../components/button'
import Header from '../components/header'

const Contact = () => {
	// 	const [formData, setFormData] = useState({
	// 		firstName: '',
	// 		lastName: '',
	// 		email: '',
	// 		message: ''
	// 	})

	// const [isSending, setIsSending] = useState(false)
	// const [successMessage, setSuccessMessage] = useState('')
	// const [errorMessage, setErrorMessage] = useState('')

	// const handleChange = (
	// 	e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	// ) => {
	// 	const { id, value } = e.target
	// 	setFormData((prev) => ({ ...prev, [id]: value }))
	// }

	// const handleSendEmail = async () => {
	// 	setIsSending(true)
	// 	setSuccessMessage('')
	// 	setErrorMessage('')

	// 	try {
	// 		const res = await fetch('/api/send-email', {
	// 			method: 'POST',
	// 			headers: {
	// 				'Content-Type': 'application/json'
	// 			},
	// 			body: JSON.stringify(formData)
	// 		})

	// 		if (res.ok) {
	// 			setSuccessMessage('Message sent successfully!')
	// 		} else {
	// 			setErrorMessage('Failed to send the message. Please try again.')
	// 		}
	// 	} catch (error) {
	// 		setErrorMessage('Something went wrong. Please try again later.')
	// 	} finally {
	// 		setIsSending(false)
	// 	}
	// }

	return (
		<div>
			<Header />
			<h1 className='text-center lg:text-5xl md:text-4xl sm:text-3xl font-bold mb-24 text-themeColorMain'>
				Contact Us
			</h1>
			<div className='space-y-4 text-textColor'>
				<div className='grid grid-cols-2 gap-4'>
					<div className='space-y-2'>
						{/* <Input
							id='firstName'
							placeholder='Enter your first name'
							value={formData.firstName}
							onChange={handleChange}
						/> */}
					</div>
					<div className='space-y-2'>
						{/* <Input
							id='lastName'
							placeholder='Enter your last name'
							value={formData.lastName}
							onChange={handleChange}
						/> */}
					</div>
				</div>
				<div className='space-y-2'>
					{/* <Input
						id='email'
						placeholder='Enter your email'
						type='email'
						value={formData.email}
						onChange={handleChange}
					/> */}
				</div>
				<div className='space-y-2'>
					{/* <Textarea
						className='min-h-[100px]'
						id='message'
						placeholder='Enter your message'
						value={formData.message}
						onChange={handleChange}
					/> */}
				</div>
				{/* <div>
					<Button
						label={isSending ? 'Sending...' : 'Send Message'}
						style={{
							backgroundColor: isSending ? '#999' : '#5A75CE',
							padding: '10px 20px',
							borderRadius: '10px'
						}}
						disabled={isSending}
						onClick={handleSendEmail}
					/>
				</div> */}
				{/* {successMessage && (
					<div className='text-green-500 mt-4'>{successMessage}</div>
				)}
				{errorMessage && (
					<div className='text-red-500 mt-4'>{errorMessage}</div>
				)} */}
			</div>
		</div>
	)
}

export default Contact
