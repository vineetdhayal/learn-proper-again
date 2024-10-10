import React, { useState } from 'react'
import OtpInput from './OtpInput';

const PhoneOtpLogin = () => {
    const [phoneNo, setPhoneNo] = useState('');
    const [showotp, setShowOtp] = useState(false);

    const onSubmit = (e: any) => {
        e.preventDefault();
        const regex = /[0-9]/;
        if (phoneNo.length !== 10 && regex.test(phoneNo)) {
            return;
        }
        setShowOtp(true);
    }

    return (
        <div>
            {!showotp && <form onSubmit={(e) => onSubmit(e)}>
                <input type='text' onChange={(e) => setPhoneNo(e.target.value)}></input>
                <button>Submit</button>
            </form>}
            {showotp && <OtpInput />}
        </div>
    )
}

export default PhoneOtpLogin
