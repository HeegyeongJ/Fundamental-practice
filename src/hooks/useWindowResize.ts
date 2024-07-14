import {useEffect, useState} from "react";
import {useEventListener} from "./useEventListener.ts";

export const useWindowResize = () => {
    const [widthHeight, setWidthHeight] = useState([0,0]);

    useEffect(() => {
        setWidthHeight([window.innerWidth, window.innerHeight]);
    },[])

    useEventListener(window, 'resize', () => setWidthHeight([window.innerWidth, window.innerHeight]))

    return widthHeight
}
