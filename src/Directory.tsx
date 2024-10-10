import React, { useState } from 'react';

const Directory = ({ node }: any) => {
    const [expand, setExpand] = useState(false);
    console.log(node);
    if (node.type === 'file') {
        return <div>{node.name}</div>
    }
    else {
        return (<><div onClick={() => setExpand(!expand)}>{node.name}</div>
            {expand && node.children.map((z: any, index: any) => {
                return <Directory key={index} node={z}></Directory>
            })}</>)
    }
}

export default Directory
