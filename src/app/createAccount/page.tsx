"use client"

import HeaderComponent from "@/components/HeaderComponent";
import { auth } from "@/db/firebase/db";
import FormUser from "@/template/formUser";
import FormUserData from "@/types/FormUserData";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

function LoginPage() {
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth)

    const handleSubmit = async ({ email, password }: FormUserData) => {
        try {
            const res = await createUserWithEmailAndPassword(email, password);
            console.log(res)
            console.log("entro")
        } catch (e) {
            console.error(e)
            console.log("salio")
        }
    }

    return (
        <main className="flex min-h-screen flex-col items-center p-8">
            <HeaderComponent />
            <div className="flex items-center justify-center h-[80vh]">
                <FormUser
                    type="createAccount"
                    onSubmit={handleSubmit}
                    tittleComponent={<><span className="important">Create</span> Account</>}
                />
            </div>
        </main>
    );
}

export default LoginPage;