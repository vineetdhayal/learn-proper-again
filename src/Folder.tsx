import React, { useState } from 'react'
import Exploler from './Exploler'
import useExploler from './useExploler'

const Folder = () => {
    const fixed =
    {
        id: '1',
        name: 'first',
        isFolder: true,
        data: [{
            id: '2',
            name: 'second',
            isFolder: true,
            data: [{
                id: '3',
                name: 'third',
                isFolder: false,
            }, {
                id: '4',
                name: 'fourth',
                isFolder: false,
            }]
        },
        {
            id: '5',
            name: 'five',
            isFolder: false
        }]
    }

    const [data, setData] = useState(fixed);
    const handleNodeTree = (folderId: any, item: any) => {
        const { insertNode } = useExploler();
        const finaltree = insertNode(data, folderId, item);
        setData(finaltree);
    }

    return (
        <Exploler data={data} handleNodeTree={(id, item)=>handleNodeTree(id, item)} />
    )
}

export default Folder
