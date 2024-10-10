import React, { useEffect, useState } from 'react'

const First = () => {
    const [val, setVal] = useState("");
    useEffect(() => {
        let timer = setTimeout(function() {
            handleChange(val);
        }, 500);
        return () => clearTimeout(timer);
    }, [val]);

    const handleChange = (e: any) => {
        console.log('coming');
        console.log(e);
    };
    const callMe = (e) => {
        setVal(e.target.value);
    }
    return (
        <div className="App">
            <input type="text" value={val} onChange={callMe}></input>
        </div>
    );
}

export default First
