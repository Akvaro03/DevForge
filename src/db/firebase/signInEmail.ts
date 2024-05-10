import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "./db";

function signInEmail() {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, "alvaroballarini2010@gmail.com", "51351361")
        .then(credential =>
            console.log(credential)
        )
        .catch(e =>{
            console.log(e)
        })
}

export default signInEmail;     