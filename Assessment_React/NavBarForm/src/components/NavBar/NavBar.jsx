import { Link } from 'react-router-dom'
import './NavBar.css'


const NavBar = ()=>{



	return(
		<div id="nav">
			<div>
				<Link to={'/'}>Home</Link>
			</div>
			<div className='menu'>
				<Link to={'/about'}><span>About</span></Link>
				<Link to={'/contact'}><span>Contact Us</span></Link>
				<Link to={'/setting'}><span>Settings</span></Link>
			</div>
		</div>
	)
}

export default NavBar


// Navbar.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = ({ isLoggedIn, onLogout }) => {
//   return (
//     <nav>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//         <li><Link to="/settings">Settings</Link></li>
//       </ul>
//       {isLoggedIn ? (
//         <button onClick={onLogout}>Logout</button>
//       ) : (
//         <Link to="/login">Login</Link>
//       )}
//       <img src="/path/to/avatar" alt="Avatar" />
//     </nav>
//   );
// };

// export default Navbar;
