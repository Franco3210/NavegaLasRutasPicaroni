import ItemCount from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";



   const ItemDetail = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const handleAdd = (quantity) => {
    addToCart(product, quantity);
  };



    return(
        <div>
             <img  width={200} height={200} src={product.image} alt={product.name} className="detail-image"/>
            <h2>{product.name}</h2>
            <p>Precio: ${product.price}</p>
            <p>{product.description}</p>

            <ItemCount
                stock={product.stock}
                initial={1}
                onAdd={handleAdd}
            />
        </div>
    )
}

export default ItemDetail;