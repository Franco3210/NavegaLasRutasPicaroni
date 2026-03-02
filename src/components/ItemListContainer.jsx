import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";
import Item from "./Item";
import "./ItemListContainer.css";
import Loader from "./Loader";

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {

        const fetchProducts = async () => {

            setLoading(true);

            try {
                let q;

                if (categoryId) {
                    q = query(
                        collection(db, "items"),
                        where("category", "==", categoryId)
                    );
                } else {
                    q = collection(db, "items");
                }

                const querySnapshot = await getDocs(q);

                const productsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                setProducts(productsData);

            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();

    }, [categoryId]);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="products-container">
            {products.map(prod => (
                <Item key={prod.id} product={prod} />
            ))}
        </div>
    );
};

export default ItemListContainer;
