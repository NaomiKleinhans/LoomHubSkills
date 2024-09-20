import React, { MouseEventHandler, CSSProperties, ReactNode } from 'react'

export interface ButtonProps {
	label?: string
	onClick?: MouseEventHandler<HTMLButtonElement>
	style?: CSSProperties
	children?: ReactNode
}

export const Button: React.FC<ButtonProps> = ({
	label,
	onClick,
	style,
	children
}) => {
	return (
		<button
			onClick={onClick}
			style={style}
		>
			{label ?? children ?? 'X'}
		</button>
	)
}
