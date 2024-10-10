import React, { useState, useEffect, useMemo, useCallback } from 'react';
import ProductList from './ProductList.tsx';
import ProductDetails from './ProductDetails.tsx';
import ProductFilters from './ProductFilters.tsx';

const ParentComponent = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [filters, setFilters] = useState({ category: '', priceRange: [0, 1000] });
    const [loading, setLoading] = useState(false);

    // Fetch product data from an API
    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            setProducts(data.products);
            setLoading(false);
        };
        fetchProducts();
    }, []);

    // Memoized filtered products to prevent re-rendering on every state change
    const filteredProducts = useMemo(() => {
        console.log('Filtering products');
        return products.filter(product => {
            const { category, priceRange } = filters;
            return (
                (category === '' || product.category === category) &&
                product.price >= priceRange[0] &&
                product.price <= priceRange[1]
            );
        });
    }, [products, filters]);

    // Memoized callback to handle product selection
    const handleSelectProduct = useCallback((product) => {
        setSelectedProduct(product);
    }, []);

    return (
        <div>
            <h1>Product Dashboard</h1>
            {loading ? <p>Loading products...</p> : null}

            {/* Product Filters */}
            <ProductFilters filters={filters} setFilters={setFilters} />

            {/* Product List */}
            <ProductList products={filteredProducts} onSelectProduct={handleSelectProduct} />

            {/* Product Details */}
            {selectedProduct && <ProductDetails product={selectedProduct} />}
        </div>
    );
};

export default ParentComponent;
