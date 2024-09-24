import React from 'react' // Importing React library for building the component

// Textarea component definition
const Textarea = ({ id, placeholder, value, onChange, className }) => {
	return (
		// Rendering a textarea element with passed props
		<textarea
			id={id} // Unique identifier for the textarea
			placeholder={placeholder} // Placeholder text displayed when the textarea is empty
			value={value} // Controlled value for the textarea, allowing external state management
			onChange={onChange} // Event handler for input changes
			className={className} // Additional classes for custom styling
		/>
	)
}

// Exporting the Textarea component for use in other parts of the application
export default Textarea
