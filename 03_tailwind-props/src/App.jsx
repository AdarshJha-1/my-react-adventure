import './App.css'
import Card from './Card'

function App() {
  let myObj = [
    {
      name: "Ichigo",
      age: 18
    },
    {
      name: "Asta",
      age: 19
    },
  ]
  return (
    <>
      <div className='flex flex-col justify-center bg-gray-900'>

        <h1 className='text-black p-4 w-52 bg-green-400 rounded-xl self-center text-3xl text-center mt-5 mb-4'>Hello World</h1>
        <Card username={myObj[0].name} disText="Hello How Are You I Am Under the Water"/>
        <Card username={myObj[1].name} disText="Hello How Are You I Am Under the tank"/>
      </div>
    </>
  )
}

export default App
