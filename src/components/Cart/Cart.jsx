import { useContext } from "react";
import { CartContext } from "../../context/CarritoContext";
import { CartItem } from "../CartItem/CartItem.jsx"
import { Link } from "react-router-dom";


const Cart = () => {

    const {cart, clearCart, total, totalQuantity } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <>
            <h2>El carrito esta vacio</h2>
            <Link to="/">Ver todos los productos</Link>
            </>
        )
    }

    return (

        <div>
            {cart.map(product => <CartItem key={product.id} {...product} />)}
            <h3>Total: $ {total} </h3>
            <h3>Cantidad de productos: $ {totalQuantity} </h3>
            <button onClick={() => clearCart()} >Vaciar carrito</button>
            <Link to="/checkout">Finalizar compra</Link>
        
        </div>
    )
}

export default Cart