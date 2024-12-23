import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth"
import { ReactElement, useEffect, useState } from "react";
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import CustomInput from "@/components/CustomInput";
import FormUserData from "@/types/FormUserData";
import Style from "./FormUser.module.css"
import { motion } from "framer-motion"
import Link from "next/link";
import { auth } from "@/db/firebase/db";
function FormUser({ type, onSubmit, tittleComponent }: { type: "signIn" | "createAccount", onSubmit: (a: FormUserData) => void, tittleComponent: ReactElement }) {
    const [signInGithub] = useSignInWithGithub(auth)
    const [signInGoogle] = useSignInWithGoogle(auth)

    const [formData, setFormData] = useState<FormUserData>({
        email: '',
        password: '',
    });
    const [formErrors, setFormErrors] = useState<Partial<FormErrors>>(initialFormErrors);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
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
        setFormErrors(errors)
        return Object.keys(errors).length === 0;
    }
    const handleForm = (e: React.FormEvent) => {
        e.preventDefault()
        if (validateForm()) {
            onSubmit(formData)
        } else {
            return
        }
    }
    useEffect(() => {
        const initialValues: FormUserData = {
            email: (document.getElementById('email') as HTMLInputElement)?.value || '',
            password: (document.getElementById('email') as HTMLInputElement)?.value || ''
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
                    <label htmlFor="email">Email <span className={Style.important}>/</span> Username</label>
                    <CustomInput autoComplete="home email" defaultValue={formData.email} onChange={handleInputChange} name="email" id="email" type="email" />
                </div>
                <div className={Style.inputForm}>
                    <label htmlFor="password">Pass<span className={Style.important}>word</span></label>
                    <CustomInput autoComplete="new-password" defaultValue={formData.password} onChange={handleInputChange} name="password" id="password" type="password" />
                </div>
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
                    <div className={Style.iconsLogin}>
                        <GoogleIcon onClick={() => signInGoogle()} />
                        <GitHubIcon onClick={() => signInGithub()} />
                    </div>
                </article>
            </form>
            <div className="p-8 text-center">
                <h4 className="text-center">
                    {formErrors ? formErrors.password : ""}
                </h4>
                <h4 className="text-center">
                    {formErrors ? formErrors.email : ""}
                </h4>
            </div>
        </motion.section>)
}
interface FormErrors {
    password?: string;
    email?: string;
}

const initialFormErrors: FormErrors = {
    password: undefined,
    email: undefined
};

export default FormUser;