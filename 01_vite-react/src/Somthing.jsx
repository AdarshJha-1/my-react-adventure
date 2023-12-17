// function something() {
//     return (
//         <>
//         <h1>Something here</h1>
//         </>
//     )
// }

// export default something

let count ;
function Btn(){
    <button onClick={() => {
        count++;
    }}>Click {count}</button>
}

export default Btn