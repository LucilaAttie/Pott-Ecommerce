import { useState } from "react";
import './ItemCount.css'

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity-1)
        }
    }

    return (
        <div className="countContainer">
            <div className="itemCount">
                <button onClick={decrement}>-</button>
                <h4 >{quantity}</h4>
                <button onClick={increment}>+</button>
            </div>
            <div>
                <button className="addToCart" onClick={() => onAdd(quantity)} disabled={!stock} >Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount