import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import ItemList from '../ItemList/ItemList';
import { query, where, collection, getDocs, getFirestore } from "firebase/firestore"
import Loader from '../Loader/Loader';

const ItemListContainer = () => {
  const {category} = useParams(); 
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const getProducts = (category) => {
    console.log("Cargando productos from firebase")        
    const db = getFirestore()
    let itemsCollection = []
    
    if(category === undefined) {
      itemsCollection = collection(db, "productos")
    } else {
      itemsCollection = query(collection(db, "productos"), where( "categoria", "==", category ))
    }
    
    getDocs(itemsCollection).then((snapshot) => {      
      const docs = snapshot.docs.map((item) => { 
        let doc = {
          ...item.data(), 
          id: item.id  
        }

        return doc;
      });

      setProductos(docs)
      setLoading(false)

    }).catch((error) => {
        console.log(error);
        setLoading(false)
      }
    )
  }
 

  useEffect(() => {        
    setLoading(true)
    getProducts(category)
  }, [category])

  return (
    <React.Fragment>   
        <Box sx={{ alignItems: 'center', textAlign: 'center'}}>
            <h2>Bienvenido a DJ-Store</h2>
        </Box>    
        { loading ? <Loader /> : <ItemList productos={productos}/> }
    </React.Fragment>
  )
}

export default ItemListContainer