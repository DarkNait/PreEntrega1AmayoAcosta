import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import brandLogo from '../../assets/img/djstore_logo.png';

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
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'left', textAlign: 'center' }} >
                <Box sx={{ display: 'flex' }} component={Link} to={"/"}>
                    <img src={brandLogo} alt="DJ Store" style={{width: '80px'}} />
                </Box>
            </Box>
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
                    <MenuItem onClick={handleClose} component={Link} to={"/"}>Todas</MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to={"/category/A"}>Auriculares</MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to={"/category/B"}>Bandejas Giradiscos</MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to={"/category/C"}>Mixers</MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to={"/category/D"}>Reproductores</MenuItem>
                </Menu>
            </Box> 
            <Link to="/cart">                                
                <CartWidget />
            </Link>                     
        </Toolbar>    
    </AppBar>
  )
}

export default NavBar