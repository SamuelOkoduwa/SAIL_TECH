import { useState } from 'react'
import './App.css'
import TextLengthCheck from './assets/Component/TextLengthCheck'

function App() {
  const [text, setText] = useState('');

  const textChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input type="text" onChange={textChange} />
      <TextLengthCheck  TextLength={text.length} />
    </>
  )
}

export default App
