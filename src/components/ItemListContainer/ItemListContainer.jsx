import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

import { collection, getDocs, where, query } from "firebase/firestore";
import {db} from "../../services/config";

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect( () => {
        const myProducts = categoryId ? query(collection(db, "products"), where("category", "==", categoryId)) : collection(db, "products");

        getDocs(myProducts)
        .then(res => {
            const newProducts = res.docs.map( doc => {
                const data = doc.data()
                return { id: doc.id, ...data}
            })
            setProducts(newProducts);
        })
        .catch(error => console.log(error))

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