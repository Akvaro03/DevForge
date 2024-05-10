import { User } from "firebase/auth";
import recourseType from "./recourseType";

interface userType extends User{
    saves?: recourseType[]
}

export default userType;