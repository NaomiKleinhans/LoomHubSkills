import nodemailer from 'nodemailer'

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const { firstName, lastName, email, message } = req.body

		const transporter = nodemailer.createTransport({
			host: 'smtp.your-email-provider.com',
			port: 587,
			secure: false,
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS
			}
		})

		const mailOptions = {
			from: `${firstName} ${lastName} <${email}>`,
			to: 'receiver@example.com',
			subject: 'New Contact Message',
			text: message
		}

		try {
			await transporter.sendMail(mailOptions)
			return res.status(200).json({ message: 'Email sent successfully!' })
		} catch (error) {
			return res.status(500).json({ error: 'Failed to send email' })
		}
	} else {
		res.setHeader('Allow', ['POST'])
		res.status(405).end(`Method ${req.method} Not Allowed`)
	}
}
