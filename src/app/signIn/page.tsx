"use client"

import HeaderComponent from "@/components/HeaderComponent";
import { auth } from "@/db/firebase/db";
import FormUser from "@/template/formUser";
import { useSignInWithGoogle, useSignInWithEmailAndPassword, useSignOut } from "react-firebase-hooks/auth"
function SingInPage() {
    const [createUserWithGoogle] = useSignInWithGoogle(auth)
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth)
    const [signOut] = useSignOut(auth)
    const handleSubmit = async ({ email, password }: { email: string, password: string }) => {
        signOut()
        try {
            // const res = await createUserWithGoogle()(email, password)
            const res = await signInWithEmailAndPassword(email, password)
            console.log(res)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <main className="flex min-h-screen flex-col items-center p-8">
            <HeaderComponent />
            <div className="flex items-center justify-center h-[80vh]">
                <FormUser
                    type="signIn"
                    onSubmit={handleSubmit}
                    tittleComponent={<><span className="important">Sign</span> In</>}
                />
            </div>
        </main>
    );
}

export default SingInPage;