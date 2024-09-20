export const HamburgerIcon = (props: any) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			{...props}
		>
			<defs>
				<style>
					{'.hbi-1 {fill: #fff; stroke: #EBE0BC; strokeWidth: 1.5;  }'}
				</style>
			</defs>
			<g
				id='hamburger-menu'
				data-name='hamburger menu'
			>
				<g>
					<path
						className='hbi-1'
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
					/>
				</g>
			</g>
		</svg>
	)
}