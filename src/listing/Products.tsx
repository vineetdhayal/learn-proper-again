import React from 'react'
import Rating from './Rating'

const Products = ({ data }) => {
    return (
        <div className='products'>
            {data.map((product, index) => {
                return <div key={index} className='complete'>
                    <img src={product.image} alt="text"></img >
                    <div>{product.name}</div>
                    <Rating rating={product.rating} />
                </div>
            })}
        </div>
    )
}

export default Products
