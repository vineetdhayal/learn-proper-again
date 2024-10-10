import React, { useEffect, useRef, useState } from 'react';

const DEFAULT_ITEMS_LEFT = [
    'HTML',
    'JavaScript',
    'CSS',
    'TypeScript',
];
const DEFAULT_ITEMS_RIGHT = [
    'React',
    'Angular',
    'Vue',
    'Svelte',
];

function generateMap(items: any) {
    return new Map(items.map((item: any) => [item, false]));
}

function determineListSelectionState(items) {
    const selectedItems = countSelectedItems(items);
    if (selectedItems.length === 0) {
        return 'none';
    }
    if (selectedItems < items.length) {
        return 'partial';
    }
    return 'all';
}

function countSelectedItems(items) {
    return items.values().filter(Boolean).length;
}

const BulkCheckbox = ({ disabled, onChange, state, disabled, selectedCount, totalCount }) => {
    const ref: any = useRef(null);
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        switch (state) {
            case 'none':
             setChecked(false);
             ref.current.indeterminate = false;
             break;
            case 'partial':
             setChecked(false);
             ref.current.indeterminate = true;
            break;
        }
    }, [state]);

    return <div>
        <input type='checkbox' ref={ref} disabled={disabled} ></input>
    </div>
}

const ItemList = ({ items, setItems }) => {
    const [newItem, setNewItem] = useState('');
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                const myItem = newItem.trim();
                const newItems = new Map(items);
                newItems.set(myItem, false);
                setItems(newItems);
                setNewItem('');
            }}>
                <input value={newItem} type='text' onChange={(event) => setNewItem(event.target.value)}></input>
            </form>

        </div>
    )
}

const TransferList = () => {
    const [itemsLeft, setItemsLeft] = useState(generateMap(DEFAULT_ITEMS_LEFT));
    const [itemsRight, setItemsRight] = useState(generateMap(DEFAULT_ITEMS_RIGHT));

    return (
        <div>
            <ItemList items={itemsLeft} setItems={setItemsLeft} />
        </div>
    )
}

export default TransferList
