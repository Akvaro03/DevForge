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
                    <label htmlFor="email">Email/Username</label>
                    <TextField
                        id="email"
                        label="Email/Username"
                        type="email"
                        autoComplete="current-password"
                    />
                </div>
                <div className={Style.inputForm}>
                    <label htmlFor="Password">Password</label>
                    <TextField
                        id="Password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
                </div>
                <button type="submit">Sign In</button>
                <article>
                    <Link href={"/recoveryPassword"}>Forgot Password?</Link>
                    <Link href={"/createAccount"}>Create Account</Link>
                </article>
            </form>
        </section>
    );
}

export default SignIn;