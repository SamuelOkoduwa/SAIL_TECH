import { useState } from 'react'
import './App.css'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'


function App() {
  const [logged, setLogged] = useState(false)

  const toggleLog = ()=> {
    const presentState = logged
    setLogged(!presentState)

  }


  return (
    <>

      {logged ? <SignUp /> : <SignIn /> }
      <button onClick={()=> {
        toggleLog()
      }}>
        {logged ? 'SignUp'  : 'SignIn'}
      </button>

      
      

    </>
  )
}

export default App
