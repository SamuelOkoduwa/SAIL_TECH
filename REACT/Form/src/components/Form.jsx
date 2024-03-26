import { useState } from "react"

// Form
const Form = () => {

    /**
     * Static use of react hooks which is useState
     */
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("")


    /**
     * Dynamic use of react hooks: useState
     */
    const [userDetails, setUserDetails] = useState({
        email: '', password: ''
    });

    // userdetails
    const handleUserDetails = ()=> {
        const name = e.target.name
        const value = e.target.value
        setUserDetails(
            (PrevState)=>({
                ...PrevState,
                [name]: value
            })
        )
    }

    // handle Email
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    // Handle Password
    const handlePassword =(e) => {
        setPassword(e.target.value)
    }

    // To submit a button
    const handleSubmit = (e)=> {
        e.preventDefault()  //Prevents form from submiting and reloading
        console.log(email, password)
    }


    return(
        <>
            <form action="" onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", gap:"40px", border: "1px solid black", padding: "40px", borderRadius:"5px"}}> 
                <div className="form-control">
                <label htmlFor="email">Email</label>
                {/* <br></br> */}
                <input type="email" 
                name="email" 
                placeholder="example@email.com" 
                value={userDetails.email} 
                onChange={(handleEmail)}/>                
                {/* <h1>Email: {email}</h1>                 */}
                </div>

                <div className="form-control">
                <label htmlFor="email">Password</label>
                {/* <br></br> */}
                <input type="password" 
                name="email" 
                placeholder="password" 
                value={userDetails.password} 
                onChange={(handlePassword)}/>                
                {/* <h1>Password: {password}</h1> */}
                
                </div>

                <button type="">Submit</button>
            </form>
        </>
    )
}

export default Form