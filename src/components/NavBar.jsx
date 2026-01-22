import React from 'react'
import './NavBar.css'
import CartWidget from './CartWidget'

const NavBar = () => {
    return(
        <nav className="navbar">
    <h1>Mi Tienda</h1>
      <ul className="navbar-list">
       
        <li className="navbar-item"><a href="#home">Inicio</a></li>
        <li className="navbar-item"><a href="#about">Acerca</a></li>
        <li className="navbar-item"><a href="#services">Servicios</a></li>
        <li className="navbar-item"><a href="#contact">Contacto</a></li>
       <div className="divCartWidget">
        <CartWidget/>
        </div>
      </ul>
    </nav>
         
     
    )
}

export default NavBar