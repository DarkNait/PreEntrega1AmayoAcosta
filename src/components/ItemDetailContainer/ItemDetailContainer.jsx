import {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProduct } from '../../data/asyncMock';

const ItemDetailContainer = () => {
    const {id} = useParams(); 
    const [producto, setProducto] = useState([])

    //Descomentar estas lineas cuando haya que consumir un recurso externo
    /*
    const getProducts = () => {      
      const response = await fetch('url/products')
      const data = await response.json()
  
      return data    
    }
    */
  
    useEffect(()=>{    
      console.log("Cargando producto")
      
      getProduct(id).then((resultado) => {
          console.log(resultado);
          setProducto( resultado )
        }
      ).catch((error) => {
          console.log(error);
        }
      )
  
    }, [])
  
    return (
      <Container maxWidth="lg" >   
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'space-evenly', paddingTop: '24px' }}>
            <ItemDetail producto={producto}/>
        </Box>           
      </Container>
    )
}

export default ItemDetailContainer