import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CartWidget from './CartWidget'

const NavBar = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
    <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                DJ-Store
            </Typography>
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Button
                    id="basic-button"
                    color="secondary"                    
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{
                        color: 'black'
                      }}
                >
                    Categor&iacute;as
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>Sobre Nosotros</MenuItem>
                    <MenuItem onClick={handleClose}>Contacto</MenuItem>
                    <MenuItem onClick={handleClose}>Locales</MenuItem>
                </Menu>
            </Box>                      
            <CartWidget />
        </Toolbar>    
    </AppBar>
  )
}

export default NavBar