import React from "react"
const Input = ({type, content}) =>{
     

    return (
        <>
            <input type={type} placeholder={content} style={{borderRadius: '5px', padding: '10px'}} />
            {/* <button>{action}</button> */}
        </>
    )
}

export default Input