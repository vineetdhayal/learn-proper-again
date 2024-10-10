import React, { useState } from 'react'
import CustomRadioButton from './CustomRadioButton'

const CustomRadio = () => {
    const [selected, setSelected] = useState('');
    return (
        <div>
            <CustomRadioButton label="option1" onChange={() => setSelected('option1')} value='option1' checked={selected === 'option1'}></CustomRadioButton>
            <CustomRadioButton label="option2" onChange={() => setSelected('option2')} value='option2' checked={selected === 'option2'}></CustomRadioButton>
        </div>
    )
}

export default CustomRadio
