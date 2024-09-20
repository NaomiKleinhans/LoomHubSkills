import React, { useState } from 'react'
import Input from '../components/Input'
import Head from 'next/head'
import Textarea from '../components/Textarea'
import Button from '../components/button'
import emailjs from 'emailjs-com'

emailjs.init('NIWuQ1H-_DO_3dwmf')
const Contact = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		message: ''
	})

	const [isSending, setIsSending] = useState(false)
	const [successMessage, setSuccessMessage] = useState('')
	const [errorMessage, setErrorMessage] = useState('')

	const handleChange = (e) => {
		const { id, value } = e.target
		setFormData((prev) => ({ ...prev, [id]: value }))
	}

	const handleSendEmail = async () => {
		setIsSending(true)
		setSuccessMessage('')
		setErrorMessage('')

		const templateParams = {
			first_name: formData.firstName,
			last_name: formData.lastName,
			email: formData.email,
			message: formData.message
		}

		try {
			await emailjs.send(
				'service_9ekpr9e', // Service ID
				'template_glieboe', // Template ID
				templateParams,
				'user_xxx' // Replace with your actual User ID
			)

			setSuccessMessage('Message sent successfully!')
		} catch (error) {
			console.error(error) // Log the error for debugging
			setErrorMessage('Failed to send the message. Please try again.')
		} finally {
			setIsSending(false)
		}
	}

	return (
		<div>
			<Head>
				<title>Contact | LoomHub Skills</title>
				<meta
					name='description'
					content='Contact details on LoomHub Skills'
				/>
				<meta
					name='robots'
					content='index, follow'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
			<h1 className='text-center lg:text-5xl md:text-4xl sm:text-3xl font-bold mb-24 text-themeColorMain'>
				Contact Us
			</h1>
			<div className='space-y-4 text-textColor mx-10'>
				<div className='grid grid-cols-2 gap-4'>
					<div className='space-y-2 border-2 p-1'>
						<Input
							id='firstName'
							placeholder='Enter your first name'
							value={formData.firstName}
							onChange={handleChange}
						/>
					</div>
					<div className='space-y-2 border-2 p-1'>
						<Input
							id='lastName'
							placeholder='Enter your last name'
							value={formData.lastName}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className='space-y-2 border-2 p-1'>
					<Input
						className='w-full'
						id='email'
						placeholder='Enter your email'
						type='email'
						value={formData.email}
						onChange={handleChange}
					/>
				</div>
				<div className='space-y-2 border-2 p-1'>
					<Textarea
						className='min-h-[100px] w-full'
						id='message'
						placeholder='Enter your message'
						value={formData.message}
						onChange={handleChange}
					/>
				</div>
				<div>
					<Button
						label={isSending ? 'Sending' : 'Send Message'}
						style={{
							backgroundColor: isSending ? '#999' : '#5A75CE',
							padding: '10px 20px',
							borderRadius: '10px'
						}}
						disabled={isSending}
						onClick={handleSendEmail}
					/>
				</div>
				{successMessage && (
					<div className='text-green-500 mt-4'>{successMessage}</div>
				)}
				{errorMessage && (
					<div className='text-red-500 mt-4'>{errorMessage}</div>
				)}
			</div>
		</div>
	)
}

export default Contact
