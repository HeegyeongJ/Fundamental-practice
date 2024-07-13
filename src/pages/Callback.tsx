import {useCallback, useMemo} from "react";
import {makeArray} from "../data/util.ts";
import {randomName} from "../data/chance.ts";

const Callback = () => {
    const onClick = useCallback(() => alert('button clicked'),[])
    const buttons = useMemo(() => makeArray(3).map(randomName).map((name,index)=> (
        <button key={index} onClick={onClick}>{name}</button>
    )),[])
    return (
        <div>
            <div>Callback</div>
            <div>{buttons}</div>
        </div>
    );
};

export default Callback;