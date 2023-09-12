import Item from '../Item/Item.js'
import './ItemList.css'



const ItemList = ({ products }) => {
    return(
        <div className="contenedorProductos">
            {products.map((prod) => <Item key={prod.id} {...prod} />)}
        </div>
           
    )
}

export default ItemList