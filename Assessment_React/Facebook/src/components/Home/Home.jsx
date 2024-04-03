import Form from '../Form/Form'
import './Home.css'

const Home = ()=>{
	return(
		<div id="container">
			<div className="welcome">
				<div>
				<span className='facebook'>facebook</span>
				<span className='connect'>
					Facebook helps you connect <br />
					with people in your life
				</span>
				</div>
			</div>

			<Form />
		</div>
	)
}

export default Home