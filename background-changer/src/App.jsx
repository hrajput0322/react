import { useState } from 'react'

function App() {
  const [color, setColor] = useState("white")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 rounded-xl mx-2" style={{backgroundColor: "black"}}>
        <button className='rounded-xl outline-none px-4 my-2 mx-3' style={{backgroundColor: "red", color: "white"}} onClick={() => setColor("red")}>
          Red
        </button>
        <button className='rounded-xl outline-none px-4 my-2 mx-3' style={{backgroundColor: "blue", color: "white"}} onClick={() => setColor("blue")}>
          blue
        </button>
        <button className='rounded-xl outline-none px-4 my-2 mx-3' style={{backgroundColor: "green", color: "white"}} onClick={() => setColor("green")}>
          green
        </button>
        <button className='rounded-xl outline-none px-4 my-2 mx-3' style={{backgroundColor: "yellow", color: "black"}} onClick={() => setColor("yellow")}>
          yellow
        </button>
      </div>
    </div>
  )
}

export default App
