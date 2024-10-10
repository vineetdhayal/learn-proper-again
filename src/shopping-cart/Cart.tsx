import React from 'react';
import Auth from './Auth';
import { useSelector } from 'react-redux';

const Cart = () => {
    const isLoggedIn = useSelector((state: any) => state.isLoggedIn);
    return (
        <div>
            {isLoggedIn ? 'logged' : 'logged out'}
            {!isLoggedIn && <Auth />}
        </div>
    )
}

export default Cart
