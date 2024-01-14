import './App.css'
import { useState } from 'react'

const Counter = () => {

    // const [username, setUsername] = useState("no name")
    // const [index, setIndex] = useState(0)

    // const names = ["John", "Jane", "Bob", "Alice"];
    
    // const changeName = () => {
    //     if(index >= names.length - 1){
    //         setIndex(0)
    //     }
    //     else{
    //         setIndex(index + 1)
    //     }
    //     setUsername(names[index])
    // }

    // const [friends, setFriends] = useState(["John", "Jane", "Bob", "Alice"])

    // const addFriend = () => setFriends([...friends, "Adarsh"])


    // const removeFriend = () => setFriends(friends.slice(0, -1))

    // const updateFriend = () => setFriends(friends.map(f => (f+";)")))

    // return (
    //     <>
    //     {friends.map(friend => (
    //         <h1 key={Math.random()*10}>{friend}</h1>
    //     ))}
            
    //         <button onClick={addFriend}>Add one</button>
    //         <button onClick={removeFriend}>Remove one</button>
    //         <button onClick={updateFriend}>Update one</button>
    //         {/* <button onClick={decrement}>-</button> */}
    //     </>
    // )

    const [movies, setMovie] = useState([
        {
            id: 1,
            title: "Star War",
            rating: 5
        },
        {
            id: 2,
            title: "Star War 1",
            rating: 10
        },
        {
            id: 3,
            title: "Star War 2",
            rating: 7
        },
    ])

    return (
        <>
        {movies.map((movie) => (
            <>
            <h1>{movie.title}</h1>
            <h2>{movie.rating}</h2>
            </>
        ))}
            
            {/* <button onClick={changeRating}>Change Rating</button> */}
        </>    
    )
}
function App() {
    return (
        <>
            <Counter />
        </>
    )
}

export default App