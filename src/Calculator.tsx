import React, { useEffect, useState } from 'react';
import './calculator.css';
import ButtonComponent from './ButtonComponent';

const Calculator = () => {
    const [result, setResult] = useState(0);
    const [calculation, setCalculation] = useState([0]);
    const [opera, setOpera] = useState(null);
    const [prevResult, setPrevResult]: any = useState(null);

    useEffect(() => {
        setResult(0);
        setCalculation([0]);
    }, []);

    const specialHandle = (value: any) => {
        if (calculation.length === 1 && calculation[calculation.length - 1]) {
            return;
        }
        switch (value) {
            case 'C':
                setResult(0);
                setCalculation([]);
                return;
        }
    };

    const updateCalculation = (value: any) => {
        if (result !== 0) {
            setPrevResult(result);
            setCalculation([...calculation, '$', value]);
        }
        else {
            setCalculation([...calculation, value]);
        }
    }

    const NumberHandle = (value: any) => {
        if (calculation.length === 1 && calculation[0] === 0) {
            setCalculation([value]);
        } else {
            setCalculation([...calculation, value]);
        }
    }

    return (
        <div className='app'>
            <div className='calculation'>
                <div className='show-result'></div>
                <div className='dashed-line'></div>
                <div className='result'>
                    {result === 0 ? 'Start Calculation' : result}
                </div>
            </div>
            <div className='btn-layout'>
                <ButtonComponent clickButton={(value: any) => specialHandle(value)}>C</ButtonComponent>
                <ButtonComponent clickButton={(value: any) => specialHandle(value)}>(❁´◡`❁)</ButtonComponent>
                <ButtonComponent clickButton={(value: any) => specialHandle(value)}>%</ButtonComponent>
                <ButtonComponent clickButton={(value: any) => specialHandle(value)}>/</ButtonComponent>
                <ButtonComponent clickButton={(value: any) => NumberHandle(value)}>7</ButtonComponent>
                <ButtonComponent clickButton={(value: any) => NumberHandle(value)}>8</ButtonComponent>
                <ButtonComponent clickButton={(value: any) => NumberHandle(value)}>9</ButtonComponent>
                <ButtonComponent clickButton={(value: any) => specialHandle(value)}>*</ButtonComponent>
                <ButtonComponent clickButton={(value: any) => NumberHandle(value)}>4</ButtonComponent>
                <ButtonComponent clickButton={(value: any) => NumberHandle(value)}>5</ButtonComponent>
                <ButtonComponent clickButton={(value: any) => NumberHandle(value)}>6</ButtonComponent>
                <ButtonComponent clickButton={(value: any) => specialHandle(value)}>-</ButtonComponent>
                <ButtonComponent clickButton={(value: any) => NumberHandle(value)}>1</ButtonComponent>
                <ButtonComponent clickButton={(value: any) => NumberHandle(value)}>2</ButtonComponent>
                <ButtonComponent clickButton={(value: any) => NumberHandle(value)}>3</ButtonComponent>
                <ButtonComponent clickButton={(value: any) => specialHandle(value)}>+</ButtonComponent>
                <ButtonComponent clickButton={(value: any) => specialHandle(value)}>.</ButtonComponent>
                <ButtonComponent clickButton={(value: any) => NumberHandle(value)}>0</ButtonComponent>
                <ButtonComponent clickButton={(value: any) => specialHandle(value)}>del</ButtonComponent>
                <ButtonComponent clickButton={(value: any) => specialHandle(value)}>=</ButtonComponent>
            </div>
        </div>
    )
}

export default Calculator
