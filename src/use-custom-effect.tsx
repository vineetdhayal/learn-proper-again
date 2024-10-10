import React, { useRef } from 'react'

const useCustomEffect = (effect: any, deps: any) => {
    const isFirstRender = useRef(true);
    const prevDeps = useRef([]);
    if (isFirstRender.current) {
        const cleanup = effect();
        isFirstRender.current = false;
        return () => {
            if(cleanup && typeof cleanup === 'function') {
                cleanup();
            }
        };
    }

    const depsChanged = deps ? JSON.stringify(deps) !== JSON.stringify(prevDeps.current) : true;
    if (depsChanged) {
        effect();
    }
}

export default useCustomEffect;
