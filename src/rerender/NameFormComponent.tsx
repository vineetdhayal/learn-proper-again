import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { onNameChange } from './reducerSlice';

const NameFormComponent = () => {
    // const { onCountryChange, onDiscountChange, state, onSave, onNameChange }: any = useContext(myContext);

    console.log('name form');
    const dispatch: any = useDispatch();
    const name = useSelector((state: any) => state.name);
    return (
        <div>
            type your name here
            <input value={name} onChange={(e) => dispatch(onNameChange(e.target.value))}></input>
        </div>
    )
}

export default NameFormComponent
