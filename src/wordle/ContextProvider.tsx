import React, { createContext, useState } from 'react'
import { boardDefault } from './words';
export const context = createContext(null);

const ContextProvider = ({ children }: any) => {
    const [board, setBoard] = useState(boardDefault);
    const [currAttmpt, setMe] = useState({ attemptval: 0, letterPos: 0 });

    const setCurrAtmpt = ({ attemptval, letterPos }) => {
        setMe({ attemptval, letterPos })
    }

    return (
        <context.Provider value={{ board, setBoard, currAttmpt, setCurrAtmpt } as any}>{children}</context.Provider>
    )
}

export default ContextProvider
