import { categoryType } from "./categoryTypes";

interface userType {
    password: string,
    email: string,
    saves: categoryType[]
}

export default userType;