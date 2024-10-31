// src/pages/ProductDetails.js
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

function ProductDetails() {
  const { id } = useParams();
  const { products, addToCart } = useContext(AppContext);
  const product = products.find((prod) => prod.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <p>Product description and details go here.</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductDetails;
