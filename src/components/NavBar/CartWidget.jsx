import React from 'react'
import { useContext, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from "../../context/ShoppingCartContext";

const CartWidget = () => {

  const { itemsInCart } = useContext(CartContext)

  return (    
    <IconButton
        size="large"
        aria-label="Cart of current user"
        aria-haspopup="true"
        color="inherit"
    >
        <Badge badgeContent={itemsInCart()} color="primary">
            <ShoppingCartIcon color="action"/>
        </Badge>
        
    </IconButton>
  )
}

export default CartWidget