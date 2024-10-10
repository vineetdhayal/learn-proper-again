import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const { id } = useParams();
    const [details, setDetails]: any = useState([]);

    const fetchData = async() => {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setDetails(data);
    }

    useEffect(() => {
      fetchData();
    }, []);

    return (
        <div>
           <img src={details.thumbnail}></img>
           <span>{details.title}</span>
           <p>{details.description}</p>
        </div>
    )
}

export default ProductDetails
