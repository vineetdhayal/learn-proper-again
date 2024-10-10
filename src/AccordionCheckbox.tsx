import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './tictac.css'

const data = [{
    heading: 'first',
    desc: 'first description',
    open: false,
    checked: false,
},
{
    heading: 'second',
    desc: 'first description',
    open: false,
    checked: false
},
{
    heading: 'third',
    desc: 'first description',
    open: false,
    checked: false
}];

const Accordion = ({ heading, data, open, setOpen, checked, setChecked, index, focus }: any) => {
    return <>
        <div id={`accordion-data-${index}-value`} className={focus === index ? 'border' : ''} onClick={() => { setOpen(heading) }}>{heading}</div>
        {open && <div>{data}</div>}
    </>
}

const AccordionCheckbox = () => {
    const [items, setItems] = useState(data);
    const [focus, setFocus] = useState(0);

    const setOpen = (heading: any) => {
        const itemsCopy = [...items];
        itemsCopy.forEach((y) => y.open = false);
        const ind = itemsCopy.findIndex((z) => z.heading === heading);
        itemsCopy[ind].open = !itemsCopy[ind].open;
        setItems(itemsCopy);
    }

    const setChecked = (heading: any, value: any) => {
        const itemsCopy = [...items];
        const ind = itemsCopy.findIndex((z) => z.heading === heading);
        itemsCopy[ind].checked = value;
        setItems(itemsCopy);
    }

    const shouldDisable = useMemo(() => {
        return items.every((item) => item.checked === true);
    }, [items]);

    useEffect(() => {
        const handleKeyDown = (e: any) => {
            switch (e.key) {
                case 'ArrowDown':
                    setFocus(focus + 1);
                    break;
                case 'ArrowUp':
                    setFocus(focus - 1);
                    break;
                case 'Home':
                    setFocus(0);
                    break;
                default:
                    break;
            }
        }
        window.addEventListener('keydown', handleKeyDown);
    }, [])

    return (
        <div>
            {items.map((item, index) => {
                return <Accordion key={index} focus={focus} heading={item.heading} index={index} data={item.desc} open={item.open} setOpen={setOpen} setChecked={setChecked} checked={item.checked} />
            })}
            <button disabled={!shouldDisable}>Submit</button>
        </div>
    )
}

export default AccordionCheckbox
