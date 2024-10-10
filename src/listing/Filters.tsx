import React, { useEffect, useState } from 'react';
import './styles.css'

const Filters = React.memo(({ data, applyFilters }) => {
    const [colors, setColors] = useState([]);
    const [curr, setCurr] = useState(colors);
    const [from, setFrom] = useState(0);
    const [search, setSearch] = useState('');
    const [selected, setSelected]: any = useState([]);
    const [to, setTo] = useState(1000);

    useEffect(() => {
        setColors([...new Set(data.map((q) => q.color))]);
        console.log(colors);
        setCurr(colors);
    }, [data]);

    useEffect(() => {
        setCurr(colors.filter((color: any) => color.indexOf(search) !== -1))
    }, [search])

    const handleChange = (e, color) => {
        if (!selected.includes(color)) {
            setSelected([...selected, color])
        }
        else {
            const find = selected.findIndex((colorr) => colorr === color);
            let selectedCopy = [...selected];
            console.log(selectedCopy);
            selectedCopy.splice(find, 1);
            setSelected(selectedCopy);
        }
    }

    useEffect(() => {
        applyFilters(from, to, selected)
    }, [from, to, selected])

    return (
        <div className='filters'>
            <div>
                Price Range
                <div className='flexInput'>
                    <input value={from} type='text' onChange={(e) => setFrom(e.target.value)}></input>
                    <input value={to} type='text' onChange={(e) => setTo(e.target.value)}></input>
                </div>
                <input type='text' onChange={(e) => setSearch(e.target.value)}></input>
                <div className='colors'>
                    Color
                    {curr.map((color, index) => {
                        return <div key={index}>
                            <input type='checkbox' value={color} onChange={(e) => handleChange(e, color)} checked={selected.includes(color)}></input>
                            <label>{color}</label>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
})

export default Filters
