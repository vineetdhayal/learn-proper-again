import React, { useRef } from 'react';

const isEqual = (dep1: any, dep2: any) => {
    if (dep1 === null) {
        return false;
    }
    if (dep1.length !== dep2.length) {
        return false;
    }
    for (let i = 0; i < dep1.length; i++) {
        if (dep1[i] !== dep2[i]) {
            return false;
        }
    }

    return true;
}

const UseCustomMemo = (cb: any, deps: any) => {
    const memRef: any = useRef();
    if (!memRef.current || !isEqual(memRef.current.deps, deps)) {
        memRef.current = {
            value: cb(),
            deps
        }
    }

    return memRef.current.value;
}

export default UseCustomMemo
