import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "./firebase/db";

function useSaveRecourse(): (a: string) => void {

    const [user] = useAuthState(auth)

    function saveRecourse(nameRecourse: string): void {
        console.log(nameRecourse)
        console.log(user)

    }
    return saveRecourse
}

export default useSaveRecourse;