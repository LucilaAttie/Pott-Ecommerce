import { useEffect, useState } from "react"
import { getProductsByCategory, getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return (
        <div className="mt-5">
            <h2
             className="text-center fw-light">{props.greeting}</h2>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer