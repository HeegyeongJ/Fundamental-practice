import {useState} from "react";

export const useToggle = (initialChecked:boolean=false) => {
    const [checked, setChecked] = useState(initialChecked);
    const toggleChecked = () => {
        setChecked(prev => !prev)
    }
    return [checked, toggleChecked];
}
