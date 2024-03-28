import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
const NavBar = ()=>{
    return(
        <>
        <div className='NavBar'>
            <span>Logo</span>
            <div className='links'>
                <Link to={'/'}>
                <span>Home</span>
                </Link>

                <NavLink to={'/aboutus'}>
                <span>About Us</span>
                </NavLink>
                
                <Link to={'/services'}>
                <span>Services</span>
                </Link>
                
            </div>
        </div>
        </>
    )
}

export default NavBar