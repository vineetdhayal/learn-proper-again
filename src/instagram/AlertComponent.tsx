import React from 'react'

const AlertComponent = (props: any) => {

    const handleClick = () => {
        props.hideError(null);
    }

    return (
        <div>
            <span>{props.errorMessage}</span>
            <button onClick={()=>handleClick}></button>
        </div>
    )
}

export default AlertComponent
