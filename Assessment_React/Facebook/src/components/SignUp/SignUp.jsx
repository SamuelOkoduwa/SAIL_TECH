const SignUp = ()=> {
	return (
		<div id="formSign">
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

				<label >Date of birth <span>?</span> </label>
				<br />
				<select name="" id="">
					<option value="">4</option>
				</select>

				<select name="" id="">
					<option value="">April</option>
				</select>

				<select name="" id="">
					<option value="">2024</option>
				</select>
				<br />
				<br />
				<label>Gender <span>?</span></label>
				<br />
				<input type="radio" name="gender"  />
				

			</form>
		</div>
	)
}

export default SignUp