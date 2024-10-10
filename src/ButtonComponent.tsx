import React from 'react'

const ButtonComponent = (props: any) => {
  return (
    <button className='button-display' onClick={() => props.clickButton(props.children)}>{props.children}</button>
  )
}

export default ButtonComponent
