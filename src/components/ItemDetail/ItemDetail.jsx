import { useContext } from 'react';
import { Card, CardMedia, CardActions, CardContent, Button, Typography } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from "../../context/ShoppingCartContext";

const ItemDetail = ({producto}) => {

    const { addItem } = useContext(CartContext)
    
    // Callback function to handle data received from the child component
    const handleCallback = (quantity) => {        
        addItem(producto, quantity)
    };

    return (          
        <Card sx={{ minWidth: 400, maxWidth: 400, minHeight: 355, marginTop: '24px' }}>
            <CardMedia
            sx={{ height: 140 }}
            image={producto.imagen}
            title={producto.titulo}
            />
            <CardContent>
            <Typography gutterBottom variant="h6" component="div">
                {producto.titulo}
            </Typography>
            <Typography variant="body2" color="text.secondary" >
                {producto.descripcion}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
                ${producto.precio}
            </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-evenly'}}>
                <ItemCount parentCallback={handleCallback}/>
            </CardActions>
        </Card>
    )
}

export default ItemDetail