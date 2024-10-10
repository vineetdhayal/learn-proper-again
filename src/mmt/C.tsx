import React from 'react'

const C = ({data}) => {
    console.log(data, 'c called');
  return (
    <div>
      
    </div>
  )
}

export default React.memo(C)
