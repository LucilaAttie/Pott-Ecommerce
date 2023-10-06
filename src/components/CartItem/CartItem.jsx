import { useContext } from "react";
import { CartContext } from "../../context/CarritoContext";


export const CartItem = ({item, quantity}) => {

  const { removeProduct } = useContext(CartContext);

  return (
    <div>
        <img>{item.image}</img>
        <h4>{item.name}</h4>
        <p>x{quantity}</p>
        <p>$ {item.price}</p>
        <button onClick={() => removeProduct(item.id)} >Eliminar</button>
        <hr/>
    </div>
  )
}

