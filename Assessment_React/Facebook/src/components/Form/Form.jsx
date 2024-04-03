import './Form.css'

const Form = ()=>{
	return(
		<div id="form">
			<div className="form">
			<form action="">
				<input type="email" placeholder="Email address or phone number" required /> <br />
				<input type="password" placeholder='Password' required /> <br />

				<button className='log-in'>Log in</button>
				<p><a href="">Forgotten password?</a></p>

					
			</form>

			<hr />

			<button className='create'>Create new account</button>
			</div>

			<div id='celebrity'><span>Create a Page </span>
			for a celebrity, brand or business
			</div>
		</div>
	)
}

export default Form