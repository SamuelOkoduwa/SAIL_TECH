import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Real from './components/Person'



function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    
      <Person name = 'Real'></Person>
    </>
  )
  // return (
  //   <>
  //    <Real name="Yusuf"/>
  //    <Real name="Real"/>
  //    <Real name="Dav"/>
  //    <Real name="Gid"/>
  //   </>
  // )
}

export default App
