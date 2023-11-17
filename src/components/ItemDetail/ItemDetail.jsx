import { Card, CardMedia, CardActions, CardContent, Button, Typography } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({producto}) => {
    return (    
        <Card sx={{ minWidth: 400, maxWidth: 400, minHeight: 355 }}>
            <CardMedia
            sx={{ height: 140 }}
            image={`/assets/img/products/producto${producto.id}.jpg`}
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
                <ItemCount />
            </CardActions>
        </Card>
    )
}

export default ItemDetail