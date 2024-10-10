import React, { useState } from 'react';
import { authAction } from './auth-store';
import { useDispatch, useSelector } from 'react-redux';

const Auth = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const state = useSelector((state: any) => state);
    
    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(authAction.logIn());
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={value}></input>
                <button>Log In</button>
            </form>
        </div>
    )
}

export default Auth
