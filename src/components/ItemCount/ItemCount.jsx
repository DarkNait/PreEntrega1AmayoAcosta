import "./ItemCount.css";
import React, { useState, forwardRef } from 'react'
import { Button, Box, Snackbar, ButtonGroup, Slide } from '@mui/material' 
import MuiAlert from '@mui/material/Alert';


const ItemCount = () => {
    const Toast = forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const SlideTransition = (props) => {
        return <Slide {...props} direction="left" />;
    }

    const [count, setcount] = useState(1)

    const [snackbarState, setSnackbarState] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'right',
        transition: SlideTransition
      });

    const { vertical, horizontal, open, transition } = snackbarState;

    const snackbarHandleClose = () => {
        setSnackbarState({ ...snackbarState, open: false });
    };

    const decrement = () => {
        if(count <= 1){
            return;
        }

        setcount(count - 1);
    }

    const increment = () => {
        //TODO: validar que no pueda ingresar mas cantidad de lo que hay en stock
        if(count == 10){
            return;
        }

        setcount(count + 1);
    }

    const addToCart = () => {
        //TODO validar que no pueda ingresar mas cantidad de lo que hay en stock
        setSnackbarState({ ...snackbarState, open: true });
    }

    return (        
        <React.Fragment>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                TransitionComponent={transition}
                onClose={snackbarHandleClose}
                key={vertical + horizontal}
            >
                <Toast onClose={snackbarHandleClose} severity="success" sx={{ width: '100%' }}>
                    {`Agregada/s ${count} unidad/es al carrito.`}
                </Toast>
            </Snackbar>
            <Box sx={{  paddingBottom: '5px' }}>
                <ButtonGroup aria-label="medium button group">
                    <Button key="-" onClick={ decrement } >-</Button>
                    <Button key="count" disabled={true} sx={{ color: 'text.primary !important' }}>{count}</Button>
                    <Button key="+" onClick={ increment }>+</Button>
                </ButtonGroup>            
            </Box>
            <Box sx={{ paddingBottom: '5px' }}>
                <Button variant="contained" onClick={addToCart}>Agregar al carrito</Button>
            </Box>
        </React.Fragment>
    )
}

export default ItemCount