
import Btn from "./Somthing"
import User from "./Name"

// const p = (User) => {
//   User[0].forEach((data) => {
//     const p = document.createElement('p');
//     p.innerHTML(data, User[0][data])
//   });
// }


function App() {
  // const user = Array.from(User)
  return (
    <>
      <h1>Hello World | {User[0].username}</h1>
      <h4>This is your information</h4>
     {/* { p()} */}


      
      <p>Username: {User[0].username}</p>
      <p>age: {User[0].age}</p>
      <p>email: {User[0].email}</p>
      <p>occupation: {User[0].occupation}</p>
      <Btn />
    </>
  )
}

export default App
