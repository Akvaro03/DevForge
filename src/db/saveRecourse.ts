"use server"
import userType from "@/types/userType";
import { redirect } from "next/navigation";
import getUser from "./getUser";

function saveRecourse(nameRecourse: string) {

    const { user }: { user: userType | null } = getUser()

    if (!user) {
        redirect("/signIn")
    }
}

export default saveRecourse;