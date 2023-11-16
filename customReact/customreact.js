
function customRender(reactElement, container) {
    // const element = document.createElement(reactElement.type)
    // element.innerHTML = reactElement.children;
    // element.setAttribute('href', reactElement.props.href);
    // element.setAttribute('target', reactElement.props.target);
    // container.appendChild(element)

    const element = document.createElement(reactElement.type)
    element.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        element.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(element)
}



const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank' 
    },
    children: "Click me to visit Google"
}



const mainContainer = document.getElementById('root');

customRender(reactElement, mainContainer)

// mainContainer.render(
//     // customRender(re)
// )