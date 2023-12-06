import React from "react"
import {Box, Grid} from '@mui/material'; 
import Item from '../Item/Item';

const ItemList = ({productos}) => {

  return (
    <Box sx={{ alignItems: 'center', textAlign: 'center', marginTop: '24px' }}>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>        
            {
                productos.map((p)=>{
                    return (
                        <Grid item key={p.id} xs={12} sm={3} md={3}>
                            <Item producto={p}/>                
                        </Grid>                
                    )
                })
            }            
        </Grid>
    </Box>
  )
}

export default ItemList