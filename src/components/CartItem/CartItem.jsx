import { useContext } from "react";
import { CartContext } from "../../context/CarritoContext";
import "./CartItem.css"


export const CartItem = ({item, quantity}) => {

  const { removeProduct } = useContext(CartContext);

  return (
    <div className="cartProducts">
        <h4 className="prodName">{item.name}</h4>
        <p>x{quantity}</p>
        <p>$ {item.price}</p>
        <button onClick={() => removeProduct(item.id)} >Eliminar</button>
        
    </div>
  )
}

