import { useState } from "react"

function Counter() {
    const [count, setData] = useState(0)

    return (
        <>
            <h1>Current count: {count}</h1>
            <button onClick={() => setData(count + 1)}>+</button>
            <button onClick={() => setData(count - 1)}>-</button>
        </>
        
    )
}

export default Counter