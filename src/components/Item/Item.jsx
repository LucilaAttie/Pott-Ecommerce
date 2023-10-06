import { Link } from "react-router-dom"
import './Item.css'

const Item = ({ name, price, image, id }) => {
    return (
        <article className="cardProducto" >
            <img src={image} className="imgProducto" alt={name}></img>
            <div className="productoInfo">
                <h2 className="productoTitulo">{name}</h2>
                <p className="productoPrecio">${price}</p>
            </div>
            
             
            <Link className="verDetalle" to={`./item/${id}`} >Ver detalle</Link>
            
        </article>
    )
}

export default Item