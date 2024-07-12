import {useEffect, useRef, useState} from "react";

export const UseInterval = (callback:() => void, duration: number = 1000) => {
    let todayRef = useRef(new Date())

    useEffect(() => {
        const id = setInterval(callback, duration)
        // setInterval(() =>{
        //     todayRef.current = new Date();
        //     console.log('todayRef', todayRef.current);
        // },1000)

        return () => clearInterval(id);

    }, [callback,duration]);
};

export default UseInterval;