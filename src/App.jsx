import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer'

function App(){

  return (
  
    <div>
      
       <NavBar />
       <main>
       <Routes>
        <Route path='/' element={<ItemListContainer saludar = 'Bienvenidos a mi tienda'/>}/>
        <Route path='/products' element={<ItemListContainer saludar="Productos"/>} />
         <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<Error/>}/>
    
       </Routes>
      </main>
    </div>
   
    
  )
}

export default App
