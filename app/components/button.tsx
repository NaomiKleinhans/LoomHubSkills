// components/button.tsx
import React from 'react'

interface ButtonProps {
	label: string
	style?: React.CSSProperties
	disabled?: boolean
	onClick: () => void // Ensure onClick is a function with no return type
}

const Button: React.FC<ButtonProps> = ({ label, style, disabled, onClick }) => (
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
