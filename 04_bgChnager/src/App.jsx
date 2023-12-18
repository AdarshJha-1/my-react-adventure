import { useState } from 'react';

function App() {

  const [color, setColor] = useState('white');

  return (
      <div className="w-full h-screen flex justify-center items-center duration-200" style={{backgroundColor: color}}>

        <div className='w-2/4 h-28 flex justify-evenly items-center flex-wrap'>

          <button id='red' onClick={() => setColor('red')}className='w-24 h-12 bg-white rounded-full m-4 font-extrabold text-red-900 shadow-xl'>Red</button>
          
          <button id='red' onClick={() => setColor('black')}className='w-24 h-12 bg-white rounded-full m-4 font-extrabold text-black shadow-xl'>Black</button>

          <button id='red' onClick={() => setColor('blue')}className='w-24 h-12 bg-white rounded-full m-4 font-extrabold text-blue-900 shadow-xl'>Blue</button>

          <button id='red' onClick={() => setColor('yellow')}className='w-24 h-12 bg-white rounded-full m-4 font-extrabold text-yellow-900 shadow-xl'>Yellow</button>

          <button id='red' onClick={() => setColor('green')}className='w-24 h-12 bg-white rounded-full m-4 font-extrabold text-green-900 shadow-xl'>Green</button>

          <button id='red' onClick={() => setColor('orange')}className='w-24 h-12 bg-white rounded-full m-4 font-extrabold text-orange-900 shadow-xl'>Orange</button>

        </div>
        
      </div>
  )
}

export default App
