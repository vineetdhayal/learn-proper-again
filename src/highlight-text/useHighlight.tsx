import { useEffect, useState } from "react"

export const useSelectionText = (ref: any) => {
    const [data, setData]: any = useState({ showTools: false });

    const onMouseUp = () => {
        console.log(window.getSelection()?.toString());
        const startNode = window.getSelection()?.getRangeAt(0).startContainer;
        const endNode = window.getSelection()?.getRangeAt(0).endContainer;
        const { x, y, width }: any = window.getSelection()?.getRangeAt(0).getBoundingClientRect();
        if (!width) {
            setData({ showTools: false });
            return;
        }
        if (window.getSelection()?.toString().length) {
            setData({ x, y: y - 30, width, showTools: true, selectedtex: window.getSelection()?.toString() })
        }
    }
    useEffect(() => {
        document.addEventListener('mouseup', onMouseUp);
        return () => {
            document.addEventListener('mouseup', onMouseUp);
        }
    }, [])

    return data;
}
