import React, { useContext } from 'react'
import DiscountFormComponent from './DiscountFormComponent'
import { myContext } from './FormProvider';

const valueCalculationsSection = () => {
    console.log('value calculations');
    return (
        <div>
            <DiscountFormComponent />
        </div>
    )
}

export default valueCalculationsSection
