import React, { useState, useRef, useEffect } from 'react';
import './stepper.css';

const steps = [
    {
        name: 'Customer Info',
        Component: () => <div>Provide your custom info</div>
    },
    {
        name: 'Shipping Info',
        Component: () => <div>Provide your custom info</div>
    },
    {
        name: 'payment',
        Component: () => <div>Provide your custom info</div>
    },
    {
        name: 'Delivered',
        Component: () => <div>Provide your custom info</div>
    }
]

const Stepper = () => {
    const [currStep, setStep] = useState(0);
    const [completed, setCOmpleted] = useState(false);
    const [margin, setmargin] = useState({ marginLeft: 0, marginRight: 0 })
    const stepref: any = useRef([]);

    useEffect(() => {
        const setWidth = () => {
            console.log(stepref.current[0].offsetWidth);
            console.log(stepref.current[3].offsetWidth);
            setmargin({ marginLeft: stepref.current[0].offsetWidth, marginRight: stepref.current[3].offsetWidth })
        }
        document.addEventListener('resize', () => {
            setWidth();
        });

        setWidth();

        return () => document.removeEventListener('resize', () => {
            setWidth();
        });
    }, []);

    const calculateWidth = () => {
        if (currStep === 0) {
            return 100
        }
        return (((currStep) * 100)) + 100
    }

    return (
        <div className='stepper'>
            {steps.map(({ name, Component }, index) => {
                return (<div ref={(el) => stepref.current[index] = el} className={`step ${currStep >= index + 1 ? 'completed' : ''} ${currStep === index ? 'active' : ''}`} key={name}>
                    <div className='step-number'>{currStep >= index + 1 ? '✅' : index}</div>
                    <div className='step-name'>{name}</div>
                </div>)
            })}
            <div className={`progress-bar`} style={{
                width: calculateWidth(),
                marginLeft: margin.marginLeft,
                marginRight: margin.marginRight
            }}>
                \</div>
            <button onClick={() => {
                if (currStep !== steps.length) { setStep(currStep + 1) }
            }}>
                {currStep === steps.length ? 'Finish' : 'Next'}
            </button>
        </div>
    )
}

export default Stepper
