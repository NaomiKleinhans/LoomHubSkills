// types/button.d.ts
declare module 'path/to/button' {
	import React from 'react'

	export interface ButtonProps {
		label: string
		style?: React.CSSProperties
		disabled?: boolean
		onClick: () => void
	}

	const Button: React.FC<ButtonProps>
	export default Button
}
