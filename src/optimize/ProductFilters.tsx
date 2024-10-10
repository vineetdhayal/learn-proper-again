import React, { useCallback } from 'react';

const ProductFilters = React.memo(({ filters, setFilters }) => {
    console.log('ProductFilters rendered');

    // Handle category change
    const handleCategoryChange = (event) => {
        console.log('category changed');
        setFilters((prevFilters) => ({
            ...prevFilters,
            category: event.target.value,
        }));
    };

    // Handle price range change
    const handlePriceChange = useCallback((event) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            priceRange: [0, Number(event.target.value)],
        }));
    }, [setFilters]);

    return (
        <div>
            <h2>Product Filters</h2>
            <label>
                Category:
                <input
                    type="text"
                    value={filters.category}
                    onChange={handleCategoryChange}
                />
            </label>
            <label>
                Max Price:
                <input
                    type="number"
                    value={filters.priceRange[1]}
                    onChange={handlePriceChange}
                />
            </label>
        </div>
    );
});

export default ProductFilters;
