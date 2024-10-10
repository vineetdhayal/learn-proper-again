import React, { useEffect, useId, useRef } from 'react'
import { createPortal } from 'react-dom';
import './loading.css';

const useOnKeyDown = (key: any, fn: any) => {
    useEffect(() => {
        function onKeyDown(e: any) {
            if (e.key === key) {
                fn();
            }
        }
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
        }
    }, [fn])
}

const useOnClickOutside = (elRef: any, fn: any) => {
    useEffect(() => {
        function onClickOut(e: any) {
            if (!(elRef.current as any).contains(e.target.value)) {
                fn();
            }
        }
        document.addEventListener('mousedown', onClickOut);
        return () => { }
    }, [])
}

const getTaggableEls = (elRef: any) => {
    console.log(elRef);
    if (elRef.current === null) {
        return [];
    }
    return elRef.current.querySelectorAll('input textarea button select');
}

const useFocusOnFirstTaggableEl = (elRef: any) => {
    useEffect(() => {
        const els = getTaggableEls(elRef);
        if (els.length > 0) {
            els[0].focus();
        }
    }, [])
}

const useFocusTrap = (elRef: any) => {
    function callMe(event: any) {
        const els = getTaggableEls(elRef);
        const first = els[0];
        const last = els[els.length - 1];
        if (event.key === 'shiftkey') {
            if (document.activeElement === first && last) {
                last.focus();
            }
        }
        else if (event.key === 'tab') {
            if (document.activeElement === last && first) {
                first.focus();
            }
        }
    }
    useOnKeyDown('Tab', callMe);
}

const ModalDialog = ({ open, onClose, children }: any) => {
    const titleId = useId();
    const contentId = useId();
    const dialogRef: any = useRef();

    useOnKeyDown('Escape', onClose);
    useOnClickOutside(dialogRef, onClose);
    // useFocusOnFirstTaggableEl(dialogRef);
    // useFocusTrap(dialogRef);

    if (!open) {
        return null;
    }

    return (
        createPortal(<div className='loading-overlay'>
            <div className='modal' aria-describedby={titleId} aria-labelledby={contentId} ref={dialogRef}>
                <div>{children}</div>
                <button onClick={onClose}>Close</button>
            </div>
        </div>, document.body)
    )
}

export default ModalDialog
