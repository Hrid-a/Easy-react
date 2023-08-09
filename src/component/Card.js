import { Link } from 'react-router-dom';
import {RES_URL} from '../utils/cons';
const Card = ({res})=> {
    const {id,name, cuisines, costForTwo, deliveryTime, avgRating, cloudinaryImageId} = res?.info
    return (
        <article className="card">
            <Link to={"restaurants/" + id} className='card-anchor'>
              <div className="card-image">
                <img 
                  src={RES_URL + cloudinaryImageId}
                  alt={name}
                />
              </div>
              <div className="card-body">
                <h2>{name}</h2>
                <p>{cuisines.map((item,index) =>(<span key={index}>{item}</span>))}</p>
              <ul >
                <li>{avgRating}star</li>
                <li>{deliveryTime}</li>
                <li>{costForTwo}</li>
              </ul>
              </div>
            </Link>
        </article>
    )
}
export default Card;