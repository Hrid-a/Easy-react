import Heading from './Heading';
import Cards from   './Cards';
import { useEffect, useState } from 'react';
import { useCards } from '../utils/useCards';
const Body = ()=> {
    const [filteredCard, setFilteredCard] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const cards = useCards();

    useEffect(()=> {
        if (cards.length > 0) setFilteredCard(cards);
    }, [cards])

    const handleClick = ()=> {
        const resCard = cards.filter(card => card.info.avgRating > 4)
        setFilteredCard(resCard);
    }

    const handleChange = (event)=> {
        const {value} = event.target;
        setSearchValue(value);
        const filterdData = cards.filter(card => card.info.name.toLowerCase().includes(searchValue.toLocaleLowerCase()));
        setFilteredCard(filterdData);
    }

    
    return cards.length === 0?  <h2>Data is fetching</h2>:(
        <section className="section">
            <div className="container">
                <Heading action = {handleClick} searchValue={searchValue} change = {handleChange}/>
                <Cards  cardData = {filteredCard}/>
            </div>
        </section>
    )
}

export default Body;