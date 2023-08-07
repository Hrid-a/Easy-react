import Card from './Card';

const Cards = ({cardData})=> {
    
    return (
        <div className="cards section">
            {cardData?.map(cardItem => (<Card key={cardItem.data.data.id} cardList = {cardItem}/>))}
        </div>
    )
}

export default Cards;