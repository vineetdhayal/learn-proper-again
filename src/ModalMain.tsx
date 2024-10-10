import React, { useState } from 'react'
import ModalDialog from './ModalDialog';
import './loading.css';

const ModalMain = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <button onClick={() => setOpen(!open)}>Show Modal</button>
            <ModalDialog open={open} onClose={() => setOpen(false)}>
                <div className='contents'>
                    <div>Provide your feedback in 3-5 days</div>
                    <input placeholder='john@gmail.com' />
                    <textarea rows={5} placeholder='your message here'></textarea>
                    <button>Submit</button>
                </div>
            </ModalDialog>
        </div>
    )
}

export default ModalMain
