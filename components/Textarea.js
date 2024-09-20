const Textarea = ({ id, placeholder, value, onChange, className }) => {
	return (
		<textarea
			id={id}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			className={className}
		/>
	)
}

export default Textarea
