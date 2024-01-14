import { Data, Data1 } from "../App"
import { useContext } from "react"

export const Com1 = () => {
    const name = useContext(Data);
    const age = useContext(Data1);
    return (
        <div> 
            <h1>My name is {name} and my age is {age}</h1>
        Com1
    </div>
    )
}
