import React from 'react';

const ProductList = React.memo(({ products, onSelectProduct }) => {
    console.log('ProductList rendered');

    return (
        <div>
            <h2>Product List</h2>
            {products.map(product => (
                <div key={product.id} onClick={() => onSelectProduct(product)}>
                    <h3>{product.name}</h3>
                    <p>Price: ${product.price}</p>
                </div>
            ))}
        </div>
    );
});

export default ProductList;
