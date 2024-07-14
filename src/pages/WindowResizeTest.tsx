import {useWindowResize} from "../hooks/useWindowResize.ts";

const WindowResizeTest = () => {
    const [width, height] = useWindowResize()
    return (
        <section>
            <div>WindowResizeTest</div>
            <div>
                width: {width}, height: {height}
            </div>
        </section>
    );
};

export default WindowResizeTest;
