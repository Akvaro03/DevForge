"use server"
import userType from "@/types/userType";
import useGetUser from "./useGetUser";
import { redirect } from "next/navigation";

function useSaveRecourse(nameRecourse: string) {
    const { user }: { user: userType | null } = useGetUser()
    if (!user) {
        console.log(nameRecourse)
        redirect("/signIn")
    }
}

export default useSaveRecourse;