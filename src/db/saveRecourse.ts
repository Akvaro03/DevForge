"use server"
import userType from "@/types/userType";
import { redirect } from "next/navigation";

function saveRecourse(nameRecourse: string) {

    const { user }: { user: userType | null } = { user: null }

    if (!user) {
        redirect("/signIn")
    }
}

export default saveRecourse;