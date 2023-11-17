import { Card, CardMedia, CardActions, CardContent, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom'

const Item = ({producto}) => {

  return (    
    <Card sx={{ maxWidth: 300, minHeight: 355 }}>
        <CardMedia
        sx={{ height: 140 }}
        image={`/assets/img/products/producto${producto.id}.jpg`}
        title={producto.titulo}
        />
        <CardContent>
        <Typography gutterBottom variant="h6" component="div">
            {producto.titulo}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
            ${producto.precio}
        </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center'}}>
            <Button size="small" component={Link} to={`/product/${producto.id}`}>Ver Detalle</Button>
        </CardActions>
    </Card>
  )
}

export default Item