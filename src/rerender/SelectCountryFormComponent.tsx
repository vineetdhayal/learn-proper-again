import React, { useContext } from 'react'
import { myContext } from './FormProvider';
import { useDispatch } from 'react-redux';
import { onCountryChange } from './reducerSlice';

const SelectCountryFormComponent = () => {
    console.log('select country from component');
    const dispatch: any = useDispatch();
    return (
        <div>
            <input onChange={(e) => dispatch(onCountryChange(e.target.value))}></input>
        </div>
    )
}

export default SelectCountryFormComponent
