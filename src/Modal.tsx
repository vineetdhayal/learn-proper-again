import React, { useState } from 'react'
import MyModal from './MyModal';

const Modal = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div style={{ position: 'relative', zIndex: 1 }}>
                <button onClick={() => setOpen(true)}> open modal</button>
                <MyModal onClose={() => setOpen(false)}>modal content</MyModal>
            </div>
            <div style={{ position: 'relative', zIndex: 2, backgroundColor: 'black' }}>other content</div>
        </>
    )
}

export default Modal
