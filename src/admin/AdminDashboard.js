// src/admin/AdminDashboard.js
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';

function AdminDashboard() {
  const { products, addProduct, removeProduct } = useContext(AppContext);
  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');

  const handleAddProduct = () => {
    if (newProductName && newProductPrice) {
      const newProduct = {
        id: products.length + 1,
        name: newProductName,
        price: parseFloat(newProductPrice),
      };
      addProduct(newProduct);
      setNewProductName('');
      setNewProductPrice('');
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>
      <Typography variant="h6" gutterBottom>Product Management</Typography>
      <TextField
        label="Product Name"
        variant="outlined"
        value={newProductName}
        onChange={(e) => setNewProductName(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Product Price"
        variant="outlined"
        type="number"
        value={newProductPrice}
        onChange={(e) => setNewProductPrice(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleAddProduct}>
        Add Product
      </Button>
      <Typography variant="h6" gutterBottom sx={{ marginTop: 4 }}>Existing Products</Typography>
      {products.map((product) => (
        <Card key={product.id} sx={{ maxWidth: 345, marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h6">{product.name}</Typography>
            <Typography variant="body2" color="text.secondary">Price: ${product.price}</Typography>
            <Button
              variant="outlined"
              color="error"
              onClick={() => removeProduct(product.id)}
            >
              Remove
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default AdminDashboard;
