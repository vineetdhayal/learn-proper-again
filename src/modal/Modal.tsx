import React, { useState } from 'react'
import MyModal from './MyModal';

const Modal = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <button onClick={(() => setShow(true))}>modal</button>
            {<MyModal show={show} onClose={() => setShow(false)} />}
        </div>
    )
}

export default Modal
