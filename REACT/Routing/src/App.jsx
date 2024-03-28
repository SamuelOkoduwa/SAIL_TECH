import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import AboutUs from './Pages/AboutUs/AboutUs'
import Services from './Pages/Services/Services'
import Error404 from './Pages/Error404'


function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/services' element={<Services />} />
          <Route path='*' element={<Error404 />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
