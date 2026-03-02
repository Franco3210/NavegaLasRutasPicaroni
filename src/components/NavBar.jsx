import React, { useState } from 'react'
import './NavBar.css'
import CartWidget from './CartWidget'
import { Link } from "react-router-dom";

const NavBar = () => {

  const [open, setOpen] = useState(false);

  return(
    <nav className="navbar">
      <h1 className="store-title">Kiosco de Franco</h1>

      <ul className="navbar-list">
       
        <li className="navbar-item">
          <Link to="/">Inicio</Link>
        </li>

        <li 
          className="navbar-item dropdown-container"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <span className="products-label">Productos</span>

          {open && (
              <div className="dropdown-menu">
    <Link to="/category/hogar">Hogar</Link>
    <Link to="/category/ropa">Ropa</Link>
    <Link to="/category/mascotas">Mascotas</Link>
    <Link to="/category/celulares">Celulares</Link>
    <Link to="/category/consolas">Consolas</Link>
  </div>
          )}
        </li>

        <div className="divCartWidget">
          <CartWidget/>
        </div>
      </ul>
    </nav>
  )
}

export default NavBar;