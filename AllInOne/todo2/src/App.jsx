import { useState } from 'react'
import './App.css'
function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  

  return (
    <div>
      <input type="text" value={input} />
    </div>
  )
}

export default App
