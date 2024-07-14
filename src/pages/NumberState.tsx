import {useCallback, useState} from "react";
import Icon from "../components/Icon.tsx";

const NumberState = () => {
    const [count, setCount] = useState(0);
    const increment = useCallback(() => {
        setCount(count=>count + 1);
    },[])
    const decrement = useCallback(() => {
        setCount(count => count - 1);
    },[])

    return (
        <div>
            <div>NumberState</div>
            <div>
                <Icon name={'add'} onClick={increment} />
                <div>{count}</div>
                <Icon name={'remove'} onClick={decrement} />
            </div>
        </div>
    );
};

export default NumberState;