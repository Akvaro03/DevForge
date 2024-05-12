"use client"
import { auth } from "@/db/firebase/db";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth"

function SecurePage({ children }: { children: ReactNode }) {
    const [User, isLoading] = useAuthState(auth)
    const url = usePathname()
    const router = useRouter()
    useEffect(() => {
        if (!isLoading && !User && urlLoggin.includes(url)) {
            router.push("/createAccount");
        } else if (!isLoading && User && urlLogOut.includes(url)) {
            router.push("/saves");
        }
    }, [isLoading, url]);

    return children;
}
const urlLoggin = ["/saves"]
const urlLogOut = ["/signIn", "/createAccount"]
export default SecurePage;