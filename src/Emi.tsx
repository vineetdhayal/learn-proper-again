import React, { useState } from 'react';
import './grid.css'

const Emi = () => {
    const [cost, setCost] = useState(0);
    const [interest, setInterest] = useState(10);
    const [fee, setFee] = useState(1);
    const [downpayment, setDownPayment] = useState(0);
    const [tenure, setTenure] = useState(12);
    const [emi, setEmi] = useState(0);

    const updatePayment = (e: any) => { 
        console.log(e.target);
        setDownPayment(e.target.value) };
    const updateEmi = () => { };
    const calculateEmi = (data: any) => { return 0 };

    return (
        <div className='emi'>
            <span style={{ fontSize: 30, marginTop: 10 }}>Emi Calculator</span>
            <span>Total Cost Of Asset</span>
            <input type='number' value={cost} onChange={(e) => setCost(+e.target.value)}></input>
            <span>Interest Rate</span>
            <input type='number' value={cost} onChange={(e) => setCost(+e.target.value)}></input>
            <span>Processing Fee</span>
            <input type='number' value={cost} onChange={(e) => setCost(+e.target.value)}></input>
            <span>Down Payment</span>
            <div>
                <input type='range' min={0} max={cost} value={downpayment} style={{width: '100%'}} onChange={(e) => updatePayment(e)}></input>
                <span className='labels'>
                    <span>0</span>
                    <span>{downpayment}</span>
                    <span>100%</span>
                </span>
            </div>
            <span>Loan Per Month</span>
            <input type='range' min={calculateEmi(cost)} max={calculateEmi(0)} value={emi} onChange={updateEmi}></input>
        </div>
    )
}

export default Emi
