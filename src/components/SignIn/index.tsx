"use client"

import Link from "next/link";
import Style from "./signIn.module.css"
import { TextField } from "@mui/material";

function SignIn() {
    const handleForm = (data: React.FormEvent) => {
        data.preventDefault()
        console.log(data.target)
    }
    return (
        <section className={Style.containerSignIn}>
            <h1 className={Style.tittleForm}>Sing in</h1>
            <h4 className={Style.subtittleForm}>Enter your credentials to access your account.</h4>
            <form className={Style.formData} onSubmit={handleForm}>
                <div className={Style.inputForm}>
                    <label htmlFor="email">Email <span className={Style.resalt}>/</span> Username</label>
                    <TextField
                        id="email"
                        type="email"
                        autoComplete="current-password"
                        color="warning"
                    />
                </div>
                <div className={Style.inputForm}>
                    <label htmlFor="Password">Password</label>
                    <TextField
                        id="Password"
                        type="password"
                        autoComplete="current-password"
                        color="warning"
                    />
                </div>
                <article className={Style.containerBottoms}>
                    <button type="submit">Sign In</button>
                    <div>
                        <Link href={"/recoveryPassword"}>Forgot Password?</Link>
                        <Link href={"/createAccount"}>Create Account</Link>
                    </div>
                </article>
            </form>
        </section>
    );
}

export default SignIn;