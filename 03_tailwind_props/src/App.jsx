import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  let myObj = {
    name: "adarsh",
    age: 18
  }

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>Tailwind test</h1>
    <Card username="Adarsh"  btntext="clickMe :)" />
    <Card username="Noooooooo" btntext="Mujhe dbao! :)" />
    </>
  )
}

export default App
