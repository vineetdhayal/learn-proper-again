import React from 'react'

const CustomRadioButton = ({label, onChange, value, checked}: any) => {
  return (
    <div>
      <input type='radio' onChange={onChange} value={value} checked={checked}></input>
      <span>{label}</span>
    </div>
  )
}

export default CustomRadioButton
