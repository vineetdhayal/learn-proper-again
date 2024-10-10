import React from 'react';
import { createPortal } from 'react-dom';

const MyModal = ({ children, onClose }: any) => {
    return createPortal(
        <>
            <div style={{ position: 'fixed', top: 0, left: 0, bottom: 0, right: 0, backgroundColor: 'white', zIndex: 1000 }}></div>
            <div onClick={() => onClose} style={{ position: 'fixed', zIndex: 1000, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'green' }}>
                {children}
                fancy content
            </div>
        </>,
        document.getElementById('portal') as any
    )
}

export default MyModal
