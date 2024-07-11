import {FC} from "react";

export type ClockProps = {
    today: Date
}
const CopyMe :FC<ClockProps>= ({today}) => {
    return (
        <div>
            Copy Me
        </div>
    );
};

export default CopyMe;