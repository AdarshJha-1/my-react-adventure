// import './App.css'
// import { useState } from 'react';

// function App() {
//     let id = 1
//     // const [username, setUsername] = useState("")
//     const [todo, setTodo] = useState([{
//         id: {id},
//         title: "Go to Gym",
//     }])

//     const handleClick = (event) => {
//         const newTodo = event.target.value;
//         setTodo([...todo, {
//             id: {id},
//             title: {newTodo}
//         }])
//         id++;
//     }

//     const handleChange = (event) => {
//         const newTodo = {
//             id: {id},
//             title: event.target.value,
//         }
//         setTodo([...todo, newTodo])
//     }
//     const handleSubmit = (event) => {
//         event.preventDefault()
//     }

//     return (
//         <>
//             <h1>Todo Demo</h1>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" onSubmit={handleClick} />
//                 <br />
//                 <br />
//                 <button onClick={handleClick}>Submit</button>
//             </form>
//             <div>
//                 {todo.map(todo => (
//                     <h2 key={Math.random() * 10}>{todo.title}</h2>
//                 ))}
//             </div>
//         </>
//     )
// }

// export default App;