import React from 'react';

const ProductDetails = React.memo(({ product }) => {
  console.log('ProductDetails rendered');

  return (
    <div>
      <h2>Product Details</h2>
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
});

export default ProductDetails;
