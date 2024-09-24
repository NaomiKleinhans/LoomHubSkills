// Importing React library is optional if not used elsewhere in the file,
// but it’s good practice to include it in functional components.
import React from 'react'

// Input component definition
const Input = (props) => {
	// Returning a native HTML input element with all passed props
	return <input {...props} />
}

// Exporting the Input component for use in other parts of the application
export default Input
