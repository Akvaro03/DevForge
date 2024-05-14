"use client"
import { GlobalContextProvider } from "@/app/context/store";
import { auth } from "@/db/firebase/db";
import { usePathname, useRouter } from "next/navigation";
import { ReactElement, ReactNode, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth"

function SecurePage({ children }: { children: ReactNode | ReactElement }) {
    const [User, isLoading] = useAuthState(auth)
    const url = usePathname()
    const router = useRouter()
    useEffect(() => {
        if (!isLoading && !User && urlLoggin.includes(url)) {
            router.push("/createAccount");
        } else if (!isLoading && User && urlLogOut.includes(url)) {
            router.push("/saves");
        }
    }, [isLoading, User, url, router]);


    return children;

}

const urlLoggin = ["/saves"]
const urlLogOut = ["/signIn", "/createAccount"]
export default SecurePage;