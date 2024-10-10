import React, { useState, useRef } from 'react';
import './grid.css';

const grid = [1, 1, 1, 1, 0, 0, 1, 1, 1];

const GridLights = () => {
  const [order, setOrder]: any = useState([]);
  const boxref: any = useRef([]);

  const deactivateCells = () => {
    setInterval(() => {
      boxref.current[order[0]].style.backgroundColor = 'white';
      setOrder((order: any) => order.slice(1));
    }, 1000)
    console.log('final order', order);
  };

  const onClick = (index: any) => {
    console.log(order, index);
    console.log(boxref.current);
    boxref.current[index].style.backgroundColor = 'green';

    setOrder([...order, index]);
    console.log(order);
    if (order.length === grid.flat().filter(Boolean).length - 1) {
      console.log('fefer');
      deactivateCells();
    }
  };

  const exist = (index, j) => {
    console.log(order);
    if (order.length) {
      for (let i = 0; i < order.length; i++) {
        if (order[i].index === index && order[i].j === j) {
          return true;
        }
      }
      return false;
    }
    return false;
  }

  return (
    <div className='main'>
      {grid.map((c, index) => {
        if (c === 1) {
          return c === 1 && <div ref={(el) => boxref.current[index] = el} onClick={() => onClick(index)}></div>
        }
        else {
          return <span></span>
        }
      }
      )}
    </div>
  )
}

export default GridLights
