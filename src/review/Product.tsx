import React, { useEffect, useState } from 'react';
import './styles.css'

const Product = ({ selected, setSelected }: any) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await fetch('https://dummyjson.com/products');
            const dataa = await res.json();
            console.log(dataa);
            setData(dataa.products.slice(0, 20));
            setLoading(false);
        } catch (err) {
            console.error('api errored out. Please retry later')
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            {loading && <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Data Loading Please Wait</div>}
            {!loading && <div>
                <div className={`${selected ? 'left-page' : ''}`}>
                    <ul>
                        {data.map((x: any, index: any) => {
                            return <li key={index}>
                                {x.title}
                                {x.description}
                            </li>
                        })}
                    </ul>
                    <select onChange={(e) => {
                        setSelected(e.target.value);
                    }}>
                        {data.map((x: any, index: any) => {
                            return <option key={index}>
                                {x.title}
                            </option>
                        })}
                    </select>
                </div>
            </div>}
        </>
    )
}

export default Product
