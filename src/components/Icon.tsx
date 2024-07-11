import {CSSProperties, FC} from "react";

export type IconProps = {
    name:string
    style?: CSSProperties
}

const Icon: FC<IconProps> = ({name, style}) => {

    return (
        <span className='material-icons' style={style}>
            {name}
        </span>
    );
};

export default Icon;