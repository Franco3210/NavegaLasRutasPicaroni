import { Link } from "react-router-dom";

const Item = ({ product }) => {
    return(
        <div>
            <img  width={200} height={200} src={product.image} alt={product.name} className="detail-image"/>
            <h3>{product.name}</h3>
            <p>${product.price}</p>

            <Link to={`/item/${product.id}`}>
                Ver más
            </Link>
        </div>
    )
}

export default Item;