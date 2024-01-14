import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"

function App() {

  

  return (
    <UserContextProvider>
      <h1 className="text-center text-4xl text-red-500">Hello World</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
