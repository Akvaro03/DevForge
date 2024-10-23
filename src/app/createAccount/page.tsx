"use client";

import AlertsComponents from "@/components/AlertsComponents";
import HeaderComponent from "@/components/HeaderComponent";
import { auth } from "@/db/firebase/db";
import FormUser from "@/template/formUser";
import FormUserData from "@/types/FormUserData";
import typesAlerts from "@/types/typesAlerts";
import handleAlerts from "@/utils/handleAlerts";
import { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
interface Alert {
  text: string;
}

function LoginPage() {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  useEffect(() => {
    if (error?.code === "auth/email-already-in-use") {
      handleAlerts(setAlerts, typesAlerts.emailUsed);
    } else if (error?.code === "auth/invalid-email") {
      handleAlerts(setAlerts, typesAlerts.emailInvalid);
    } else if (error?.code === "auth/weak-password") {
      handleAlerts(setAlerts, typesAlerts.passwordWeak);
    }
  }, [error]);

  const handleSubmit = async ({ email, password }: FormUserData) => {
    try {
      console.log("Intentando crear un usuario...");
      const res = await createUserWithEmailAndPassword(email, password);
      if (res) {
        console.log("Usuario creado con éxito", res);
      }
    } catch (e: any) {
      console.error("Error capturado:", e);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center py-8">
      <HeaderComponent />
      <div className="flex items-center justify-center h-[80vh]">
        <FormUser
          type="createAccount"
          onSubmit={handleSubmit}
          tittleComponent={
            <>
              <span className="important">Create</span> Account
            </>
          }
        />
      </div>
      <AlertsComponents alerts={alerts} />
    </main>
  );
}

export default LoginPage;
