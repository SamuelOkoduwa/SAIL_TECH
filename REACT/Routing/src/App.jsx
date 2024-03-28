import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutUs from './Pages/AboutUs/AboutUs'
import Services from './Pages/Services/Services'
import Home from './Pages/Home/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
