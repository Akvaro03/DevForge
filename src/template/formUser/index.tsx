import CustomInput from "@/components/CustomInput";
import { ReactElement, useEffect, useState } from "react";
import Style from "./FormUser.module.css"
import { motion } from "framer-motion"
import Link from "next/link";
import FormUserData from "@/types/FormUserData";


function FormUser({ type, onSubmit, tittleComponent }: { type: "signIn" | "createAccount", onSubmit: (a: FormUserData) => void, tittleComponent: ReactElement }) {
    const [formData, setFormData] = useState<FormUserData>({
        email: '',
        password: '',
    });
    const [formErrors, setFormErrors] = useState<Partial<FormErrors>>(initialFormErrors);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // Si hay un error en el campo, borrarlo al empezar a escribir nuevamente
        if (formErrors.hasOwnProperty(name)) {
            setFormErrors({ ...formErrors, [name]: "" });
        }
    };
    const validateForm = () => {
        const errors: Partial<FormUserData> = {};
        if (!formData.email.trim()) {
            errors.email = 'The Email is required';
        }
        if (!formData.password.trim()) {
            errors.password = 'The Password is required';
        }
        if (type === "createAccount" && !formData.username?.trim()) {
            errors.username = 'The Username is required';
        }
        setFormErrors(errors)
        return Object.keys(errors).length === 0;
    }
    const handleForm = (e: React.FormEvent) => {
        e.preventDefault()
        if (validateForm()) {
            onSubmit(formData)
        } else {
            console.log("El formulario esta mal")
        }
    }
    useEffect(() => {
        const initialValues: FormUserData = {
            email: (document.getElementById('email') as HTMLInputElement)?.value || '',
            password: (document.getElementById('email') as HTMLInputElement)?.value || '',
            username: (document.getElementById('username') as HTMLInputElement)?.value || ''
        };
        setFormData(initialValues);
    }, []);
    return (
        <motion.section
            initial={{ translateX: -1300 }}
            animate={{ translateX: 0 }}
            className={Style.containerSignIn}>
            <h1 className={Style.tittleForm}>{tittleComponent}</h1>
            <h4 className={Style.subtittleForm}>Enter your credentials to access your account.</h4>
            <form className={Style.formData} onSubmit={handleForm}>
                <div className={Style.inputForm}>
                    <label htmlFor="email">Email <span className={Style.resalt}>/</span> Username</label>
                    <CustomInput defaultValue={formData.email} onChange={handleInputChange} name="email" id="email" type="email" />
                </div>
                <div className={Style.inputForm}>
                    <label htmlFor="password">Pass<span className={Style.resalt}>word</span></label>
                    <CustomInput defaultValue={formData.password} onChange={handleInputChange} name="password" id="password" type="password" />
                </div>
                {type === "createAccount" && (
                    <div className={Style.inputForm}>
                        <label htmlFor="password"><span className={Style.resalt}>User</span>name</label>
                        <CustomInput defaultValue={formData.username} onChange={handleInputChange} name="username" id="username" type="text" />
                    </div>
                )}
                <article className={Style.containerBottoms}>
                    <motion.button whileHover={{ scale: .95 }} type="submit">
                        {tittleComponent}
                    </motion.button>
                    {type === "signIn" && (
                        <div className={Style.containerLinks}>
                            <Link href={"/recoveryPassword"}>Forgot Password?</Link>
                            <Link href={"/createAccount"}>Create Account</Link>
                        </div>
                    )}
                </article>
            </form>
            <div className="p-8 text-center">
                <h4 className="text-center">
                    {formErrors ? formErrors.password : ""}
                </h4>
                <h4 className="text-center">
                    {formErrors ? formErrors.email : ""}
                </h4>
                <h4 className="text-center">
                    {formErrors ? formErrors.username : ""}
                </h4>
            </div>
        </motion.section>)
}
interface FormErrors {
    password?: string;
    email?: string;
    username?: string;
}

const initialFormErrors: FormErrors = {
    password: undefined,
    email: undefined,
    username: undefined,
};

export default FormUser;