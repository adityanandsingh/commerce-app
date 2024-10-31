// src/components/Navbar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {
  const { cart } = useContext(AppContext);
  const cartCount = cart.length;

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>E-Commerce</Link>
        </Typography>
        <Link to="/products" style={{ color: 'inherit', textDecoration: 'none', marginRight: '20px' }}>Products</Link>
        <Link to="/admin" style={{ color: 'inherit', textDecoration: 'none', marginRight: '20px' }}>Admin Dashboard</Link>
        <IconButton color="inherit" component={Link} to="/cart">
          <Badge badgeContent={cartCount} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
