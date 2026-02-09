import ItemCount from "./ItemCount";
import Item from "./Item";
import { getProducts } from "../mock/asyncService";
import { useState, useEffect } from "react";
import "./ItemListContainer.css";

const ItemListContainer = ({ saludar }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then(res => setProducts(res))
            .catch(err => console.log(err));
    }, []);

    return(
       <div className="products-container">
    {products.map(prod => (
        <Item key={prod.id} product={prod}/>
    ))}
    </div>
    )
}

export default ItemListContainer;