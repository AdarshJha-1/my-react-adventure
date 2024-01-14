import './App.css';

import { useState, useEffect } from 'react';

function App() {
    const [data, setData] = useState(0)

    useEffect(() => {
        fetch("https://api.github.com/users/AdarshJha-1")
            .then((response) => response.json())
            .then((data) => setData(data = data))

    })
    return (
        <>
            <h1>{data.name}</h1>
            <img src={data.avatar_url
            } alt="" />
            <button onClick={() => setValue(value + 1)}>Click me</button>
        </>
    )
}

export default App;