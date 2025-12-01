import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Value, setValue] = useState(1)
  // const [MultipliedValue, setMultipliedValue] = useState(1)
    let MultipliedValue = Value * 5

  
  const multiplybyfive = () => {
    // setMultipliedValue(Value * 5)
    setValue(Value + 1)
  }

  return (
    <>
      <h1>Main Value:{Value}</h1>
      <button onClick={multiplybyfive}
      >Click to Multiply by 5</button>
      <h2>Multiplied Value : {MultipliedValue}</h2>
    </>
  )
}

export default App
