import userType from "@/types/userType";
interface GetUserHookResult {
    user: userType | null;
}


function getUser(): GetUserHookResult {
    const user: userType | null = null
    return { user }
}

export default getUser;