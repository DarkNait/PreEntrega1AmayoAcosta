import {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import ItemDetail from '../ItemDetail/ItemDetail';
import { doc, getDoc, getFirestore } from "firebase/firestore"
import Loader from '../Loader/Loader';

const ItemDetailContainer = () => {
    const {id} = useParams(); 
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const [productExists, setProductoExists] = useState(false)
  
    const getProduct = (id) => {
      console.log("Cargando producto por ID from firebase")        
      const db = getFirestore()
      const item = doc(db, "productos", id)
  
      getDoc(item).then((snapshot) => {      
        if(snapshot.exists()) {
          setProductoExists(true)
          const doc = {...snapshot.data(), id: snapshot.id}
          setProducto(doc)
        }        
        setLoading(false)
  
      }).catch((error) => {
          console.log(error);
          setLoading(false)
        }
      )
    }

    useEffect(()=>{          
      setLoading(true)      
      getProduct(id)  
    }, [])
    
    if(productExists){
      return (      
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'space-evenly' }}>
            { loading ? <Loader /> : <ItemDetail producto={producto}/> }               
        </Box>           
      )
    } else {
      return (
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'space-evenly' }}>    
          { loading ? <Loader /> : 
            <Typography variant="h5" gutterBottom mt={10}>
              No existe el producto solicitado
            </Typography>        
          }
        </Box>  
      )

    }
}

export default ItemDetailContainer