import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  //let counter = 15

  const addValue = () => {
    console.log("Clicked Value",counter);
    //counter = counter + 1
    if (counter < 20) {
      setCounter(counter + 1)
    } else {
      alert("Maximum limit reached (20)")
    }
  }
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    } else {
      alert("Minimum limit reached (0)")
    }
  }

  return (
    <>
      <h1>Hello React</h1>
      <h2>Counter value: {counter}</h2>

      <button 
      onClick={addValue}
      >Add value: {counter}</button>
      <br/>
      <button
      onClick={removeValue}
      >Remove value: {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
