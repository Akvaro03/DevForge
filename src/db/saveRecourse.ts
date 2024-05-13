import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "./firebase/db";
import { useRouter } from "next/navigation";
import postFirebase from "./firebase/postFirebase";
import recourseType from "@/types/recourseType";
import getFirebase from "./firebase/getFirebase";

function useSaveRecourse(): (pin: recourseType) => void {

    const [user] = useAuthState(auth)
    const router = useRouter()

    async function saveRecourse(pin: recourseType): Promise<void> {
        !user && router.push("/createAccount")
        const userUid = user ? user?.uid : ""
        try {
            const userSaves = await getFirebase(userUid)
                .then(data => data as { saves: Array<recourseType> })
                .then(data => data.saves)
            const isSaved = userSaves.some(pinSave => pinSave.name === pin.name)

            if (isSaved) {
                return postFirebase(user?.uid, {
                    saves: userSaves.filter(pinSaves => pinSaves.name != pin.name)
                })
            }

            postFirebase(user?.uid, {
                saves: [...userSaves, pin]
            })
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return saveRecourse
}

export default useSaveRecourse;