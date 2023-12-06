import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from "../../context/ShoppingCartContext";
import { Box, TextField, Button, List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography, Divider, IconButton } from '@mui/material';
import { Card, CardContent, CardActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom'
import { collection, getFirestore, addDoc } from 'firebase/firestore'
import Loader from '../Loader/Loader';
import { Utils, Validator } from '../../utils/utils'

const Cart = () => {

  const { cart, removeItem, itemsInCart, clear } = useContext(CartContext)
  const [cartStep, setCartStep] = useState(1)
  const [idCompra, setIdCompra] = useState('')
  const [nombre, setNombre] = useState('')
  const [errorNombre, setErrorNombre] = useState(false)  
  const [telefono, setTelefono] = useState('')
  const [errorTelefono, setErrorTelefono] = useState(false)
  const [email, setEmail] = useState('')
  const [errorEmail, setErrorEmail] = useState(false)
  const [loading, setLoading] = useState(false)
  const isCartEmpty = cart.length === 0;
  const db = getFirestore()

  const getTotalCompra = () => {
    let total = 0
    cart.forEach(element => {
      total += Utils.roundTo(element.precio * element.cantidad, 2)
    });

    return total
  }

  const order = {
    cliente: {
      nombre: nombre,
      telefono: telefono,
      email: email
    },
    productos: cart,
    fecha: new Date().toISOString(),
    total: getTotalCompra()
  }

  const orderCollection = collection(db, "ordenes")

  const validateForm = () => {
    let isValidForm = true
    
    setErrorNombre(false)
    setErrorTelefono(false)
    setErrorEmail(false)

    if(Validator.isNullOrEmpty(nombre)){
      setErrorNombre(true)
      isValidForm = false
    }

    if(Validator.isNullOrEmpty(telefono)){
      setErrorTelefono(true)
      isValidForm = false
    }

    if(Validator.isNullOrEmpty(email)){
      setErrorEmail(true)
      isValidForm = false
    }    

    return isValidForm
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()

    if(!validateForm()){
      return false
    }

    setLoading(true)

    addDoc(orderCollection, order).then(({id}) => {
      setIdCompra(id)
      setLoading(false)
      clear()
      setCartStep(3)
    } )
  }

  useEffect(() => {        
    setLoading(false)
  }, [])

  if(!isCartEmpty || cartStep === 3) {
    return (            
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', textAlign: 'center', justifyContent: 'space-evenly' }}>    
          { cartStep != 3 && 
            <Card sx={{ flexGrow: 1, minWidth: '430px', marginTop: '24px' }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'left' }}>
                  Mi Carrito ({itemsInCart()} item)
                </Typography>
                <Divider sx={{ marginBottom: '0.35em' }}/> 
                <List sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}>        
                  {
                    cart.map((p)=>{
                        return (
                          <React.Fragment key={p.id}>
                            <ListItem alignItems="flex-start" 
                              secondaryAction={
                                <IconButton edge="end" aria-label="delete" onClick={ ()=> {removeItem(p.id)} }>
                                  <DeleteIcon />
                                </IconButton>
                              }
                            >
                              <ListItemAvatar>
                                <Avatar alt={p.titulo} src={p.imagen} />
                              </ListItemAvatar>
                              <ListItemText
                                primary={p.titulo}
                                secondary={
                                  <React.Fragment>
                                    <Typography
                                      sx={{ display: 'inline' }}
                                      component="span"
                                      variant="body2"
                                      color="text.primary"
                                    >
                                      Cantidad: {p.cantidad}
                                    </Typography>
                                    {` - Precio: $${p.precio * p.cantidad}` }                          
                                  </React.Fragment>
                                }
                              />
                            </ListItem>
                            <Divider variant="inset" component="li" />     
                          </React.Fragment>          
                        )
                    })
                  }          
                </List> 
              </CardContent>          
            </Card>
          }

          { cartStep == 1 && 
            <Card sx={{ flexGrow: 2, maxWidth: 300, marginTop: '24px', marginLeft: '20px' }}>
              <CardContent sx={{ textAlign: 'left' }} >
                <Typography gutterBottom variant="h5" component="div">
                  Resumen de Compra
                </Typography>
                <Divider sx={{ marginBottom: '0.35em' }}/>   
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>  
                  <Typography gutterBottom variant="h6" component="div">
                    Total
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    ${getTotalCompra()}
                  </Typography>
                </Box>
                <Typography
                  sx={{ display: 'block' }}
                  component="span"
                  variant="caption"
                  color="text.primary"
                >
                  Los precios incluyen IVA. Los costos de envio estan bonificados para compras mayores a $1500000.-
                </Typography>              
              </CardContent>
              <CardActions sx={{ justifyContent: 'center'}}>
                <Button size="small" variant="contained" onClick={()=>{setCartStep(2)}} >Confirmar Compra</Button>          
              </CardActions>            
            </Card> 
          }

          { cartStep == 2 && 
            <Card sx={{ flexGrow: 2, maxWidth: 300, marginTop: '24px', marginLeft: '20px' }}>
              <Box
                component="form"  
                sx={{
                  '& .MuiTextField-root': { mt: 2, ml: 0, width: '100%' },
                }}              
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <CardContent sx={{ textAlign: 'left' }} >
                  <Typography gutterBottom variant="h5" component="div">
                    Datos del Cliente
                  </Typography>
                  <Divider sx={{ marginBottom: '0.35em' }}/>   
                  
                    <TextField
                      required
                      error={errorNombre}
                      id="outlined-required"
                      label="Nombre y Apellido"
                      defaultValue=""
                      size="small"
                      helperText="* Requerido"
                      onChange={(e)=> setNombre(e.target.value)}
                    />
                    <TextField
                      required
                      error={errorTelefono}
                      id="outlined-required"
                      label="Telefono"
                      defaultValue=""
                      size="small"
                      helperText="* Requerido"
                      onChange={(e) => setTelefono(e.target.value)}
                    />
                    <TextField
                      required
                      error={errorEmail}
                      id="outlined-required"
                      label="Email"
                      defaultValue=""
                      size="small"
                      type="email"
                      helperText="* Requerido"
                      onChange={(e) => setEmail(e.target.value)}
                    />                                                
                </CardContent>   
                <CardActions sx={{ justifyContent: 'center'}}>
                  <Button size="small" type="submit" variant="contained" disabled={loading}>Finalizar Compra</Button>          
                </CardActions>          
              </Box> 
            </Card> 
          }

          { cartStep == 3  && 
            <Card sx={{ flexGrow: 2, minWidth: '430px', maxWidth: '500px', marginTop: '24px', marginLeft: '20px' }}>
              <CardContent sx={{ textAlign: 'left' }} >
                <Typography gutterBottom variant="h5" component="div">
                  Compra Finalizada
                </Typography>
                <Divider sx={{ marginBottom: '0.35em' }}/>   
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>  
                  <Typography variant="button" display="block" gutterBottom>  
                    Id de Compra:
                  </Typography> 
                  <Typography variant="button" display="block" gutterBottom>
                    ${idCompra}
                  </Typography> 
                </Box>                
              </CardContent>
              <CardActions sx={{ justifyContent: 'center'}}>
                <Button size="small" variant="contained" component={Link} to={`/`} >Volver al Sitio</Button>          
              </CardActions>            
            </Card> 
          }

          { loading && <Loader /> }                                         
      </Box>     
    )
  } else {
    return (      
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent: 'space-evenly' }}>    
        <Typography variant="h5" gutterBottom mt={10}>
          No hay productos agregados al carrito
        </Typography>
        <br/>
        <Button variant="contained" component={Link} to={`/`}>Volver al Sitio</Button>     
      </Box>      
    )
  }
}

export default Cart