import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"


const ItemDetail = ({ image, name, category, price, stock }) => {
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
                        <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}/>
                    </footer>
                </div>
                

            </div>
           
        </article>
    )
}

export default ItemDetail