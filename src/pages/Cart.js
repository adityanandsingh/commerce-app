// src/pages/Cart.js
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Card, CardContent, Typography, Button } from '@mui/material';

function Cart() {
  const { cart, removeFromCart } = useContext(AppContext);
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <Typography variant="h4" gutterBottom>Shopping Cart</Typography>
      {cart.length > 0 ? (
        <>
          {cart.map((item, index) => (
            <Card key={index} sx={{ maxWidth: 345, marginBottom: 2 }}>
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body2" color="text.secondary">Price: ${item.price}</Typography>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </CardContent>
            </Card>
          ))}
          <Typography variant="h5" gutterBottom>Total Price: ${totalPrice}</Typography>
        </>
      ) : (
        <Typography variant="h6">Your cart is empty</Typography>
      )}
    </div>
  );
}

export default Cart;
