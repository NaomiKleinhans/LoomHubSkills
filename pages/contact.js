// import React, { useRef, useState } from 'react'
// import Input from '../components/Input'
// import Head from 'next/head'
// import Textarea from '../components/Textarea'
// import Button from '../components/Button'

const ContactUs = () => {
// 	const form = useRef()
// 	const [successMessage, setSuccessMessage] = useState('')
// 	const [errorMessage, setErrorMessage] = useState('')
// 	const [isSending, setIsSending] = useState(false)

// 	const sendEmail = async (e) => {
// 		e.preventDefault()
// 		setIsSending(true)
// 		setSuccessMessage('')
// 		setErrorMessage('')

// 		const formData = new FormData(form.current)
// 		const data = Object.fromEntries(formData.entries())

// 		try {
// 			const response = await fetch('/api/sendEmail', {
// 				method: 'POST',
// 				headers: {
// 					'Content-Type': 'application/json'
// 				},
// 				body: JSON.stringify(data)
// 			})

// 			if (response.ok) {
// 				setSuccessMessage('Message sent successfully!')
// 				form.current.reset()
// 			} else {
// 				setErrorMessage('Failed to send the message.')
// 			}
// 		} catch (error) {
// 			setErrorMessage('Failed to send the message. Please try again.')
// 		} finally {
// 			setIsSending(false)
// 		}
// 	}

// 	return (
// 		<div className='container mx-auto p-6'>
// 			<Head>
// 				<title>Contact | LoomHub Skills</title>
// 				<meta
// 					name='description'
// 					content='Contact details on LoomHub Skills'
// 				/>
// 				<link
// 					rel='icon'
// 					href='/favicon.ico'
// 				/>
// 			</Head>
// 			<h1 className='text-center font-bold mb-8'>Contact Us</h1>
// 			<form
// 				ref={form}
// 				className='space-y-4'
// 				onSubmit={sendEmail}
// 			>
// 				<Input
// 					id='firstName'
// 					name='firstName'
// 					placeholder='First Name'
// 					required
// 				/>
// 				<Input
// 					id='lastName'
// 					name='lastName'
// 					placeholder='Last Name'
// 					required
// 				/>
// 				<Input
// 					id='email'
// 					name='email'
// 					placeholder='Email'
// 					type='email'
// 					required
// 				/>
// 				<Textarea
// 					id='message'
// 					name='message'
// 					placeholder='Your Message'
// 					required
// 				/>
// 				<Button
// 					label={isSending ? 'Sending...' : 'Send Message'}
// 					disabled={isSending}
// 				/>
// 				{successMessage && (
// 					<div className='text-green-500 mt-4'>{successMessage}</div>
// 				)}
// 				{errorMessage && (
// 					<div className='text-red-500 mt-4'>{errorMessage}</div>
// 				)}
// 			</form>
// 		</div>
// 	)
}

export default ContactUs
