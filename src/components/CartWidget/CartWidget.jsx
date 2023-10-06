import { useContext } from "react";
import { CartContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext);
    
     


    return (
        <div className="container-fluid justify-content-end pl-5 cartContainer">
           <Link to="/cart">
           <i className="bi bi-cart px-1 cartIcon" alt="carrito de compras"></i>
           {
            totalQuantity > 0 && <strong> {totalQuantity} </strong>
           }
           </Link>
        </div>
    )
}

export default CartWidget