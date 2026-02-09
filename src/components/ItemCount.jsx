import { useState } from "react";

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {

    const [count, setCount] = useState(initial);

    const sumar = () => {
        if(count < stock){
            setCount(count + 1);
        }
    };

    const restar = () => {
        if(count > 1){
            setCount(count - 1);
        }
    };

    return(
        <div>

            <button onClick={restar}>-</button>

            <span style={{margin: "0 10px"}}>
                {count}
            </span>

            <button onClick={sumar}>+</button>

            <br /><br />

            <button onClick={() => onAdd(count)}>
                Agregar al carrito
            </button>

        </div>
    )
}

export default ItemCount;

