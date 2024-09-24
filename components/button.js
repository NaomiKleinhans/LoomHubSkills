// Define a functional Button component that accepts props: label, onClick, disabled, and style
const Button = ({ label, onClick, disabled, style }) => {
	return (
		// Create a button element with dynamic properties passed as props
		<button
			// onClick: Function to be executed when the button is clicked
			onClick={onClick}
			// disabled: Boolean value to disable the button if true, preventing user interaction
			disabled={disabled}
			// style: Inline CSS styles applied to the button (can be passed as an object)
			style={style}
		>
			{/* Display the label text inside the button */}
			{label}
		</button>
	)
}

// Export the Button component for use in other parts of the application
export default Button
