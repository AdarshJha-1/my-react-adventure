import './App.css';
import useFetch from './useFetch';

const App = () => {

    const [data] = useFetch('https://jsonplaceholder.typicode.com/todos')

    return (
        <>
            {data && data.map((item) => {
                <h1>{item.title}</h1>
            })}
        </>
    )
}

export default App;