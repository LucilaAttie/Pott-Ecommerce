import { useContext } from "react";
import { CartContext } from "../../context/CarritoContext";
import { CartItem } from "../CartItem/CartItem.jsx"
import { Link } from "react-router-dom";
import "./Cart.css"


const Cart = () => {

    const {cart, clearCart, total, totalQuantity } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div className="carritoVacio">
            <h2>El carrito esta vacío.</h2>
            <Link to="/">Ver todos los productos</Link>
            </div>
        )
    }

    return (

        <div className="cartDetail">
            {cart.map(product => <CartItem key={product.id} {...product} />)}
            <h3>Cantidad de productos: {totalQuantity} </h3>
            <h3>Total: $ {total} </h3>
            <div className="cartButtons">
                <button onClick={() => clearCart()} className="vaciarCarrito">Vaciar carrito</button>
                <Link to="/checkout" className="finalizarCompra">Finalizar compra</Link>

            </div>
            
        
        </div>
    )
}

export default Cart