"use client"
import { auth } from "@/db/firebase/db";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";
import { useAuthState } from "react-firebase-hooks/auth"

function SecurePage({ children }: { children: ReactNode }) {
    const [User, isLoading] = useAuthState(auth)
    const url = usePathname()
    const router = useRouter()
    if (!isLoading && !User && urlLoggin.includes(url)) {
        router.push("/createAccount")
        return
    }
    if (!isLoading && User && urlLogOut.includes(url)) {
        router.push("/saves")
        return
    }
    return children;
}
const urlLoggin = ["/saves"]
const urlLogOut = ["/signIn", "/createAccount"]
export default SecurePage;