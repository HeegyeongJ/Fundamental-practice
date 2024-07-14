import {useCallback, useState} from "react";
import {useToggle} from "../hooks/useToggle.ts";

const ShowHideModal = () => {
    const [open, toggleOpen] = useToggle(false);

    return (
        <section>
            <div>ShowHideModal</div>
            <div>
                <button onClick={() => toggleOpen()}>open modal</button>
            </div>
            {/*<Modal />*/}
        </section>
    );
};

export default ShowHideModal;
