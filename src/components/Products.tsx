// src/components/Products.tsx
import React from 'react';
import './Products.css'; // Import CSS file for styling

const Products: React.FC = () => {
  const products = [
    { image: 'mc.jpg', price: '$100', description: 'Medical Equipment A' },
    { image: 'mb.jpg', price: '$150', description: 'Medical Equipment B' },
    { image: 'bp.jpg', price: '$80', description: 'Medical Equipment C' },
  ];

  return (
    <div className="products-container"> {/* Apply CSS class */}
      <h2>Products</h2>
      <div className="products-grid"> {/* Apply CSS class */}
        {products.map((product, index) => (
          <div className="product-item" key={index}> {/* Apply CSS class */}
            <img src={product.image} alt={product.description} />
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <button>Add to Cart</button> {/* Add button */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
