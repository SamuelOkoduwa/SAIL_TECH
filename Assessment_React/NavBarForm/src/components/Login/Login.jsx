import './Login.css'

const Login = ()=> {

	const handleSubmit = (e) =>{
		e.preventDefault
	}

	return(
		<div className="logInForm">
			<div className="form">
				<form onSubmit={handleSubmit}>
					<fieldset>
						<legend>Login</legend>
					<div className="Names">
						<input type="text" name="firstName" placeholder="First Name" required/> <br /> <br />
						<input type="text" name="lastName" placeholder="Last Name" required/> <br /> <br />
					</div>

					<div className="validation-details">
						<input type="email" placeholder="Enter your Email"/> <br /> <br />
						<input type="password" placeholder="Enter your password"/> <br /><br />
					</div>

					<div>
						<label htmlFor="image">Image</label>
						<input type="file" name="image" id="image" accept="image/*" required/>
					</div>
					</fieldset>
				</form>
			</div>
		</div>
	)
}

export default Login