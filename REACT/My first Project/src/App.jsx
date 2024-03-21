import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'
import SignUp from './Signup'



function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <SignUp />
        <Login />
      </div>
    </>
  )
}

export default App
