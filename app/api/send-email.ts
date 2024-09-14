import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'POST') {
		const { firstName, lastName, email, message } = req.body

		// Configure the Nodemailer transporter
		const transporter = nodemailer.createTransport({
			service: 'gmail', // You can use any email service here
			auth: {
				user: process.env.SMTP_USER, // Set this in your environment variables
				pass: process.env.SMTP_PASS // Set this in your environment variables
			}
		})

		try {
			// Send email
			await transporter.sendMail({
				from: email, // Sender's email
				to: 'maartensnaomi@gmail.com', // Recipient email
				subject: `Contact Form Submission from ${firstName} ${lastName}`,
				text: message,
				html: `<p>Email: ${email}</p><p>Message: ${message}</p>`
			})

			return res.status(200).json({ message: 'Email sent successfully' })
		} catch (error) {
			console.error('Email sending error: ', error)
			return res.status(500).json({ error: 'Error sending email' })
		}
	}

	res.setHeader('Allow', ['POST'])
	res.status(405).end(`Method ${req.method} Not Allowed`)
}
