// src/context/AppContext.js
import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 150 },
  ]);

  const addToCart = (product) => setCart((prevCart) => [...prevCart, product]);
  const removeFromCart = (productId) => setCart((prevCart) => prevCart.filter((item) => item.id !== productId));

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addProduct = (product) => setProducts((prevProducts) => [...prevProducts, product]);
  const removeProduct = (productId) => setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));

  return (
    <AppContext.Provider value={{ cart, products, addToCart, removeFromCart, addProduct, removeProduct }}>
      {children}
    </AppContext.Provider>
  );
}
