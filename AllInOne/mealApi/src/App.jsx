import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then(res => {
        setItems(res.data.meals);
      }).catch((e) => {
        console.log(e);
      })
  }, [])

    const ItemList = items.map(({strMeal, strMealThumb, idMeal}) => {
      return (
        <section className='card'>
          <img src={strMealThumb} />
          <section className='content'>
            <p>{strMeal}</p>
            <p>#{idMeal}</p>
          </section>
        </section>
      )
    })

    return(
      <div className='list-container'>
        {ItemList}
      </div>
    )

  }

export default App
