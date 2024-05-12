import { FC, InputHTMLAttributes } from "react";
import Style from "./CustomInput.module.css"

const CustomInput: FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...rest }) => {
    return (
        <input {...rest} className={Style.input} />
    );
}

export default CustomInput;