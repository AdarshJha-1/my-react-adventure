import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user} = useContext(UserContext);

    if(!user){
        return <div className='mt-5 text-3xl'>Please Login</div>
    }
    else{
        return <div className='mt-5 text-3xl'>Welcome {user.username}</div>
    }
}

export default Profile