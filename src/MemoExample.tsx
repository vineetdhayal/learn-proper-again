import React, { useEffect, useMemo, useState } from 'react'

const MemoExample = () => {
  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(0);
  let [square, setSquare] = useState(0);

  const handleFirst = () => {
    console.log('first')
    setCount1(count1 + 1);
  };

  const handleSecond = () => {
    console.log('second');
    setCount2(count2 + 1);
  };

  const data = useMemo(() => {
    for (let i = 0; i < count1 * count1; i++) {
      console.log('hello');
    }
  }, [count1]);

  useEffect(() => {
    console.log('first called');
  }, [count1]);

  useEffect(() => {
    console.log('second called');
  }, [count2]);

  return (
    <div>
      {square}
      <button onClick={handleFirst}>First</button>
      <button onClick={handleSecond}>Second</button>
      {count1}  {count2}
    </div>
  )
}

export default MemoExample
