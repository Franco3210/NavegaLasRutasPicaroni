import { NavLink } from "react-router-dom";

function CartWidget() {
  return (
    <NavLink to="/cart">
      🛒
    </NavLink>
  );
}

export default CartWidget;