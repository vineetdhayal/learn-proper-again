import React from 'react'
import './grid.css';
import ReactHtmlParser from 'react-html-parser';

const Highlight = () => {
    const str: any = 'hello me dog found a dog here dog was stupid';
    let newStr = '';
    const search = 'dog';
    let newArr = new Array(str.length).fill(0);
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === search[0].toLowerCase() && search.toLowerCase() === str.substring(i, i + search.length).toLowerCase()) {
            newArr.fill(1, i, i + search.length);
            i = i + search.length;
        }
    }

    for (let k = 0; k < newArr.length; k++) {
        const start = newArr[k] === 1 && newArr[k - 1] !== 1;
        const end = newArr[k] === 1 && newArr[k + 1] !== 1;
        if (start) {
            newStr += '<span class=red>'
        }
        newStr += str[k];
        if (end) {
            newStr += '</span>'
        }
        console.log(newStr);
    }
    console.log(newArr);
    const obj = { __html: str }
    return (
        <div dangerouslySetInnerHTML={{ __html: newStr }}>
        </div>
    )
}

export default Highlight;
