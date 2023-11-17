import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../data/asyncMock';

const ItemListContainer = ({greeting}) => {
  const {category} = useParams(); 
  const [productos, setProductos] = useState([])

  //Descomentar estas lineas cuando haya que consumir un recurso externo
  /*
  const getProducts = () => {      
    const response = await fetch('url/products')
    const data = await response.json()

    return data    
  }
  */

  useEffect(()=>{    
    console.log("Cargando productos")
    
    getProducts(category).then((resultado) => {
        console.log(resultado);
        setProductos( resultado )
      }
    ).catch((error) => {
        console.log(error);
      }
    )

  }, [category])

  return (
    <Container maxWidth="lg" >   
        <Box sx={{ alignItems: 'center', textAlign: 'center'}}>
            <h2>{greeting}</h2>
        </Box>    
        <ItemList productos={productos}/>        
    </Container>
  )
}

export default ItemListContainer