import { Data } from "../App"

export const Com3 = () => {
    return (
        <div> 
            <Data.Consumer>
                {(name) => {
                    return <h1>{name}</h1>
                }}
            </Data.Consumer>
            Com3
        </div>
    )
}
