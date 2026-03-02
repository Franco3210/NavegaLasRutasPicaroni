import { useContext } from "react";
import {useCart, CartContext } from "../context/CartContext";
import "./Cart.css";
import { Link } from "react-router-dom";



const Cart = () => {
 const { cart, removeFromCart } = useContext(CartContext);

  if (cart.length === 0) {
    return <h2>El carrito está vacío</h2>;
  }

  return (
    <div className="cart-container">
  <h1 className="cart-title">🛒 Carrito</h1>

  {cart.map(item => (
    <div key={item.id} className="cart-item">
      <h3 className="item-title">{item.title}</h3>
      <p>Precio unitario: ${item.price}</p>
      <p>Cantidad: {item.quantity}</p>
      <p className="item-subtotal">
        Subtotal: ${item.price * item.quantity}
      </p>
      <button onClick={() => removeFromCart(item.id)}>
  Eliminar
</button>
    <Link to="/checkout">
  <button>Finalizar compra</button>
</Link>
    </div>
    
  ))}
</div>
  );
};

export default Cart;