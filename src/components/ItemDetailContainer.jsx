import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getOneProduct } from "../mock/asyncService";

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState(null); 
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {

        setLoading(true);

        getOneProduct(Number(id))
            .then(res => setDetail(res))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));

    }, [id]);

    if (loading) {
        return <h2>Cargando producto...</h2>;
    }

    if (!detail) {
        return <h2>Producto no encontrado</h2>;
    }

    return (
        <div>
            <ItemDetail product={detail}/>
        </div>
    );
}

export default ItemDetailContainer;