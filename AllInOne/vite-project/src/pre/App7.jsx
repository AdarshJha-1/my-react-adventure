import './App.css'
import { useRef, useState } from 'react'

function App() {
    const inputUsername = useRef(null)
    const inputEmail = useRef(null)

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const getUserData = () => {
        if(inputUsername.current.value === "" || inputEmail.current.value === "")
        {
            return alert("Enter valid details")
        }
        setUsername(inputUsername.current.value)
        setEmail(inputEmail.current.value)
        
    }


    return (
        <>
        <input type="text" ref={inputUsername}/>
        <input type="text" ref={inputEmail}/>
        <button onClick={() => getUserData()}>Button</button>

        {username !== "" && email !== "" && (
        <div>
            <h2>Your username is: {username}</h2>
            <h2>Your email is: {email}</h2>
        </div>
    )}
        </>
    )
}

export default App