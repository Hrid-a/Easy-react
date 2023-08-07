import Heading from './Heading';
import Cards from   './Cards';
import { cardlist } from '../utils/data';
import { useState } from 'react';
const Body = ()=> {
    const [cards, setCards] = useState(cardlist)
    const handleClick = ()=> {
        const resCard = cards.filter(card => card.data.data.avgRating > 4)
        setCards(resCard);
    }
    return (
        <section className="section">
            <div className="container">
                <Heading action = {handleClick}/>
                <Cards  cardData = {cards}/>
            </div>
        </section>
    )
}

export default Body;