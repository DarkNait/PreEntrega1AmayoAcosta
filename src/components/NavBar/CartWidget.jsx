import React from 'react'
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
  return (
    <IconButton
        size="large"
        aria-label="Cart of current user"
        aria-haspopup="true"
        color="inherit"
    >
        <Badge badgeContent={5} color="primary">
            <ShoppingCartIcon color="action"/>
        </Badge>
        
    </IconButton>
  )
}

export default CartWidget