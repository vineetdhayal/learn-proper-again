import React from 'react';
import {FixedSizeList} from 'react-window'

const ReactWindow = () => {
    const data = Array(10000).fill(0);
    const renderRow = (index, style) => {
        return <div>

        </div>
    }
  return (
    <div>
      <FixedSizeList
      height={300}
      width={400}
      itemCount={data.length}
      >
{renderRow}
      </FixedSizeList>
    </div>
  )
}

export default ReactWindow
