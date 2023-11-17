import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'

const App = () => {

  

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        
        <Routes>
          <Route exact path="/" element={<ItemListContainer greeting={"Bienvenido a DJ-Store"} />} ></Route>                    
          <Route exact path="/category/:category" element={<ItemListContainer greeting={"Bienvenido a DJ-Store"} />} ></Route>                    
          <Route exact path="/product/:id" element={<ItemDetailContainer />} ></Route>
          <Route exact path="/cart" element={<Cart />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App