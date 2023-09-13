import { useSelector } from "react-redux/es/hooks/useSelector";
import { RES_URL } from "../utils/cons";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { clearAll, removeItem } from "../redux/cartSlice";
import {FaTrash} from "react-icons/fa";

const Cart = ()=> {
    const cartItems = useSelector(store=> store.cart.items);
    const dispatch = useDispatch();
    const clearCart = ()=> {
        dispatch(clearAll());
    }
    const removeFromCart = (id)=> {
        dispatch(removeItem(id));
    }
    return (<section className="cart">
            <button type="button" className="btn" onClick={clearCart}>empty</button>
        {cartItems.map(item => {
            const {id, name, cloudinaryImageId, costForTwo} = item;
            return (
                <article key={id} className="cart-item">
                    <h3>{name}</h3>
                    <p>{costForTwo}</p>
                    <div className="cart-img">
                        <img src={RES_URL + cloudinaryImageId} alt= {name}/>
                        <FaTrash className="icon" onClick={()=> removeFromCart(id)}/>
                    </div>
                    <div className="amount">
                        <span>+</span>
                        <span>1</span>
                        <span>-</span>
                    </div>
                </article>
            )
        })}
    </section>)
}

export default Cart;