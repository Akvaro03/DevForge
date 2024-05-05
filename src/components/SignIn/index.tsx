"use client"

import Link from "next/link";
import Style from "./signIn.module.css"
import { motion } from "framer-motion"
import CustomInput from "../CustomInput";
import { useEffect, useState } from "react";

function SignIn() {
    const [formData, setFormData] = useState<FormData>({
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
        const errors: Partial<FormData> = {};
        if (!formData.email.trim()) {
            errors.email = 'El email es requerido';
        }
        if (!formData.password.trim()) {
            errors.password = 'La contraseña es requerida';
        }
        setFormErrors(errors)
        return Object.keys(errors).length === 0;
    }
    const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Aquí puedes hacer algo con los datos del formulario, como enviarlos a un servidor
        if (validateForm()) {
            const response = await fetch('/api/signIn', {
                method: 'POST',
                body: JSON.stringify(formData),
            })
            console.log(response)
        } else {
            console.log("El formulario esta mal")
        }
    };
    useEffect(() => {
        const initialValues: FormData = {
            email: (document.getElementById('email') as HTMLInputElement)?.value || '',
            password: (document.getElementById('email') as HTMLInputElement)?.value || '',
        };
        setFormData(initialValues);
    }, []);

    return (
        <section className={Style.containerSignIn}>
            <h1 className={Style.tittleForm}><span className={Style.resalt}>Sing</span> in</h1>
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
                <article className={Style.containerBottoms}>
                    <motion.button whileHover={{ scale: .95 }} type="submit">
                        Sign <span className={Style.resalt}>In</span>
                    </motion.button>
                    <div className={Style.containerLinks}>
                        <Link href={"/recoveryPassword"}>Forgot Password?</Link>
                        <Link href={"/createAccount"}>Create Account</Link>
                    </div>
                </article>
            </form>
            <div className="py-5">
                {formErrors ? formErrors.email : ""}
                {formErrors ? formErrors.password : ""}
            </div>
        </section>
    );
}
interface FormData {
    password: string;
    email: string;
}
interface FormErrors {
    password?: string;
    email?: string;
}

const initialFormErrors: FormErrors = {
    password: undefined,
    email: undefined,
};

export default SignIn;