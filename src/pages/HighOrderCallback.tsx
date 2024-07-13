import {useCallback, useMemo} from "react";
import {makeArray} from "../data/util.ts";
import {randomName} from "../data/chance.ts";

const HighOrderCallback= () => {
    const onClick = useCallback((name:string) => () => alert(`${name} clicked`),[])
    const buttons = useMemo(() => makeArray(3).map(randomName).map((name,index)=> (
        <button key={index} onClick={onClick(name)}>{name}</button>
    )),[])
    return (
        <div>
            <div>HighOrderCallback</div>
            <div>{buttons}</div>
        </div>
    );
};

export default HighOrderCallback;