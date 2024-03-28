import { useEffect, useState } from "react"

const UseEffect = ()=> {

    const [count, setCount] = useState(0)
    const [multiply, setMultiply] = useState(2)

    useEffect(()=> {
        setTimeout(setCount((count)=> count + 1), 100)
    }, [multiply])

    return(
        <>
        <h1>{count}</h1>
        <button onClick={()=>setMultiply((multiply)=> multiply * 2)}>{multiply}</button>
        </>
    )
}

export default UseEffect