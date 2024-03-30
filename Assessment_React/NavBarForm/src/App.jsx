// import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Setting from './pages/Setting'


function App() {
  

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route  path='/' element={<Home />} />
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/setting' element={<Setting/>}/>
          {/* <Route path='login' element={< LogIn/>}/> */}
          Rou
        </Routes>
      </BrowserRouter>
      

      
    </>
  )
}

export default App
