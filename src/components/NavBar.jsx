import React from 'react'
import './NavBar.css'
import CartWidget from './CartWidget'
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav className="navbar">
    <h1 className="store-title">Kiosco de Franco</h1>
      <ul className="navbar-list">
       
       <li className="navbar-item"><Link to="/">Inicio</Link></li>
        <li className="navbar-item"><Link to="/products">Productos</Link></li>
        
       <div className="divCartWidget">
        <CartWidget/>
        </div>
      </ul>
    </nav>
         
     
    )
}

export default NavBar