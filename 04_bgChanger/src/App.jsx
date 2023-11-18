import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("pink")

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 w-auto" >
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white  rounded-3xl px-2 py-2  h-14">
          <button className="outline-none px-4  rounded-3xl h-10 w-20 border-2 border-black" style={{ backgroundColor: "red", color:"white" }}
          onClick={() => setColor("red")}
          >Red</button>

          <button className="outline-none px-4 rounded-3xl h-10 w-20 border-2 border-black" style={{ backgroundColor: "blue", color:"white"  }}
          onClick={() => setColor("blue")}
          >Blue</button>

          <button className="outline-none px-4 rounded-3xl h-10 w-20 border-2 border-red-600" style={{ backgroundColor: "black", color:"white"  }}
          onClick={() => setColor("black")}
          >Black</button>

          <button className="outline-none px-4 rounded-3xl h-10 w-20 border-2 border-black" style={{ backgroundColor: "yellow", color:"black"  }}
          onClick={() => setColor("yellow")}
          >Yellow</button>


          <button className="outline-none px-4 rounded-3xl h-10 w-20 border-2 border-black" style={{ backgroundColor: "pink", color:"black"  }}
          onClick={() => setColor("pink")}
          >Pink</button>
          <button className="outline-none px-4 rounded-3xl h-10 w-20 border-2 border-black" style={{ backgroundColor: "aqua", 
          color:"black"  }}
          onClick={() => setColor("aqua")}
          >Aqua</button>
          <button className="outline-none px-4 rounded-3xl h-10 w-20 border-2 border-black" style={{ backgroundColor: "purple", color:"white"  }}
          onClick={() => setColor("purple")}
          >Purple</button>
          <button className="outline-none px-4 rounded-3xl h-10 w-20 border-2 border-black" style={{ backgroundColor: "white", color:"black"  }}
          onClick={() => setColor("white")}
          >White</button>
        </div>
      </div>
    </div>

  )
}

export default App
