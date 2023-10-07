import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CarritoContext";
import { useContext } from "react";

const ItemDetail = ({ id, image, name, category, price, stock, quantity }) => {
  const [addQuantity, setAddQuantity] = useState(0);

  const { addProduct } = useContext(CartContext);

  const quantityHandler = (quantity) => {
    setAddQuantity(quantity);

    const item = { id, name, price };
    addProduct(item, quantity);
  };

  return (
    <article className="container">
      <div className="productDetail">
        <img src={image} className="imgProducto" alt={name}></img>

        <div>
          <div>
            <h2> {name} </h2>
            <p className="category">{category}</p>
            <p className="price">${price}</p>
          </div>

          <footer>
            {addQuantity > 0 ? (
              <>
                <Link to="/cart" className="finalizarCompra">
                  Finalizar compra
                </Link>
                <Link to="/" className="seguirComprando">
                  Seguir comprando
                </Link>
              </>
            ) : (
              <ItemCount initial={1} stock={stock} onAdd={quantityHandler} />
            )}
          </footer>
        </div>
      </div>
    </article>
  );
};

export default ItemDetail;
