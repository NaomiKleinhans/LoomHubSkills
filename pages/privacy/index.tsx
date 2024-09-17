// pages/privacy-policy.tsx

import { FC } from 'react'
import Head from 'next/head'
import Header from '@/components/header'

const PrivacyPolicy: FC = () => {
	return (
		<>
			<Head>
				<title>Privacy Policy | LoomHub Skills</title>
				<meta
					name='description'
					content='Privacy policy for LoomHub Skills'
				/>
				<meta
					name='robots'
					content='noindex, nofollow'
				/>
			</Head>
			<Header/>
			<div className='max-w-3xl mx-auto p-6'>
				<h1 className='text-4xl font-bold mb-4'>Privacy Policy</h1>
				<p className='text-gray-700 mb-4'>Effective Date: 17/09/2024</p>

				<h2 className='text-2xl font-semibold mt-6 mb-2'>Introduction</h2>
				<p className='text-gray-700 mb-4'>
					Welcome to LoomHub Skills. We value your privacy and are committed to
					protecting your personal information. This Privacy Policy outlines how
					we collect, use, and protect your information when you use our
					services.
				</p>

				<h2 className='text-2xl font-semibold mt-6 mb-2'>
					Information We Collect
				</h2>
				<p className='text-gray-700 mb-4'>
					We collect various types of information in connection with your use of
					our services, including:
				</p>
				<ul className='list-disc pl-5 text-gray-700 mb-4'>
					<li>
						<strong>Personal Information:</strong> Information that you provide
						to us directly, such as your name, email address, and other contact
						details.
					</li>
					<li>
						<strong>Usage Data:</strong> Information about your interaction with
						our website and services, including IP addresses, browser types, and
						pages visited.
					</li>
					<li>
						<strong>Cookies:</strong> We use cookies and similar technologies to
						enhance your experience on our website. You can manage your cookie
						preferences through your browser settings.
					</li>
				</ul>

				<h2 className='text-2xl font-semibold mt-6 mb-2'>
					How We Use Your Information
				</h2>
				<p className='text-gray-700 mb-4'>
					We use the information we collect to:
				</p>
				<ul className='list-disc pl-5 text-gray-700 mb-4'>
					<li>Provide, operate, and maintain our services.</li>
					<li>Improve and personalize your experience.</li>
					<li>
						Communicate with you, including responding to your inquiries and
						providing updates.
					</li>
					<li>
						Analyze usage trends and gather statistics to improve our services.
					</li>
					<li>
						Ensure compliance with legal obligations and protect against fraud
						and abuse.
					</li>
				</ul>

				<h2 className='text-2xl font-semibold mt-6 mb-2'>
					Sharing Your Information
				</h2>
				<p className='text-gray-700 mb-4'>
					We do not sell, trade, or otherwise transfer your personal information
					to outside parties, except in the following circumstances:
				</p>
				<ul className='list-disc pl-5 text-gray-700 mb-4'>
					<li>
						<strong>Service Providers:</strong> We may share your information
						with third-party service providers who assist us in operating our
						services and conducting business.
					</li>
					<li>
						<strong>Legal Requirements:</strong> We may disclose your
						information if required by law or in response to valid requests by
						public authorities.
					</li>
					<li>
						<strong>Business Transfers:</strong> In the event of a merger,
						acquisition, or sale of all or a portion of our assets, your
						information may be transferred as part of the transaction.
					</li>
				</ul>

				<h2 className='text-2xl font-semibold mt-6 mb-2'>
					Your Rights and Choices
				</h2>
				<p className='text-gray-700 mb-4'>You have the right to:</p>
				<ul className='list-disc pl-5 text-gray-700 mb-4'>
					<li>Access and update your personal information.</li>
					<li>Request the deletion of your personal information.</li>
					<li>Opt-out of receiving marketing communications from us.</li>
					<li>
						Exercise other rights provided under applicable data protection
						laws.
					</li>
				</ul>

				<h2 className='text-2xl font-semibold mt-6 mb-2'>Security</h2>
				<p className='text-gray-700 mb-4'>
					We implement reasonable measures to protect your information from
					unauthorized access, use, or disclosure. However, no method of
					transmission over the internet or electronic storage is 100% secure.
				</p>

				<h2 className='text-2xl font-semibold mt-6 mb-2'>
					Changes to This Privacy Policy
				</h2>
				<p className='text-gray-700 mb-4'>
					We may update this Privacy Policy from time to time. Any changes will
					be posted on this page with an updated effective date. We encourage
					you to review this Privacy Policy periodically.
				</p>

				<h2 className='text-2xl font-semibold mt-6 mb-2'>Contact Us</h2>
				<p className='text-gray-700 mb-4'>
					If you have any questions or concerns about this Privacy Policy or our
					data practices, please contact us at:
				</p>
				<p className='text-gray-700 mb-4'>Email: support@loomhubskills.com</p>

				<p className='text-gray-700 mb-4'>
					Thank you for trusting LoomHub Skills with your personal information.
				</p>
			</div>
		</>
	)
}

export default PrivacyPolicy
