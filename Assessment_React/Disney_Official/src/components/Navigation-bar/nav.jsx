import './nav.css'

const Nav = () => {
	return(
		<div id="nav-bar">
			<div className="log">
				<img src="https://lumiere-a.akamaihd.net/v1/images/disney_logo_c77826a6.png?region=0,0,300,150" alt="Disney" height="50"/>
			</div>


			<div className="links">
				<span><a href="">Disney Plus</a></span>
				<span><a href="">Shopping</a></span>
				<span><a href="">Movie</a></span>
				<span><a href="">TV</a></span>
				<span><a href="">Parks & Resorts</a></span>
				<span><a href="">Music</a></span>
				<span><a href="">Live and Events</a></span>
				<span><a href="">Game</a></span>
				<span><a href="">Kids</a></span>
				<span><a href="">company Information</a></span>
				
			</div>

			<div className="search-bar">
				<input type="text" placeholder='Search within the sit'/>
				<img src="src\assets\search-icon.png" alt="Search Logo" />
			</div>
		</div>

		
	)
}

export default Nav