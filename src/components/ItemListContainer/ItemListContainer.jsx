import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const ItemListContainer = ({greeting}) => {
  return (
    <Container maxWidth="xl" >
        <Box sx={{ alignItems: 'center', textAlign: 'center'}}>
            <h2>{greeting}</h2>
        </Box>
    </Container>
  )
}

export default ItemListContainer