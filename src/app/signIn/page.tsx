"use client"

import { useSignInWithEmailAndPassword, useSignOut } from "react-firebase-hooks/auth"
import AlertsComponents from "@/components/AlertsComponents";
import HeaderComponent from "@/components/HeaderComponent";
import FormUser from "@/template/formUser";
import { auth } from "@/db/firebase/db";
import { useState } from "react";
import handleAlerts from "@/utils/handleAlerts";
import typesAlerts from "@/types/typesAlerts";

interface Alert {
    text: string;
}

function SingInPage() {
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth)
    const [alerts, setAlerts] = useState<Alert[]>([]);
    const [signOut] = useSignOut(auth)

    const handleSubmit = async ({ email, password }: { email: string, password: string }) => {
        signOut()
        try {
            const res = await signInWithEmailAndPassword(email, password)

            handleAlerts(setAlerts, res === undefined ? typesAlerts.NotExist : typesAlerts.Login)
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
            <AlertsComponents alerts={alerts} />
        </main>
    );
}

export default SingInPage;