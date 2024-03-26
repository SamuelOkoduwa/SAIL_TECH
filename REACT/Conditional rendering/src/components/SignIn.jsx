import Input from "./Input"

const SignIn = ()=> {
    return(
        <div>
            <h1>Sign In</h1>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Input type={'email'} content={'Please Enter your Email'}/> <br />
                <Input type={'password'} content={'Please Enter your Password'}/> <br />
            </div>
        </div>
    )
}

export default SignIn