import Input from "./Input";

const SignUp = () =>{
    return(
        <div>
            <h1>Sign Up</h1>
            <fieldset>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Input type={"text"} content={"Enter Your First Name"} /> <br />
                <Input type={"text"} content={"Enter Your Last Name"} /> <br />
                <Input type={"text"} content={"Enter Your User Name"} /> <br />
                {/* <label htmlFor="">Gender</label> */}
                <select name="" id="">
                    
                </select>
                <Input type={"checkbox"}  /> 
                <Input type={'Checkbox'}/><br />
                <Input type={'email'} content={'Enter Your Email'}/> <br />
                <Input type={'password'} content={'Enter your password'}/> <br />
                <Input type={'password'} content={'Comfirm  your password'}/> <br />
            </div>
            </fieldset> <br />
            
            
        </div>
    )
}

export default SignUp