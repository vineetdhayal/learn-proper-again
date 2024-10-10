import React, { useEffect, useRef, useState } from 'react'

const OtpInput = () => {
    const [otp, setOtp] = useState(new Array(4).fill(''));
    const inputRef: any = useRef([]);
    const onOtpSubmit = (otp: any) => {
        console.log('login success');
    }

    const handleChange = (e: any, index: any) => {
        console.log(e.target.value);
        const val = e.target.value;
        const newOtp = [...otp];
        newOtp[index] = val.substring(val.length - 1);
        setOtp(newOtp);

        const combinedOtp = newOtp.join('');

        if (combinedOtp.length === 4) {
            onOtpSubmit(combinedOtp)
        }

        console.log(val && index < 3 && inputRef.current[index + 1]);

        if (val && index < 3 && inputRef.current[index + 1]) {
            console.log('logged');
            inputRef.current[index + 1].focus();
        }
    }

    const handleKeyDown = (e: any, index: any) => {
        if (e.key === 'Backspace' && index > 0 && inputRef.current[index - 1]) {
            inputRef.current[index - 1].focus();
        }
    }

    useEffect(() => {
        inputRef.current[0].focus();
    }, []);

    return (
        <div>
            {otp.map((z: any, index: any) => {
                return <input ref={(input) => inputRef.current[index] = input} key={index} value={z} onChange={(e) => handleChange(e, index)} onKeyDown={(e) => handleKeyDown(e, index)}></input>
            })}
        </div>
    )
}

export default OtpInput
