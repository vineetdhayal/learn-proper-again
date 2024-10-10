import React, { useContext } from 'react'
import { myContext } from './FormProvider';
import { useSelector } from 'react-redux';

const DiscountSection = () => {
    console.log('discount section called');
     const discount  = useSelector((state: any)=>state.discount)
    return (
        <div>
            {discount}
        </div>
    )
}

export default DiscountSection
