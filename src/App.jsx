import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer'
import { CartProvider } from './context/CartContext'
import Error from './components/Error'
import Cart from './components/Cart'
import Checkout from './components/Checkout'


function App(){

  return (
  
    <div>
      <CartProvider>
       <NavBar />
       <main>
       <Routes>
        <Route path='/' element={<ItemListContainer saludar = 'Bienvenidos a mi tienda'/>}/>
        <Route path='/products' element={<ItemListContainer saludar="Productos"/>} />
         <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<Error/>}/>
          <Route path='/cart' element={<Cart />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/checkout" element={<Checkout />} />
       </Routes>
      </main>
      </CartProvider>
    </div>
   
    
  )
}

export default App
