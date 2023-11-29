import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)

  const increment = () => {
    if (counter<20)
    setCounter(counter+1)
  }
  const decrement = () => {
    if (counter>0)
    setCounter(counter-1)
  }
  return (
    <>
      <h1>Learning useState Hook</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={
        increment
      }>increment</button>
      <br />
      <br />
      <button onClick={
        decrement
      }>decrement</button>
    </>
  )
}

export default App
