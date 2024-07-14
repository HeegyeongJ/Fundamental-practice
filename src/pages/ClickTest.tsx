import {useRef} from "react";

const ClickTest = () => {
    const inputRef = useRef()
    const onClick = () => {
        inputRef.current?.click()
    }
    return (
        <section>
            <div>ClickTest</div>
            <div>
                <button onClick={onClick}>Click Me</button>
                <input type={'file'} ref={inputRef} style={{display: 'none'}} />
            </div>
        </section>
    );
};

export default ClickTest;
