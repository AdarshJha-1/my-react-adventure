import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return(
    <div>
      <h1>Custom App 1!</h1>
    </div>
  )
}

const ReactElement = {
  type: 'a',
  props: {
      href: "https://google.com",
      target: '_blank' 
  },
  children: "Click me to visit Google"
}
const ReactElement1 = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)
const ReactElement2 = React.createElement(
  'a',
  {
    href: "https://google.com",
    target: '_blank' 
  },
  'click me to visit Google'
)
  


ReactDOM.createRoot(document.getElementById('root')).render(

    <App/>
    // <MyApp/>
    // MyApp()
    // ReactElement2
    // ReactElement

);
