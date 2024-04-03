const SignUp = ()=> {
	return (
		<div>
			<button>Sign Up</button>
			<form action="">
				<h1>Sign Up</h1>
				<p>It's quick and easy</p>

				<input type="text" name="firstName" id="firstName" 
				placeholder="First name" /> 
				<input type="text" name="lastName" id="lastName"  
				placeholder="Surname"/>
				<br />

				<input type="text" name="numEmail" id="numEmail" 
				placeholder="Mobile number or email address"/>
				<br />

				<input type="password" name="password" id="password" 
				placeholder="New password"/>
				<br />

			</form>
		</div>
	)
}

export default SignUp