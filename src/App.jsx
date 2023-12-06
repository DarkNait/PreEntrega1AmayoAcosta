import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import ShoppingCartContext from './context/ShoppingCartContext';
import { Container } from '@mui/material'

const App = () => {

  

  return (
    <ShoppingCartContext>
      <BrowserRouter>
        <NavBar />
        <Container className="main-container" maxWidth="lg">
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} ></Route>                    
            <Route exact path="/category/:category" element={<ItemListContainer />} ></Route>                    
            <Route exact path="/product/:id" element={<ItemDetailContainer />} ></Route>
            <Route exact path="/cart" element={<Cart />} ></Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </ShoppingCartContext>
  )
}

export default App