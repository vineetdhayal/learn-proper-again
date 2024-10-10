import React, { useEffect, useRef } from 'react';
import './styles.css';
import { createPortal } from 'react-dom';

const useCloseHandle = (ref, onClose) => {
    useEffect(() => {
        const handleClick = (e: any) => {
            if (!ref.current.contains(e.target)) {
                onClose();
            }
        }
        document.addEventListener('click', handleClick);

        return () => document.removeEventListener('click', handleClick);
    }, [onClose])
}

const MyModal = ({ show, onClose }: any) => {
    const modalRef: any = useRef(null);
    useCloseHandle(modalRef, onClose);
    return (
        createPortal(
            show && <div className='modal' ref={modalRef}>
                <div className='modal-wrapper'>
                    <div className='modal-content'>
                        <span onClick={onClose}>❌</span>
                        <span>modal content</span>
                    </div>
                </div>
            </div>, document.body)
    )
}

export default MyModal
