import React from 'react'

const FormCheckbox = ({ checked, label, onChange }: any) => {
    return (
        <div>
            <input type='checkbox' onChange={onChange} checked={checked}>{label}</input>
        </div>
    )
}

export default FormCheckbox
