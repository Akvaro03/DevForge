import { FC, InputHTMLAttributes } from "react";
import Style from "./CustomInput.module.css"

const CustomInput: FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...rest }) => {

    // function CustomInput({ id, type }: { id?: string, type?: string }) {
    return (
        <input {...rest} className={Style.input} />
    );
}

export default CustomInput;