// src/pages/ProductListing.js
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

function ProductListing() {
  const { products, addToCart } = useContext(AppContext);

  return (
    <div>
      <h1>Product Listing</h1>
      {products.map((product) => (
        <div key={product.id} className="product">
          <Link to={`/products/${product.id}`}>{product.name}</Link>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductListing;
