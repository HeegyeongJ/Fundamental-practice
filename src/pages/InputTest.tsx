import {useCallback, useState} from "react";

const InputTest = () => {
    const [value, setValue] = useState('');
    const [checked, setChecked] = useState(false);

    const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => () =>{
        setValue(event.target.value);
    }


    return (
        <section>
            <div>InputTest</div>
            <div>
                <input type={"text"} value={value} onChange={onChangeValue}/>
                <input type={"checkbox" } checked={checked} onChange={(e)=>setChecked(e.target.checked)}/>
            </div>
        </section>
    );
};

export default InputTest;
