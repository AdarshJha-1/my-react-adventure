const mainContainer = document.getElementById('root');

/*function customRender(reactElement, container){
    const domELem = document.createElement(reactElement.type);
    domELem.innerHTML = reactElement.children;
    domELem.setAttribute('href', reactElement.props.href);
    domELem.setAttribute('target', reactElement.props.target);
    container.appendChild(domELem);
}*/

function customRender(reactElement, container){
    const domELem = document.createElement(reactElement.type);
    domELem.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if(prop == 'children') continue;
        domELem.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domELem);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}


customRender(reactElement, mainContainer);