import React, { useCallback, useEffect, useState } from 'react'
import B from './B';
import C from './C';

const A = () => {
    const [value, setValue] = useState('hello');
    const [data, setData] = useState('hello');
    const z = useCallback(()=> {
        console.log('iam called');
    },[])
  return (
    <div>
      <B value={value}></B>
      <button onClick={() => setValue('hero')}>fedc</button>
      <C data={z()}></C>
    </div>
  )
}

export default A
