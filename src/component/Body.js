import Heading from './Heading';
import Cards from   './Cards';
import { cardlist } from '../utils/data';
import { useEffect, useState } from 'react';
const Body = ()=> {
    const [cards, setCards] = useState([]);
    useEffect(()=> {
        fetchData()
    }, [])

    const fetchData = async ()=> {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const resData = await response.json();
        setCards(resData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const handleClick = ()=> {
        const resCard = cards.filter(card => card.info.avgRating > 4)
        setCards(resCard);
    }
    return cards?.length === 0? <h2>Data is fetching</h2>:(
        <section className="section">
            <div className="container">
                <Heading action = {handleClick}/>
                <Cards  cardData = {cards}/>
            </div>
        </section>
    )
}

export default Body;