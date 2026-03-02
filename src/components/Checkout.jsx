import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../service/firebase";
import { useCart } from "../context/CartContext";
import { useContext } from "react";

const Checkout = () => {

    const { cart, totalPrice, clearCart } = useCart();

    const [buyer, setBuyer] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const [orderId, setOrderId] = useState(null);

    const handleChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const order = {
            buyer,
            items: cart,
            total: totalPrice(),
            date: serverTimestamp()
        };

        try {
            const docRef = await addDoc(collection(db, "orders"), order);
            setOrderId(docRef.id);
            clearCart();
        } catch (error) {
            console.log("Error creando la orden:", error);
        }
    };

    if (orderId) {
        return (
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <h2>🎉 ¡Compra realizada con éxito!</h2>
                <p>Tu número de orden es:</p>
                <h3 style={{ color: "#D4AF37" }}>{orderId}</h3>
            </div>
        );
    }

    return (
        <div style={{ maxWidth: "400px", margin: "auto" }}>
            <h2>Finalizar compra</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Teléfono"
                    onChange={handleChange}
                    required
                />

                <button type="submit">
                    Generar orden
                </button>
            </form>
        </div>
    );
};

export default Checkout;