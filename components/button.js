const Button = ({ label, onClick, disabled, style }) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			style={style}
		>
			{label}
		</button>
	)
}

export default Button
