import {Link} from "react-router-dom"

const  Error404 = ()=> {

    return(
        <>
        <div>
            <h1>Error, A wrong Page</h1>
            <Link to={'/'}>
                <button>Go Home</button>
            </Link>
        </div>
        </>
    )
}
export default Error404