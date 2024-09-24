import { SignUp } from '@clerk/nextjs'

const SignUpPage = () => {
	return (
		<div>
			<h1>Sign Up</h1>
			<SignUp
				path='/sign-up'
				routing='path'
				signInUrl='/sign-in'
			/>
		</div>
	)
}

export default SignUpPage
