import React from 'react'

const Button = ({ label, style, disabled, onClick }) => (
	<button
		style={style}
		disabled={disabled}
		onClick={onClick}
		className='btn'
	>
		{label}
	</button>
)

export default Button
