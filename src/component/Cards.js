import Card from './Card';

const Cards = ({cardData})=> {
    
    return (
        <div className="cards section">
            {cardData?.map(cardItem => (
            <Card key={cardItem.info.id} res = {cardItem}/>))}
        </div>
    )
}

export default Cards;