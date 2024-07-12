import {FC} from "react";

export type ClockProps = {
    today: Date
}
const Clock :FC<ClockProps>= ({today}) => {
    return (
        <div >
            <div>{today.toLocaleTimeString()}</div>
            <div>{today.toLocaleDateString()}</div>
        </div>
    );
};

export default Clock;