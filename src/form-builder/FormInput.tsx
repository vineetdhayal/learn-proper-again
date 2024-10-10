import React from 'react'

const FormInput = ({ onChange, value }: any) => {
    return (
        <div>
            <input value={value} onChange={onChange}></input>
        </div>
    )
}

export default FormInput
