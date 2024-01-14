import './App.css'

import { createContext } from "react"
import { Com1 } from "./components/Com1"

export const Data = createContext();
export const Data1 = createContext();

function App() {
    const name = "Adarsh Jha";
    const age = 18;
    return (
        <Data.Provider value={name}>
            <Data1.Provider value={age}>
                <Com1 />
            </Data1.Provider>
        </Data.Provider>
    )
}

export default App