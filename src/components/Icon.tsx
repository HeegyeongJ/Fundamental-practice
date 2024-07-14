import {CSSProperties, FC} from "react";

export type IconProps = {
    name:string
    style?: CSSProperties
}

const Icon: FC<IconProps> = ({name, style,...props}) => {

    return (
        <span className='material-icons' style={style} {...props}>
            {name}
        </span>
    );
};

export default Icon;