import React, { useEffect, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './card'


const Project = () => {
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const container = containerRef.current

		if (!container) {
			return
		}
	}, [])

	return (
		<div className='container mt-24 px-4 md:px-6'>
			<div className='flex flex-col items-center justify-center space-y-4 text-center'>
				<div className='space-y-2'>
					<h2 className='lg:text-5xl md:text-4xl text-center mx-4 sm:text-3xl font-bold mb-24 text-themeColorMain'>
						Featured Projects
					</h2>
				</div>
			</div>
			<div className='grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3 text-black'>
				<Card>
					<CardHeader>
						<CardTitle className='text-black'>Project 1</CardTitle>
					</CardHeader>
					<CardContent>
						<p className='text-sm text-black'>
							A description of the first project.
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Project 2</CardTitle>
					</CardHeader>
					<CardContent>
						<p className='text-sm'>A description of the second project.</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Project 3</CardTitle>
					</CardHeader>
					<CardContent>
						<p className='text-sm'>A description of the third project.</p>
					</CardContent>
				</Card>
			</div>
				<div className='text-center text-textColor mt-20'>
					If my projects catch your eye, reach out! Let us collaborate.
				</div>
		</div>
	)
}

export default Project
