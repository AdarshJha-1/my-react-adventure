import { useState } from 'react';

import './App.css'


function App() {
  let [value, setValue] = useState(1);
  const addValue = () => {
    setValue(value += 1)
  }
  const removeValue = () => {
    if(value >0){
      setValue(value -= 1)
    } 
    else{
      alert("Can't go less than 0");
      setValue(value);
    }
    
  }
  return (
    <>
    <h1>React Counter</h1>
    <h2>Counter value: {value}</h2>
    <button onClick={addValue}>Add value</button>
    <br/>
    <br/>
    <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
