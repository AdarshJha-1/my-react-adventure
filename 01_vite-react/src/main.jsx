import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// function MyApp() {
//     return(
//         <>
//         <h1>Custom App || Hello</h1>
//         </>
//     )
// }

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit Google'
// }
const reactElement = React.createElement(
    'a',
    {
        href: 'https://google.com',
        target: '_blank'
    },
    'Click me to visit Google'
);

// function CustomRender(reactElement, container){
//     const domELem = document.createElement(reactElement.type);
//     domELem.innerHTML = reactElement.children;
//     for (const prop in reactElement.props) {
//         if(prop == 'children') continue;
//         domELem.setAttribute(prop, reactElement.props[prop]);
//     }
//     container.appendChild(domELem);
// }

// const anotherElement = (
//     <a href='https://google.com' target='_blank'>Click me to visit Google</a>
// )



ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
)
