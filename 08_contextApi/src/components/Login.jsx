import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {setUser} = useContext(UserContext)

    const handleSubmit  = (e) => {
        e.preventDefault();
        setUser({username, password})
    }
    
    return (
        <div className='flex flex-col gap-3 items-center justify-center'>
            <h2 className='text-3xl'>Login</h2>
            <input 
            className='px-4 py-2 bg-slate-700'
            type="text" 
            placeholder='username' 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            />
            <input 
            className='px-4 py-2 bg-slate-700'
            type="password"
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
            <button 
            className='px-10 py-3 bg-slate-900 rounded-xl'
            onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login