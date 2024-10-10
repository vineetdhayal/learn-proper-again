import React from 'react';
import { List } from 'react-virtualized';
import { loremIpsum } from 'lorem-ipsum';


const ReactVirtualized = () => {
    const rowCount = 5000;
    const listHeight = 400;
    const rowHeight = 50;
    const rowWidth = 700;
    return (
        <div>
         {Array(rowCount).fill(0).map((val, index) => {
            return {
                id: index,
                name: 'John Doe',
                image: 'http://via.placeholder.com/40',
                text: loremIpsum({
                  count: 1,
                  units: 'sentences',
                  sentenceLowerBound: 4,
                  sentenceUpperBound: 8
                })
              }
         })}
        </div>
    )
}

export default ReactVirtualized
