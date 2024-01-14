import './App.css'
import User from './components/User'
// import { FaCartShopping } from "react-icons/fa6";

// const ValidPassword = () => <h1>Valid Password</h1>
// const InvalidPassword = () => <h1>Invalid Password</h1>

// const Password = ({isValid}) => {
//   // if(isValiD){
//   //   return <ValidPassword/>
//   // } 
//   // return <InvalidPassword/>  
//   return isValid ? <ValidPassword/> : <InvalidPassword/>;
// } 

// const Cart = () => {
//   const items = ["Smartphone", "Laptop", "Tablet", "Smartwatch", "Digital Camera"];

//   return <>
//   <h1>Cart 🛒</h1>
//   <ul>
//     <h4>👇 Products</h4>
//     {items.length > 0 && <h2>You have {items.length} items in your cart</h2>}
//     {
//       items.map(item => (
//         <li key={Math.random()*10}>{item}</li>
//       ))
//     }
//   </ul>
//   </>
// }

// const Button = () => {

//   const handleClick = (a, b) => {
//     // alert("You Clicked me")
//     console.log("sum", a + b)
//   }
//   let a =10, b=22;
//   return <button onClick={() => handleClick(a,b)}>Click</button>
// };



// const Copy = () => {

//   const CopyHandler = (e) => {
//   alert("Stop Copying")
// }
//   return <>
//   <p onCopy={CopyHandler}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, facilis earum. Quidem distinctio harum iure quasi ad, error consequuntur, accusamus asperiores voluptas consectetur odit.</p>
//   </>
// }

const moveHandler = () => {
  console.log("You hovered me");
}

const Move = () => {
  return <>
    <p onMouseMove={moveHandler}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere reiciendis repellendus ipsum beatae velit deleniti explicabo? Nulla expedita cumque architecto. Distinctio, at blanditiis.</p>
  </>
}

function App() {

  return (
    <>
      {/* <h1 style={{color: "Red", backgroundColor: "blue"}}>Hello I'm React</h1>
    <FaCartShopping /> */}
      {/* <Password isValid={false}/> */}
      {/* <Cart/> */}
      <Move />




    </>
  )
}

export default App












/*
<User
        imgUrl="https://shorturl.at/buyzZ"
        imgName="pfp"
        username="Adarsh Jha"
        hobbies="Nothing"
        
      >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex praesentium esse nihil veritatis odio necessitatibus sed itaque molestias eaque aspernatur! Ullam ab repellat, aut at dolorum dolorem officiis, repudiandae nobis non odio nisi a adipisci facilis obcaecati eaque quas ducimus beatae optio necessitatibus tempore deleniti.</p>
        <h1>End!</h1>
      </User>
 */