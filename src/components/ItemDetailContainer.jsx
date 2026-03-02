import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase"; 
import Loader from "./Loader";


const ItemDetailContainer = () => {

    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {

        const fetchProduct = async () => {
            setLoading(true);

            try {
                const docRef = doc(db, "items", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setDetail({ id: docSnap.id, ...docSnap.data() });
                } else {
                    setDetail(null);
                }

            } catch (error) {
                console.log("Error trayendo producto:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();

    }, [id]);

    if (loading) {
        return <Loader />;
    }

    if (!detail) {
        return <h2>Producto no encontrado</h2>;
    }

    return (
        <div>
            <ItemDetail product={detail} />
        </div>
    );
}

export default ItemDetailContainer;