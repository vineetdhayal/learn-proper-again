import React, { useId, useState } from 'react';

function getTabListItemId(tabsId, value) {
    return tabsId + '-tab-' + value;
}

const Tabs = ({ items }) => {
    const tabId = useId();
    const [value, setValue] = useState(items[0].value);

    return (
        <>
            <div className='tabs-list' onKeyDown={(event)=>{
              switch(event.key) {
                case 'ArrowLeft':
                    const ind = items.findIndex((x)=>value===x.value);

              }
            }}>
              
            </div>
            <div>
                {items.map(({ label, value: itemValue }) => {
                    const isActive = value === itemValue;
                    return <button
                        id={getTabListItemId(tabId, itemValue)}
                        className={isActive}>
                    </button>
                })}
            </div>
        </>
    )
}

export default Tabs
