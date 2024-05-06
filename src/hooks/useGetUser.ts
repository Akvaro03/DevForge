import userType from "@/types/userType";
interface GetUserHookResult {
    user: userType | null;
}


function useGetUser(): GetUserHookResult {
    const user: userType | null = null
    return { user }
}

export default useGetUser;