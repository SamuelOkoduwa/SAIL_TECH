import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseEffect from './UseEffects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <UseEffect />
      </div>
      </>
  )
}

export default App
