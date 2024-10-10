import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

const Buttons = () => {
    const [goto, setgoto] = useState(false);
    if (goto) {
        return <Navigate to={'/firstt'} />
    }

    return (
        <div>
            <button onClick={() => setgoto(true)}>First</button>
            <button onClick={() => setgoto(true)}>second</button>
        </div>
    )
}

export default Buttons
