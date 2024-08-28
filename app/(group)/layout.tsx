const GroupLayout = ({
	children
}: {
		children: React.ReactNode
}) => {
	return ( 
		<div className="h-screen bg-sky-700 text-white">
			{children}
		</div>
	 );
}
 
export default GroupLayout;